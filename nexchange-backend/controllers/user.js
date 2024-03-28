import express from "express";
import { Path } from "path ";
import { Router } from "express";

const router = express.Router();
import User from '../model/user.js'
import ErrorHandler from "../utils/ErrorHandler.js";

//config
if(process.env.NODE_ENV !== "PRODUCTION"){
  dotenv.config({
      path:"./config/.env"
  })
}


// create user
router.post("/create-user", async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const userEmail = await User.findOne({ email });
  
      if (userEmail) {  
        return next(new ErrorHandler("User already exists", 400));
      }

      if (!userEmail.toLowerCase().endsWith('@bennett.edu.in')){
        return next(new ErrorHandler("invalid bennett id!", 400));
      }
  
      const user = {
        name: name,
        email: email,
        password: password
      };
  
      const activationToken = createActivationToken(user);
  
      const activationUrl = `https://localhost:${process.env.PORT}/${activationToken}`;
  
      try {
        await sendMail({
          email: user.email,
          subject: "Activate your account",
          message: `Hello ${user.name}, please click on the link to verify and activate your nexchange Saccount: ${activationUrl}`,
        });
        res.status(201).json({
          success: true,
          message: `please check your email:- ${user.email} to activate your account!`,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  });
  

// create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};


// activate user
router.post(
  "/activation",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body;

      const newUser = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newUser) {
        return next(new ErrorHandler("Invalid token", 400));
      }
      const { name, email, password } = newUser;

      let user = await User.findOne({ email });

      if (user) {
        return next(new ErrorHandler("User already exists", 400));
      }
      user = await User.create({
        name,
        email,
        password,
      });

      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
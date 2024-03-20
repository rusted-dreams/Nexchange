import express from "express";
import { Path } from "mongoose";
import { Router } from "express";
const router = express.Router();
import {upload} from '../multer';

// create user
router.post("/create-user", async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const userEmail = await User.findOne({ email });
  
      if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
      }
  
      const user = {
        name: name,
        email: email,
        password: password
      };
  
      const activationToken = createActivationToken(user);
  
      const activationUrl = `https://eshop-tutorial-pyri.vercel.app/activation/${activationToken}`;
  
      try {
        await sendMail({
          email: user.email,
          subject: "Activate your account",
          message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
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
  
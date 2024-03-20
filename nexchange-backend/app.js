import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import ErrorHandler from "./utils/ErrorHandler.js";
const app = express();

app.use(express.json()); // to support JSON-encoded
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true})); 

//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    dotenv.config({
        path:"./config/.env"
    })
}


app.use(ErrorHandler)
export default app;
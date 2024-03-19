import express from "express";
import dotenv from 'dotenv';
const app = express();


//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    dotenv.config({
        path:"./config/.env"
    })
}

export default app;
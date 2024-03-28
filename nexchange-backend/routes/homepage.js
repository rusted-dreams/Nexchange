import express from "express";

const router = express.Router();

router.get("/", (err, req, res, next) => {
    alert("welcome to nexchange");
})
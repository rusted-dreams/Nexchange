import app from "./app.js";
import dotenv from "dotenv";

// handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`error: ${err.message}`);
    console.log(`shutting down server for handling uncaught exception`);
});

//config
if(process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({
        path: "./config/.env"
    });
}

//create server
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is up on http://localhost:${process.env.PORT}`);
})


// unhandled promise rejection
process.on("unhandledRejection", (err)=>{
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhadled promise rejection`);

    server.close( () => {
        process.exit(1);
    })
});
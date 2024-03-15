import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express()
dotenv.config();

app.listen(3000, ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("database connected");
        console.log('server is running !!!');
    })
    .catch((err)=>{
        console.log(err);
    })
})
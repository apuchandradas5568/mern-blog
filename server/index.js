import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
// =============== Middleware ====================
import userRoutes from "./routes/user_route.js"

const app = express()
dotenv.config();






app.use("/api/user", userRoutes)














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

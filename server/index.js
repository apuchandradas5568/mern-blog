import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
// =============== Middleware ====================
import userRoutes from "./routes/user_route.js"
import authRoutes from "./routes/auth_route.js"

const app = express()
dotenv.config();
app.use(express.json()) //its for to accept json






app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)













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

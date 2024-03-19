import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
// =============== Middleware ====================
import userRoutes from "./routes/user_route.js"
import authRoutes from "./routes/auth_route.js"
import postRoutes from './routes/post_route.js'

const app = express()
dotenv.config();
app.use(express.json()) //its for to accept json
app.use(cookieParser())





app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)
app.use('/api/post', postRoutes)













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

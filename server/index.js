import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import path from 'path'
// =============== Middleware ====================
import userRoutes from "./routes/user_route.js"
import authRoutes from "./routes/auth_route.js"
import postRoutes from './routes/post_route.js'
import commentRoutes from './routes/comment_route.js'


const app = express()
dotenv.config();

app.use(express.json()) //its for to accept json
app.use(cookieParser())

const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})


app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)




app.listen(3000, ()=>{
    mongoose.connect("mongodb+srv://ariyanavra:Apu1234567@cluster0.q1s8yo1.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("database connected");
        console.log('server is running !!!');
    })
    .catch((err)=>{
        console.log(err);
    })
})

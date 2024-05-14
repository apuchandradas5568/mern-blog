import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";




export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token // for this have to install package cookie-parser
    if(!token) {
        return next(errorHandler(401, 'Unauthorized'))
    }
    jwt.verify(token, "aaaaaaaaaaaaaabbbbbbcccccccccc", (err, user)=>{
        if(err){
            return next(errorHandler(401, 'Unauthorized'))
        }
        req.user = user
        next()
    })
}
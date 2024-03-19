import express from "express"
import { verifyToken } from "../utils/verifyToken.js"
import { create } from "../controllers/post_controller.js"

const router = express.Router()


router.post('/create', verifyToken, create)



export default router;
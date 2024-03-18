import express from "express"
import { updateUser } from "../controllers/user_controller.js";
import { verifyToken } from "../utils/verifyToken.js";





const router  = express.Router()


router.put('/update/:userId', verifyToken,  updateUser)




export default router;
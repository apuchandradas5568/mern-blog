import express from "express"
import { signin, signup } from "../controllers/auth_controller.js"

const router  = express.Router()

router.post("/signup", signup )
router.post("/signin", signin )
// router.post("/sign-up",  )



export default router;
import express from "express"
import { test } from "../controllers/user_controller.js";

const router  = express.Router()

router.get("/bettu", test )


export default router;
import express from "express"
import { first } from "../controllers/first.js"

const router = express.Router()

router.get("/",first)

export default router;
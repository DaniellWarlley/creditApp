import express from "express"
import { cad, log } from "../controllers/authController.js"

const router = express.Router()

router.post('/cad', cad)
router.post('/log', log)

export default router
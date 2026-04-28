import express from "express"
import { cad, log, verifyToken } from "../controllers/authController.js"
import checkToken from "../middleware/checkToken.js"

const router = express.Router()

router.post('/cad', cad)
router.post('/log', log)
router.get('/verifyToken', checkToken, verifyToken)

export default router
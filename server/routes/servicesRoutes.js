import { createNewService } from "../controllers/servicesController.js"
import checkToken from "../middleware/checkToken.js"
import express from "express"

const router = express.Router()

router.post('/services', checkToken, createNewService)

export default router
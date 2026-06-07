import { createNewService, deleteOneService, editOneService, getAllUserServices } from "../controllers/servicesController.js"
import checkToken from "../middleware/checkToken.js"
import express from "express"

const router = express.Router()

router.post('/services', checkToken, createNewService)
router.get('/services', checkToken, getAllUserServices)
router.delete('/services/:serviceId', checkToken, deleteOneService)
router.put('/services', checkToken, editOneService)

export default router
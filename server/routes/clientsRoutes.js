import express from "express"
import { createClient, getAllUserClients } from "../controllers/clientController.js"

const router = express.Router()

router.post('/client', createClient)
router.get('/clients/:userId', getAllUserClients)

export default router
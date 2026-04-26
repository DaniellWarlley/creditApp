import express from "express"
import { createClient, deleteClientById, getAllUserClients, getClientById } from "../controllers/clientController.js"

const router = express.Router()

router.post('/client', createClient)
router.get('/clients/:userId', getAllUserClients)
router.get('/client/:clientId', getClientById)
router.delete('/client/:clientId', deleteClientById)

export default router
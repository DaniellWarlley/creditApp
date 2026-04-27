import express from "express"
import { createClient, deleteClientById, getAllUserClients, getClientById } from "../controllers/clientController.js"
import checkToken from './../middleware/checkToken';

const router = express.Router()

router.post('/client', checkToken, createClient)
router.get('/clients/:userId', checkToken, getAllUserClients)
router.get('/client/:clientId', checkToken, getClientById)
router.delete('/client/:clientId', checkToken, deleteClientById)

export default router
import express from "express"
import { createClient, deleteClientById, getAllUserClients, getClientById } from "../controllers/clientController.js"
import checkToken from './../middleware/checkToken.js';

const router = express.Router()

router.post('/client', checkToken, createClient)
router.get('/clients', checkToken, getAllUserClients)
router.get('/client/:clientId', checkToken, getClientById)
router.delete('/client/:clientId', checkToken, deleteClientById)

export default router
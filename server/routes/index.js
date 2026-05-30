import express from "express"
import authRoutes from './authRoutes.js'
import clientsRoutes from './clientsRoutes.js'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/clients', clientsRoutes)

export default router
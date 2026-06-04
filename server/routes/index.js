import express from "express"
import authRoutes from './authRoutes.js'
import clientsRoutes from './clientsRoutes.js'
import servicesRoutes from './servicesRoutes.js'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/clients', clientsRoutes)
router.use('/services', servicesRoutes)

export default router
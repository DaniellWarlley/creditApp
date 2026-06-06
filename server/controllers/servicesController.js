import { Services } from '../models/serviceSchema.js'

export const createNewService = async (req, res) => {
    const { name, valor } = req.body
    const userId = req.userId

    if(!name || !valor) return res.status(400).json({msg: 'Dados invalidos'})
    
    if(await Services.findOne({userId, name: name})) return res.status(400).json({msg: 'Client alredy exist'})
    
        try{
        const service = new Services({
            name: name,
            valor: valor,
            userId: userId
        })

        await service.save()

        return res.status(200).json(service)
    }catch(err){
        return res.status(500).json(err)
    }
}

export const getAllUserServices = async (req, res) => {
    const userId = req.userId

    if(!userId) return res.status(400).json({msg: 'Dados invalidos'})

    try {
        const services = await Services.find({userId: userId})

        return res.status(200).json(services)
    } catch (err) {
        return res.status(500).json(err)
    }
}

export const deleteOneService = async (req, res) => {
    const { serviceId } = req.params

    if(!serviceId) return res.status(400).json({msg: 'Dados invalidos'})

    try{
        const service = await Services.findByIdAndDelete(serviceId)

        if (!service) return res.status(404).json({msg: 'Service not found'})

        return res.status(200).json(service)
    }catch(err){
        return res.status(500).json(err)
    }
}
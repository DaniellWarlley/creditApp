import { Services } from '../models/serviceSchema.js'

export const createNewService = async (req, res) => {
    const { data } = req.body
    const userId = req.userId
    if(!data) return res.status(400).json({msg: 'Dados invalidos'})

    try{
        const service = new Services({
            nome: data.nome,
            valor: data.valor,
            userId: userId
        })

        await service.save()

        return res.status(200).json(service)
    }catch(err){
        return res.status(500).json(err)
    }
}
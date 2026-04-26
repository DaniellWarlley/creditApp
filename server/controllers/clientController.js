import { Users } from "../models/authSchema.js"
import { Clients } from "../models/clientSchema.js"

export const createClient = async (req, res) => {
    console.log(req.body)
    const { userId, data } = req.body || {}

    if(!userId || !data  ) return res.status(400).json({msg: 'Dados invalidos'})

    if(!await Users.findById(userId)) return res.status(400).json({msg: 'User does not exist'})

    if(await Clients.findOne({userId, name: data.name, contato: data.contato})) return res.status(400).json({msg: 'Client alredy exist'})

    const saldo = data.credito - data.debito

    try{
        const client = new Clients({userId, name: data.name, contato: data.contato, saldo: saldo, debito: data.debito, credito: data.credito})

        await client.save()

        return res.status(201).json(client)
    }catch(err){
        return res.status(500).json(err)
    }
}

export const getAllUserClients = async (req, res) => {
    const {userId} = req.params

    if(!userId) return res.status(400).json({msg: 'Dados invalidos'})

    try{
        const clients = await Clients.find({userId})

        return res.status(200).json(clients)
    }catch(err){
        return res.status(500).json(err)
    }
}

export const getClientById = async (req, res) => {
    const { clientId } = req.params

    if(!clientId) return res.status(400).json({msg: 'Dados invalidos'})

    try{
        const client = await Clients.findById(clientId)

        if(!client) return res.status(404).json({msg: 'Cliente não encontrado'})

        return res.status(200).json(client)
    }catch(err){
        return res.status(500).json(err)
    }
}

export const deleteClientById = async (req, res) => {
    const { clientId } = req.params

    if(!clientId) return res.status(400).json({msg: 'Dados invalidos'})
    console.log(clientId)
    try {
        const client = await Clients.findByIdAndDelete(clientId)

        if(!client) return res.status(404).json({msg: 'Cliente não encontrado'})

        return res.status(200).json({msg: 'Cliente encontrado com sucesso'})
    } catch (error) {
        return res.status(500).json(res)
    }
}
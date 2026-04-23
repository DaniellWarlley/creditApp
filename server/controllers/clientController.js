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

    console.log(userId)

    try{
        const clients = await Clients.find({userId})

        return res.status(200).json(clients)
    }catch(err){
        return res.status(500).json(err)
    }
}
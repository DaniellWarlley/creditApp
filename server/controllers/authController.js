import { Users } from "../models/authSchema.js"
import bcrypt from 'bcryptjs'
import createToken from "../utils/createToken.js"

export const cad = async (req, res) => {
    const {name, email, passWord} = req.body || {}

    if(!name || !email || !passWord) return res.status(400).json({msg: 'Dados invalidos'})
    
    try{
        const existingUser = await Users.findOne({email})

        if(existingUser){
            return res.status(409).json({msg: 'User alredy exist'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(passWord, salt)

        const user = new Users({name, email, passWord: hashPass})

        await user.save()
        
        return res.status(201).json({
            email: user.email, 
            name: user.name, 
            id: user._id, 
            token: createToken(user._id)
        })
    }catch(err){
        return res.status(500).json(err)
    }
}

export const log = async (req, res) => {
    const { email, passWord } = req.body

    if( !email || !passWord) return res.status(400).json({msg: 'Dados invalidos'})

    try{
        const existingUser = await Users.findOne({ email })

        if(!existingUser){
            return res.status(404).json({msg: "User not found"})
        }

        const match = await bcrypt.compare(passWord, existingUser.passWord)

        if(!match){
            return res.status(401).json({msg: "Invalid password"})
        }

        return res.status(200).json({
            name: existingUser.name, 
            email: existingUser.email,
            id: existingUser._id,
            token: createToken(existingUser._id)
        })

    }catch(err){
        return res.status(500).json(err)
    }
}

export const verifyToken = async(req, res) => {
    const userId = req.userId

    if(userId){
        return res.status(200).json({valid: true})
    }
    return res.status(401).json({valid: false})
}
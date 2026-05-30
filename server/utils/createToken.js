import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export default function createToken(id){
    const token = jwt.sign({id: id}, process.env.SECRET, {expiresIn: '7d'})

    return token
}
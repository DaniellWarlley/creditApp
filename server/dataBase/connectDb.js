import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const user = process.env.DB_USER
const pass = process.env.DB_PASS

export default async function connectDb() {
    try{
        await mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.hqdogy1.mongodb.net/?appName=Cluster0`)
    }catch(err){
        console.log(err)
    }
}
import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const user = process.env.DB_USER
const pass = process.env.DB_PASS

export default async function connectDb() {
    try{
        await mongoose.connect(`mongodb://${user}:${pass}@ac-szw26sa-shard-00-00.cc0g8o5.mongodb.net:27017,ac-szw26sa-shard-00-01.cc0g8o5.mongodb.net:27017,ac-szw26sa-shard-00-02.cc0g8o5.mongodb.net:27017/?ssl=true&replicaSet=atlas-2tilln-shard-0&authSource=admin&appName=Cluster0`)
    }catch(err){
        console.log(err)
        throw err
    }
}
import express from 'express'
import router from './routes/index.js'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './dataBase/connectDb.js'

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())
app.use(router)

app.get('/', (req, res) => {
    res.send('heloo word')
})

connectDb().then(() => {
    app.listen(3333, () => {
        console.log('rodando servidor')
    })
})
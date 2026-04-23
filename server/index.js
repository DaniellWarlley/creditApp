import express from 'express'
import router from './routes/index.js'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './dataBase/connectDb.js'

const app = express()
const PORT = process.env.PORT || 3333

dotenv.config()
app.use(express.json())
app.use(cors())
app.use(router)

app.get('/', (req, res) => {
    res.send('heloo word')
})

connectDb()
    .then(() => console.log("Banco conectado"))
    .catch(err => console.error("Erro no banco:", err));

app.listen(PORT, () => {
    console.log("rodando servidor");
});
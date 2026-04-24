import express from 'express'
import router from './routes/index.js'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './dataBase/connectDb.js'

const app = express()
<<<<<<< HEAD
const PORT = process.env.PORT || 3333
=======
const PORT = process.env.PORT || 3000
>>>>>>> 0e3a7e7e5b0ee4a9cc37330471b2d8eeb989605b

dotenv.config()
app.use(express.json())
app.use(cors())
app.use(router)

app.get('/', (req, res) => {
    res.send('heloo word')
})

connectDb()
<<<<<<< HEAD
    .then(() => console.log("Banco conectado"))
    .catch(err => console.error("Erro no banco:", err));

app.listen(PORT, () => {
    console.log("rodando servidor");
});
=======
  .then(() => console.log("Banco conectado"))
  .catch(err => console.error("Erro no banco:", err));

app.listen(PORT, () => {
  console.log("rodando servidor");
});
>>>>>>> 0e3a7e7e5b0ee4a9cc37330471b2d8eeb989605b

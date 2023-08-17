const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
require('dotenv').config()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => { console.log("conexión de base de datos exitosa!")})



app.use('/api/category', require('./routes/category'))

app.use('/api/videogame', require('./routes/videogame'))

app.use('/api/auth', require('./routes/auth'))


const port = process.env.PORT;

app.listen(port, () => {
    console.log(`servidor de video juegos MERN corriendo en el puerto ${port}`)
})


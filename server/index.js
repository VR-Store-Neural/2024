import express from 'express' 
import mongoose from 'mongoose' 
import dotenv from 'dotenv' 
import cors from 'cors' 

import authRoute from './routes/auth.js'

const app = express() 
dotenv.config() 

// Константы
const PORT = process.env.PORT || 3002 
const DB_USER = process.env.DB_USER 
const DB_PASSWORD = process.env.DB_PASSWORD 
const DB_NAME = process.env.DB_NAME 

// Middleware - функция, которая расширяет функции express
app.use(cors()) 
app.use(express.json()) 

// Routes
// http://localhost:3002
app.use('/api/auth', authRoute)


// Объявляет функцию start, которая асинхронно запускает сервер Express и подключается к базе данных MongoDB при помощи Mongoose.
 async function start () {
    try { 
        await mongoose.connect (
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@fullstack.gbilnmq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`  
        )
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))   
    } catch (error) {
        console.log(error)
    }
}
start()    
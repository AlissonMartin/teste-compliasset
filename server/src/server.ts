import cors from 'cors'
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import api from './routes/routes'

dotenv.config()


const server = express()

server.use(cors({credentials: true}))
server.use(express.json())
server.use('/public', express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: true }));


server.use(api)

server.listen(process.env.PORT)
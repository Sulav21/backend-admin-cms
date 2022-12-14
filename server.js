import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express()
const PORT = process.env.PORT || 8000

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

// database connection
import {dbConnection} from '../api-admin-cms/src/config/dbConfig.js'
dbConnection()

// routers
// User Routers
import userRouter from './src/routers/adminRouters.js'
app.use('/api/v1/user',userRouter)



app.get('/',(req,res,next)=>{
    res.json({
        message:"You have reached the admin api"
    })
})

// global error handling
app.use((err,req,res,next)=>{
    console.log(err)
    res.json({
        status:"error",
        message:err.message
    })
})

app.listen(PORT,error=>{
    error && console.log(error)
    console.log(`Your server is running on PORT:${PORT}`)
})
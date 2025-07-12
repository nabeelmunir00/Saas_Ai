import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRoutes from './routes/ai.routes.js'
import connectCloudinary from './config/cloudinary.js'


const app = express()

await connectCloudinary()

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use(clerkMiddleware())
app.use(requireAuth())

app.use('/api/ai',aiRoutes)
app.get('/',(req,res)=>{
    res.send("Server is Live..")
})

app.listen(port,()=>{
    console.log(`Server is running http://localhost:${port}`)
})
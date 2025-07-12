import express from 'express'
import { auth } from '../middlewares/auth.js'
import { generateArtical, generateBlogTitle, generateImage } from '../controllers/ai.controller.js'


const aiRoutes = express.Router()


aiRoutes.post('/generate-artical',auth,generateArtical)
aiRoutes.post('/blog-title',auth,generateBlogTitle)
aiRoutes.post('/generate-image',auth,generateImage)

export default aiRoutes
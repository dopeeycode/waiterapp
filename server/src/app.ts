import express from 'express'
import mongoose from 'mongoose'
import { env } from './env'
import { router } from './http/route'

mongoose
  .connect(env.DATABASE_URL)
  .then(() => {
    console.log('🚀 Connect MongoDB')
  })
  .catch((error) => {
    console.error('❌ Failed to connect MongoDB')
    throw new Error(error)
  })

export const app = express()

app.use(express.json())
app.use(router)

import 'dotenv/config'
import express from 'express'
import connectDB from './config/mongo'

connectDB().then(() => console.log('DB connected...'))

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Home'))

app.listen(PORT, () => console.log(`Running on port ${PORT}...`))

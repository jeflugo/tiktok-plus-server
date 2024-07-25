import 'dotenv/config'
import express from 'express'
import connectDB from './config/mongo'
import morgan from 'morgan'
import { router } from './routes'

connectDB().then(() => console.log('DB connected...'))

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('tiny'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Home'))

app.use(router)

app.listen(PORT, () => console.log(`Running on port ${PORT}...`))

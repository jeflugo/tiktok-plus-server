import 'dotenv/config'
import express from 'express'
import connectDB from './config/mongo'
import { router } from './routes/users'
import morgan from 'morgan'

connectDB().then(() => console.log('DB connected...'))

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('tiny'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Home'))

app.use('/users', router)

app.listen(PORT, () => console.log(`Running on port ${PORT}...`))

import { connect } from 'mongoose'

const connectDB = async () => {
	const DB_URI = process.env.DB_URI as string
	const DB_NAME = 'tiktok-plus'
	return await connect(DB_URI, { dbName: DB_NAME })
}

export default connectDB

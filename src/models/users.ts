import { model, Schema } from 'mongoose'
import { TUser } from '../types'

const userSchema = new Schema<TUser>(
	{
		name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

const User = model('users', userSchema)

export default User

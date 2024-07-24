import User from '../models/users'
import { TUser } from '../types'

const getUsers = async () => {
	return await User.find()
}
const getUser = async (id: string) => {
	return await User.findById(id)
}
const postUser = async (user: TUser) => {
	return await User.create(user)
}
const updateUser = async (id: string, updates: Partial<TUser>) => {
	return await User.findByIdAndUpdate(id, updates, { new: true })
}
const deleteUser = async (id: string) => {
	return await User.findByIdAndDelete(id)
}

export default { getUsers, getUser, postUser, updateUser, deleteUser }

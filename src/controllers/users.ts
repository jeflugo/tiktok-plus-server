import { Request, Response } from 'express'
import service from '../services/users'

const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await service.getUsers()
		res.json(users)
	} catch (e) {
		res.status(500).json('GET_USERS_ERROR')
	}
}
const getUser = async (req: Request, res: Response) => {
	try {
		const user = await service.getUser(req.params.id)
		res.json(user)
	} catch (e) {
		res.status(500).json('GET_USER_ERROR')
	}
}
const postUser = async (req: Request, res: Response) => {
	try {
		const newUser = await service.postUser(req.body)
		res.json(newUser)
	} catch (e) {
		res.status(500).json('POST_USER_ERROR')
	}
}
const upadateUser = async (req: Request, res: Response) => {
	try {
		const user = await service.updateUser(req.params.id, req.body)
		res.json(user)
	} catch (e) {
		res.status(500).json('UPDATE_USER_ERROR')
	}
}
const deleteUser = async (req: Request, res: Response) => {
	try {
		const users = await service.deleteUser(req.params.id)
		res.json(users)
	} catch (e) {
		res.status(500).json('DELETE_USER_ERROR')
	}
}

export { getUsers, getUser, postUser, upadateUser, deleteUser }

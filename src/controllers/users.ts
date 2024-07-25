import { Request, Response } from 'express'
import service from '../services/users'
import { tryCatchWrapper } from '../utils/tryCatchWrapper'

const getUsers = tryCatchWrapper(async (req: Request, res: Response) => {
	const users = await service.getUsers()
	res.json(users)
}, 'GET_USERS_SERVER_ERROR')

const getUser = tryCatchWrapper(async (req: Request, res: Response) => {
	const user = await service.getUser(req.params.id)
	res.json(user)
}, 'GET_USER_SERVER_ERROR')

const postUser = tryCatchWrapper(async (req: Request, res: Response) => {
	const newUser = await service.postUser(req.body)
	res.json(newUser)
}, 'POST_USER_SERVER_ERROR')

const upadateUser = tryCatchWrapper(async (req: Request, res: Response) => {
	const user = await service.updateUser(req.params.id, req.body)
	res.json(user)
}, 'UPDATE_USER_SERVER_ERROR')

const deleteUser = tryCatchWrapper(async (req: Request, res: Response) => {
	const users = await service.deleteUser(req.params.id)
	res.json(users)
}, 'DELETE_USER_SERVER_ERROR')

export { getUsers, getUser, postUser, upadateUser, deleteUser }

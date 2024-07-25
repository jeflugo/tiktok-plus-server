import { Request } from 'express'
import service from '../services/users'
import { tryCatchWrapper } from '../utils/tryCatchWrapper'

const getUsers = tryCatchWrapper(
	() => service.getUsers(),
	'GET_USERS_SERVER_ERROR'
)

const getUser = tryCatchWrapper(
	(req: Request) => service.getUser(req.params.id),
	'GET_USER_SERVER_ERROR'
)

const loginUser = tryCatchWrapper(
	(req: Request) => service.loginUser(req.body),
	'LOGIN_USER_SERVER_ERROR'
)

const registerUser = tryCatchWrapper(
	(req: Request) => service.postUser(req.body),
	'REGISTER_USER_SERVER_ERROR'
)

const upadateUser = tryCatchWrapper(
	(req: Request) => service.updateUser(req.params.id, req.body),
	'UPDATE_USER_SERVER_ERROR'
)

const deleteUser = tryCatchWrapper(
	(req: Request) => service.deleteUser(req.params.id),
	'DELETE_USER_SERVER_ERROR'
)

export { getUsers, getUser, loginUser, registerUser, upadateUser, deleteUser }

import { Router } from 'express'
import {
	deleteUser,
	getUser,
	getUsers,
	loginUser,
	registerUser,
	upadateUser,
} from '../controllers/users'

const router = Router()

router.route('/').get(getUsers)
router.route('/:id').get(getUser).put(upadateUser).delete(deleteUser)
router.route('/register-user').post(registerUser)
router.route('/login-user').post(loginUser)

export { router }

import { Router } from 'express'
import {
	deleteUser,
	getUser,
	getUsers,
	postUser,
	upadateUser,
} from '../controllers/users'

const router = Router()

router.route('/').get(getUsers).post(postUser)
router.route('/:id').get(getUser).put(upadateUser).delete(deleteUser)

export { router }

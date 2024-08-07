import { Request, Response } from 'express'
import { handleHttp } from './errorHandler'

const tryCatchWrapper =
	(handler: Function, errorType: string) =>
	async (req: Request, res: Response) => {
		try {
			res.json(await handler(req))
		} catch (error) {
			const msg = error instanceof Error ? error.message : null
			handleHttp(res, errorType, msg)
		}
	}

export { tryCatchWrapper }

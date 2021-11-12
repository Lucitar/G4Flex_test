import { Router, Response, Request, NextFunction } from 'express'
import user from '@/controllers/user'
import queue from '@/controllers/queue'

import uservalidator from '@/validation/user'

const router = Router()

router.get('/health', (_, res: Response) => res.json('ok'))

// Validation Users
// router.use('/users', (req: Request, res: Response, next: NextFunction) => uservalidator.validateUserData(req, res))

// Usuários
// router.use('/users', uservalidator.validateUserCreate)
router.get('/users', (req: Request, res: Response) => user.listUsers(req, res))
router.get('/users/:login', (req: Request, res: Response) =>
  user.listOne(req, res)
)
router.post('/users', (req: Request, res: Response) =>
  user.createUser(req, res)
)
router.put('/users', (req: Request, res: Response) => user.updateUser(req, res))
router.delete('/users', (req: Request, res: Response) =>
  user.deleteUser(req, res)
)

// Filas
router.get('/queue', (req: Request, res: Response) =>
  queue.listQueues(req, res)
)
router.get('/queue/:name', (req: Request, res: Response) =>
  queue.listOne(req, res)
)
router.post('/queue', (req: Request, res: Response) =>
  queue.createQueue(req, res)
)
router.put('/queue', (req: Request, res: Response) =>
  queue.updateQueue(req, res)
)
router.delete('/queue', (req: Request, res: Response) =>
  queue.deleteQueue(req, res)
)

export default router

import { Router } from 'express'

import users from './user'
import tasks from './tasks'
import orders from './orders'

const router = new Router()

router.use('/users', users)
router.use('/tasks', tasks)
router.use('/orders', orders)

export default router

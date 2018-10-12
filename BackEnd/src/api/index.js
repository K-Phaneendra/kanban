import { Router } from 'express'

import users from './user'
import tasks from './tasks'

const router = new Router()

router.use('/users', users)
router.use('/tasks', tasks)

export default router

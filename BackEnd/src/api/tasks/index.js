import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { createtask } from './controller'
import { schema } from './model'

const router = new Router()

// router.get('/fetchusers', fetchusers)
router.post('/createtask', createtask)

export default router

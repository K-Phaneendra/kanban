import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { createuser, fetchusers, updateuser } from './controller'
import { schema } from './model'

const router = new Router()

router.get('/fetchusers', fetchusers)
router.post('/createuser', createuser)
router.post('/updateuser', updateuser)

export default router

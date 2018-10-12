import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import {
  createuser,
  fetchusers,
  updateuser,
  asigntask,
  updateassignedtasks
} from './controller'
import { schema } from './model'

const router = new Router()

router.get('/fetchusers', fetchusers)
router.post('/createuser', createuser)
router.post('/updateuser', updateuser)
router.post('/asigntask/:id', asigntask)
router.post('/updateassignedtasks/:id', updateassignedtasks)

export default router

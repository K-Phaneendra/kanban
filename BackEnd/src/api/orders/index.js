import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { fetchOrders, submitOrder, testtxn, testresponse } from './controller'
import { schema } from './model'

const router = new Router()

router.get('/fetchOrders', fetchOrders)
router.post('/submitOrder', submitOrder)
router.get('/testtxn/:id', testtxn)
router.post('/testresponse', testresponse)

export default router

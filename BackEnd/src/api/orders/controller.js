import { success, notFound } from '../../services/response/'
import Orders from './model'

var request = require('request')
var checksum = require('../../services/PaymentGateway/PayTM/model/checksum')

// export const response = (req, res, next) => {
//   console.log('req in paytm response', req.body)
//   const message = `Status: ${req.body.STATUS}, Code: ${
//     req.body.RESPCODE
//   } Message: ${req.body.RESPMSG}`

//   res.send({
//     message
//   })
// }

export const fetchOrders = (req, res, next) => {
  Orders.find({}).then(orders => res.send({ orders }))
}

export const submitOrder = (req, res, next) => {
  // generate Checksumhash
  var paramlist = req.body.order
  var paramarray = new Array()
  var PAYTM_MERCHANT_KEY
  Object.keys(paramlist).map(name => {
    if (name === 'PAYTM_MERCHANT_KEY') {
      PAYTM_MERCHANT_KEY = paramlist[name]
    } else {
      paramarray[name] = paramlist[name]
    }
  })
  // paramarray['CALLBACK_URL'] = 'http://localhost:3001/response'; // in case if you want to send callback
  console.log(PAYTM_MERCHANT_KEY)

  checksum.genchecksum(paramarray, PAYTM_MERCHANT_KEY, (err, result) => {
    if (!err) {
      const orderDBData = { ...req.body.orderDB }
      const resultObj = { ...result }
      orderDBData.CHECKSUMHASH = result.CHECKSUMHASH
      orderDBData.payTM = resultObj
      Orders.create(orderDBData).then(created => {
        res.send({
          error: false,
          order: created,
          restdata: resultObj
        })
      })
    }
  })
}

export const testtxn = (req, res, next) => {
  Orders.findById(req.params.id).then(order => {
    res.render(`${__dirname}\\views\\pgredirect.ejs`, { restdata: order.payTM })
  })
}

export const testresponse = (req, res, next) => {
  const config = {
    PAYTM_MERCHANT_KEY: 'hzG%U9%n&lqX%&S5'
  }
  console.log('in response post', req.body)

  // update merchant DB
  Orders.findOneAndUpdate(
    {
      orderId: req.body.ORDERID
    },
    { payTMResponse: req.body }
  ).then(updated => {})

  var paramlist = req.body
  var paramarray = new Array()
  if (checksum.verifychecksum(paramlist, config.PAYTM_MERCHANT_KEY)) {
    console.log('true')
    // check the checksum with orderId present in merchant db
    Orders.findOne({
      orderId: req.body.ORDERID,
      totalAmount: req.body.TXNAMOUNT
    }).then(order => {
      console.log('order...', order)
      if (order) {
        console.log('in if')
        res.render(`${__dirname}\\views\\response.ejs`, {
          restdata: 'true',
          paramlist: paramlist
        })
      } else {
        console.log('in else')
        res.send({
          error: true,
          message: 'Invalid Order: No Data Found in Merchant DB'
        })
      }
    })
  } else {
    console.log('false')
    res.render(`${__dirname}\\views\\response.ejs`, {
      restdata: 'false',
      paramlist: paramlist
    })
  }
  // next(finalVerificationTransactionStatus(req, res))
}

export const finalVerificationTransactionStatus = (req, res) => {
  const transactionURL =
    'https://securegw-stage.paytm.in/merchant-status/getTxnStatus'
  const JsonData = {
    MID: req.body.MID,
    ORDERID: req.body.ORDERID,
    CHECKSUMHASH: req.body.CHECKSUMHASH
  }
  console.log('JsonData', JsonData)
  request.post({ url: transactionURL, params: JsonData }, function (
    err,
    response,
    body
  ) {
    console.log('error:', err) // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
    console.log('body:', body) // Print the HTML for the Google homepage.
  })
}

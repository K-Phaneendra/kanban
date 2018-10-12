import { success, notFound } from '../../services/response/'
import User from './model'

export const fetchusers = (req, res, next) => {
  User.find({}, (err, result) => {
    if (!err) {
      res.send({ error: false, data: result.map(r => r.view()) })
    }
  })
  // findUsersandSend(req, res, next)
}

export const createuser = (req, res, next) => {
  User.create({ name: req.body.name, image: req.body.image }, (err, result) => {
    if (!err) {
      User.find({}).then(userData => {
        res.send({
          error: false,
          message: 'Successfully Created User',
          data: userData
        })
      })
    }
  })
}

import { success, notFound } from '../../services/response/'
import Task from './model'

export const fetchtasks = (req, res, next) => {
  Task.find({}, (err, result) => {
    if (!err) {
      res.send({ error: false, data: result })
    }
  })
}

export const createtask = (req, res, next) => {
  Task.create({ name: req.body.name }, (err, result) => {
    if (!err) {
      Task.find({}).then(userData => {
        res.send({
          error: false,
          message: 'Successfully Created Task',
          data: userData
        })
      })
    }
  })
}

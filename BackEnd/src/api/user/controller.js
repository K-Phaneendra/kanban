import { success, notFound } from '../../services/response/'
import User from './model'

export const fetchusers = (req, res, next) => {
  User.find({})
    .populate('tasks.task')
    .exec()
    .then(populatedRes => res.send({ error: false, data: populatedRes }))
}

export const createuser = (req, res, next) => {
  User.create({ name: req.body.name, image: req.body.image }, (err, result) => {
    if (!err) {
      res.send({
        error: false,
        message: 'Successfully Created User',
        data: result
      })
    }
  })
}

export const updateuser = (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.body.id },
    { name: req.body.name, image: req.body.image },
    (err, result) => {
      if (!err) {
        User.find({})
          .populate('tasks.task')
          .exec()
          .then(populatedRes =>
            res.send({
              error: false,
              data: populatedRes,
              message: 'Successfully Updated User'
            })
          )
      }
    }
  )
}

export const asigntask = (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: { tasks: req.body }
    },
    (err, result) => {
      if (!err) {
        User.find({})
          .populate('tasks.task')
          .exec()
          .then(populatedRes =>
            res.send({
              error: false,
              data: populatedRes,
              message: 'Successfully Assigned Task'
            })
          )
      }
    }
  )
}

export const updateassignedtasks = (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: { tasks: req.body }
    },
    (err, result) => {
      if (!err) {
        User.find({})
          .populate('tasks.task')
          .exec()
          .then(populatedRes =>
            res.send({
              error: false,
              data: populatedRes,
              message: 'Successfully Updated Tasks'
            })
          )
      }
    }
  )
}

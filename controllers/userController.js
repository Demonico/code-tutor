const db = require('../models')

// User controller Methods
module.exports = {
  findAll: (req, res) => {
    db.User.find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err))
  },
  findById: (req, res) => {
    db.User.findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err))
  },
  create: (req, res) => {
    const user = {
      fName: req.body.fName,
      lName: req.body.lName,
      email: req.body.email,
      classCode: req.body.classCode,
      gitHub: req.body.gitHub
    }
    db.User.create(user)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err))
  },
  update: (req, res) => {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err))
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
}

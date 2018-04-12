const db = require("../models");

// Defining methods for the goalController
module.exports = {
  findAll: function(req, res) {
    db.Goal
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Goal
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Goal
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Goal
      .update(req.body, {
        where: {id: req.params.id}
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Goal
      .destroy({ 
        where: {id: req.params.id} 
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findWithin: function(req, res) {
    db.Goal
      .findAll({
        where: {
          UserId: req.params.id,
          from: {
            $between: [req.params.start, req.params.end]
          }
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

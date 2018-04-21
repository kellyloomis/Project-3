const db = require('../models');

// Defining methods for the AchievedController
module.exports = {
  findAll: function(req, res) {
    db.Achieved
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Achieved
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Achieved
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Achieved
      .update(req.body, {
        where: {id: req.params.id}
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Achieved
      .destroy({ 
        where: {id: req.params.id} 
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getEmployeeAchieveds: function(req, res) {
    db.Achieved
      .findAll({
        where: {
          EmployeeId: req.params.id,
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getAchievedWithin: function(req, res) {
    db.Achieved
      .findAll({
        where: {
          updatedAt: {
            $between: [req.params.start, req.params.end]
          }
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

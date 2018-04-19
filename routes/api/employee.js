const router = require('express').Router();
const employeeController = require('../../controllers/employeeController');

// Matches with "/api/employee"
router
  .route('/')
  .get(employeeController.findAll)
  .post(employeeController.create);

// Matches with "/api/employee/user/:id"
router.route('/user/:id').get(employeeController.findByUserId);

// Matches with "/api/employee/goals/:id"
router.route('/goals/:id').get(employeeController.getGoals);

// Matches with "/api/employee/:id"
router
  .route('/:id')
  .get(employeeController.findById)
  .post(employeeController.update)
  .delete(employeeController.remove);

// Matches with "/api/employee/:start/:end"
router.route('/:start/:end').get(employeeController.findWithin);

module.exports = router;

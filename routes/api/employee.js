const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

// Matches with "/api/employee"
router.route("/")
  .get(employeeController.findAll)
  .post(employeeController.create);

// Matches with "/api/employee/:id"
router
  .route("/:id")
  .get(employeeController.findById)
  .delete(employeeController.remove);

// Matches with "/api/employee/:search"
router
  .route("/:search")
  .get(employeeController.findById);

module.exports = router;
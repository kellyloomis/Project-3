const router = require("express").Router();
const goalController = require("../../controllers/goalController");

// Matches with "/api/goal"
router.route("/")
  .get(goalController.findAll)
  .post(goalController.create);

 router.route("/employee/:id")
 	.get(goalController.getEmployeeGoals);

// Matches with "/api/goal/:id"
router
  .route("/:id")
  .get(goalController.findById)
  .post(goalController.update)
  .delete(goalController.remove);

module.exports = router;
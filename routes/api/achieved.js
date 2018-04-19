const router = require("express").Router();
const achievedController = require("../../controllers/achievedController");

// Matches with "/api/achieved"
router.route("/")
  .get(achievedController.findAll)
  .post(achievedController.create);

// Matches with "/api/achieved/employee/:id"
router.route("/employee/:id")
	.get(achievedController.getEmployeeAchieveds);

// Matches with "/api/achieved/:id"
router
  .route("/:id")
  .get(achievedController.findById)
  .post(achievedController.update)
  .delete(achievedController.remove);

module.exports = router;
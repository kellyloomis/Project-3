const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

// Matches with "/api/review"
router.route("/")
  .get(reviewController.findAll)
  .post(reviewController.create);

router.route("/within/:start/:end")
 	.get(reviewController.getReviewWithin);

// Matches with "/api/review/:id"
router
  .route("/:id")
  .get(reviewController.findById)
  .post(reviewController.update)
  .delete(reviewController.remove);

module.exports = router;
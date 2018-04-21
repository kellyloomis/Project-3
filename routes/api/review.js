const router = require('express').Router();
const reviewController = require('../../controllers/reviewController');

// Matches with "/api/review"
router
  .route('/')
  .get(reviewController.findAll)
  .post(reviewController.create);

// Matches with "/api/achieved/employee/:id"
router
  .route('/employee/:id')
  .get(reviewController.getEmployeeReviews);

router.route("/within/:start/:end")
 	.get(reviewController.getReviewWithin);

router.route("/within/:start/:end/:employeeId")
 	.get(reviewController.getReviewWithinByEmployee);

// Matches with "/api/review/:id"
router
  .route('/:id')
  .get(reviewController.findById)
  .post(reviewController.update)
  .delete(reviewController.remove);

module.exports = router;

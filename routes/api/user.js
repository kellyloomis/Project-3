const router = require('express').Router();
const userController = require('../../controllers/userController');

// Matches with "/api/user"
router
  .route('/')
  .get(userController.findAll)
  .post(userController.create);

router.route('/fid').post(userController.findOne);

// Matches with "/api/user/:id"
router
  .route('/:id')
  .get(userController.findById)
  .post(userController.update)
  .delete(userController.remove);

module.exports = router;

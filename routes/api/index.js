const router = require("express").Router();
const employeeRoutes = require("./employee");
const userRoutes = require("./user");
const reviewRoutes = require("./review");
const goalRoutes = require("./goal");


// User routes
router.use("/user", userRoutes);
// Employee routes
router.use("/employee", employeeRoutes);
// Review routes
router.use("/review", reviewRoutes);
// Goal routes
router.use("/goal", goalRoutes);

module.exports = router;

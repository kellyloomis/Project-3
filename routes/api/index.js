const router = require("express").Router();
const employeeRoutes = require("./employee");
const userRoutes = require("./user");
const reviewRoutes = require("./review");

// User routes
router.use("/user", userRoutes);
// Employee routes
router.use("/employee", employeeRoutes);
// Review routes
router.use("/review", reviewRoutes);

module.exports = router;

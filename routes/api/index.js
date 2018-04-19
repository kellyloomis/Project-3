const router = require("express").Router();
const employeeRoutes = require("./employee");
const userRoutes = require("./user");
const reviewRoutes = require("./review");
const goalRoutes = require("./goal");
const achievedRoutes = require("./achieved");

// User routes
router.use("/user", userRoutes);
// Employee routes
router.use("/employee", employeeRoutes);
// Review routes
router.use("/review", reviewRoutes);
// Goal routes
router.use("/goal", goalRoutes);
// Achieved routes
router.use("/achieved", achievedRoutes);

module.exports = router;

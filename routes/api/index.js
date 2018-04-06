const router = require("express").Router();
const employeeRoutes = require("./employee");
const userRoutes = require("./user");

// Employee routes
router.use("/employee", employeeRoutes);
// User routes
router.use("/user", userRoutes);

module.exports = router;

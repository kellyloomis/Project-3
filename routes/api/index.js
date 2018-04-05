const router = require("express").Router();
const employeeRoutes = require("./employee");

// Article routes
router.use("/employee", employeeRoutes);

module.exports = router;

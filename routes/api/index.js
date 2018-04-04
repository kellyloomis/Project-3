const router = require("express").Router();
const articleRoutes = require("./employee");

// Article routes
router.use("/employee", articleRoutes);

module.exports = router;

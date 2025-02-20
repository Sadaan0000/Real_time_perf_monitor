const router = require("express").Router();

// Metrics route
router.get("/metrics", require("../controllers/monitioring.controller"));

module.exports = router;

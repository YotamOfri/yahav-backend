const express = require("express");
const router = express.Router();
const { getCurrentTime } = require("../controllers/timeController");

router.get("/time", getCurrentTime);

module.exports = router;

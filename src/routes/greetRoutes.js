const express = require("express");
const router = express.Router();
const { greet } = require("../controllers/greetController");

router.get("/greet", greet);

module.exports = router;

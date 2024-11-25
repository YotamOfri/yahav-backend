const express = require("express");
const router = express.Router();
const {
  triggerError,
  handleMissingRoute,
} = require("../controllers/errorController");

router.get("/error", triggerError);
router.use(handleMissingRoute);

module.exports = router;

const express = require("express");
const router = express.Router();
const counterController = require("./counterController");

router.post("/increment", counterController.increment);
router.post("/decrement", counterController.decrement);

module.exports = router;

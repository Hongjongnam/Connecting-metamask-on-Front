const express = require("express");
const router = express.Router();
const counterRouter = require("./counter/counterRouter.js");

router.use("/api/counter", counterRouter);

module.exports = router;

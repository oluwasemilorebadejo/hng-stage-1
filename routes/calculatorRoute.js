const express = require("express");
const calculatorController = require("../controllers/calculatorController");

const router = express.Router();

router.route("/").post(calculatorController.calculate);

module.exports = router;

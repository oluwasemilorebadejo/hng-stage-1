const express = require("express");
const aboutMeController = require("../controllers/aboutMeController");

const router = express.Router();

router.route("/").get(aboutMeController.getData);

module.exports = router;

const express = require("express");
const morgan = require("morgan");
const router = require("./routes/route");

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/aboutme", router);

module.exports = app;

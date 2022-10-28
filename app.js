const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/route");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/aboutme", router);

module.exports = app;

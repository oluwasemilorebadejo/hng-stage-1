const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const aboutMeRouter = require("./routes/aboutMeRoute");
const calculatorRouter = require("./routes/calculatorRoute");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/aboutme", aboutMeRouter);
app.use("/api/v1/calculator", calculatorRouter);

module.exports = app;

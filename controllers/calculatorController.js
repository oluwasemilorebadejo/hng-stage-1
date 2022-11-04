exports.calculate = async (req, res) => {
  x = req.body.x * 1;
  y = req.body.y * 1;
  if (req.body.operationType === "addition") {
    result = x + y;
  } else if (req.body.operationType === "subtraction") {
    result = x - y;
  } else if (req.body.operationType === "multiplication") {
    result = x * y;
  } else {
    result =
      "WRONG OPERATION TYPE! Kindly pick between addition, subtraction or multiplication";
  }

  res.status(200).json({
    slackUsername: "oluwasemilore",
    result: result,
    operation_type: req.body.operationType,
  });
};

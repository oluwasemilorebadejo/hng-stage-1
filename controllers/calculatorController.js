exports.calculate = async (req, res) => {
  x = req.body.x * 1;
  y = req.body.y * 1;
  if (req.body.operation_type === "addition") {
    result = x + y;
  } else if (req.body.operation_type === "subtraction") {
    result = x - y;
  } else if (req.body.operation_type === "multiplication") {
    result = x * y;
  } else {
    result =
      "WRONG OPERATION TYPE! Kindly pick between addition, subtraction or multiplication";
  }

  console.log(req.body);

  res.status(200).json({
    slackUsername: "oluwasemilore",
    result: result,
    operation_type: req.body.operation_type,
  });
};

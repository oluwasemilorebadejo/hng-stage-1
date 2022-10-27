const dotenv = require("dotenv");

const app = require("./app");

const server = app.listen(8000, () => {
  console.log(`listening on port 8000`);
});

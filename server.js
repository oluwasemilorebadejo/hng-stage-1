const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" }); // has to be set before requiring app because the env vars have to be set so the app module has access to it also

const app = require("./app");

port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`listening on port 8000`);
});

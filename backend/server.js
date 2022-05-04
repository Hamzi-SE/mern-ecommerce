const dotenv = require("dotenv");
const app = require("./app");
const connectDatabase = require("./config/database");

//CONFIG
dotenv.config({ path: "backend/config/config.env" });

//CONNECTING TO DATABASE
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

const dotenv = require("dotenv");
const app = require("./app");
const connectDatabase = require("./config/database");

//HANDLING UNCAUGHT EXCEPTIONS
process.on("uncaughtException", (error) => {
  console.log(`Error: ${error.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//CONFIG
dotenv.config({ path: "backend/config/config.env" });

//CONNECTING TO DATABASE
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

//UNHANDLED PROMISE REJECTION
process.on("unhandledRejection", (error) => {
  console.log(`Error: ${error.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});

const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Handling Uncaught exception
process.on("uncaughtException", (err) => {
  console.error(err);
  console.log("Shutting down the server");
  process.exit(1);
});

// Config
dotenv.config({ path: "backend/config/config.env" });

// Connecting to Database
connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://locahost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.error(err);
  console.log("Shutting down the server");
  server.close(() => {
    process.exit(1);
  });
});

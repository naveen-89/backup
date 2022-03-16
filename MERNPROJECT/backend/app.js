const express = require("express");
const errorMiddleware = require("./middleware/error");
const app = express();

app.use(express.json());

// Route imports
const product = require("./routes/productRoutes");

// Middleware for errors
app.use(errorMiddleware);

app.use("/api", product);
module.exports = app;

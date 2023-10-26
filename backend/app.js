const express = require("express");
const app = express();
const nytRouter = require("./router/nytRouter");
const cors = require("cors")
require('dotenv-safe').config();

// Allow requests from any origin
app.use(cors());
app.use("/api/v1/stories", nytRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Invalid route" });
});

module.exports = app;
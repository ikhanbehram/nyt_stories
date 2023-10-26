const express = require("express");
const app = express();
const nytRouter = require("./router/nytRouter");
require('dotenv-safe').config();

app.use("api/v1/stories", nytRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Invalid route" });
});

module.exports = app;
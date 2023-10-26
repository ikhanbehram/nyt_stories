const express = require("express");
const router = express.Router();
const { getStories } = require("../controllers/nytController");

router.get("", getStories);

module.exports = router;

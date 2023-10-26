const express = require("express");
const router = express.Router();
const { getStories, getStoryDetails } = require("../controllers/nytController");

router.get("", getStories);
router.get("/:id", getStoryDetails);

module.exports = router;

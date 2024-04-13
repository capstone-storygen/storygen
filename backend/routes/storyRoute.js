const express = require("express");

const { generateStory } = require("../controllers/storyController");
const router = express.Router();

router.post("/", generateStory);

module.exports = router;

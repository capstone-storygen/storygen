const express = require("express");

const {
    generateStory,
    resetMessageHistory,
} = require("../controllers/storyController");
const router = express.Router();

router.post("/", generateStory);

router.post("/resetMessages", (req, res) => {
    resetMessageHistory();
    res.status(200).send("Message history reset successfully.");
});

module.exports = router;

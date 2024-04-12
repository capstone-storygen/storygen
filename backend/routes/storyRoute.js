const express = require("express");

const { generateStory } = require("../controllers/storyController");
const router = express.Router();

router.post("/", generateStory);

module.exports = router;
// const express = require("express");
// const dotenv = require("dotenv");

// dotenv.config();

// const router = express.Router();

// const OpenAI = require("openai");

// const configuration = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAI(configuration);

// let previousResponse = "";
// let messageHistory = [];

// router.post("/story", async (req, res) => {
//     const { prompt } = req.body;
//     try {
//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: [
//                 ...messageHistory.map((message) => ({
//                     role: message.sender === "ai" ? "assistant" : "user",
//                     content: message.text,
//                 })),
//                 {
//                     role: "user",
//                     content: prompt,
//                 },
//                 {
//                     role: "assistant",
//                     content: previousResponse,
//                 },
//             ],
//             temperature: 1,
//             max_tokens: 256,
//             top_p: 1,
//             frequency_penalty: 0,
//             presence_penalty: 0,
//         });
//         previousResponse = response.choices[0].message.content;
//         console.log(previousResponse);
//         res.send(response.choices[0].message.content);
//     } catch (err) {
//         res.status(500).send({ error: err.message });
//     }

//     messageHistory.push({ sender: "user", text: prompt });
//     messageHistory.push({ sender: "ai", text: previousResponse });
// });

// module.exports = router;

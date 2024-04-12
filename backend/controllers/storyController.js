const express = require("express");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

const OpenAI = require("openai");

const configuration = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAI(configuration);

let previousResponse = "";
let messageHistory = [];

const generateStory = asyncHandler(async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                ...messageHistory.map((message) => ({
                    role: message.sender === "ai" ? "assistant" : "user",
                    content: message.text,
                })),
                {
                    role: "user",
                    content: prompt,
                },
                {
                    role: "assistant",
                    content: previousResponse,
                },
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        previousResponse = response.choices[0].message.content;
        console.log(previousResponse);
        res.send(response.choices[0].message.content);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }

    messageHistory.push({ sender: "user", text: prompt });
    messageHistory.push({ sender: "ai", text: previousResponse });
});

module.exports = {
    generateStory,
};

// router.post("/", async (req, res) => {
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

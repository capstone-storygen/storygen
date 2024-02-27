const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

const { Configuration, OpenAIApi, ConflictError } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAiApi(configuration);

router.post("/story", async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "assistant", // refer OpenAI documentation in order to understand the concept of role
                    content: "",
                },
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        res.send(response.choices[0].message.content);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;

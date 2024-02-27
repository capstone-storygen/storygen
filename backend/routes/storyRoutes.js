const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

const { Configuration, OpenAIApi, ConflictError } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAiApi(configuration);

const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {
            role: "user",
            content: "",
        },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
});

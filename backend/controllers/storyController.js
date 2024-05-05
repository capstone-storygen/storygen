const express = require("express");
const asyncHandler = require("express-async-handler");

require("dotenv").config();

const router = express.Router();

const OpenAI = require("openai");

const configuration = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAI(configuration);

let previousResponse = "";
let messageHistory = [];

const resetMessageHistory = () => {
    messageHistory = [];
    console.log("Message history reset.");
};

const generateStory = asyncHandler(async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `You are an interactive story generating AI

                Guidelines for story generation:

                -According to the user input part of the story should be generated to be continued.

                -Part of the story should be of at most 120 words for each iteration.

                -For Each iteration Generate part of story then wait for next user input and continue the story according to the next user input.

                -Continue generation in iterations until the user passes an "End the story" Command.

                -The timeline of the story will be controlled by the user.

                -No abusive and explicit content should be allowed.

                -Do not any question like "What will happen next",
                "What will he do next", etc.

                -When the user input "End the story" do not end story abruptly the story's ending should make sense.

                -Any Questions starting with "What..", "Where.." , etc should not be answered and you should give a reply "Apologies but i am an Interactive Story generator Please provide a story idea to get started." 
                `,
                },
                {
                    role: "user",
                    content: "Hey",
                },
                {
                    role: "assistant",
                    content:
                        "Hello , i am an Interactive Story generator Please provide a story idea to get started",
                },
                {
                    role: "user",
                    content: "What is 4 - 8",
                },
                {
                    role: "assistant",
                    content:
                        "Apologies but i am an Interactive Story generator Please provide a story idea to get started",
                },
                {
                    role: "user",
                    content: "What is my name",
                },
                {
                    role: "assistant",
                    content:
                        "Apologies but i am an Interactive Story generator Please provide a story idea to get started",
                },
                {
                    role: "user",
                    content: "What is worlds biggest nation",
                },
                {
                    role: "assistant",
                    content:
                        "Apologies but i am an Interactive Story generator Please provide a story idea to get started",
                },
                {
                    role: "user",
                    content: "Hello whats up",
                },
                {
                    role: "assistant",
                    content:
                        "Hello i am an Interactive Story generator get started with any idea about generating stories ",
                },
                {
                    role: "user",
                    content: "what is a robot",
                },
                {
                    role: "assistant",
                    content:
                        "Apologies but i am an Interactive Story generator Please provide a story idea to get started",
                },
                {
                    role: "user",
                    content: "what is an elephant",
                },
                {
                    role: "assistant",
                    content:
                        "Apologies but i am an Interactive Story generator Please provide a story idea to get started.",
                },
                {
                    role: "user",
                    content: "Tell me some fun facts",
                },
                {
                    role: "assistant",
                    content:
                        "Apologies but i am an Interactive Story generator Please provide a story idea to get started.",
                },
                {
                    role: "user",
                    content: "Write a code for python",
                },
                {
                    role: "assistant",
                    content:
                        "Apologies but i am an Interactive Story generator Please provide a story idea to get started.",
                },

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
        res.send(response.choices[0].message.content);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }

    messageHistory.push({ sender: "user", text: prompt });
    messageHistory.push({ sender: "ai", text: previousResponse });
    console.log(messageHistory);
});

module.exports = {
    generateStory,
    messageHistory,
    resetMessageHistory,
};

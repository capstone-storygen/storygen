const OpenAI = require("openai");
require("dotenv").config();

// Instantiate the OpenAI client with your API key from environment variable
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
}

main();

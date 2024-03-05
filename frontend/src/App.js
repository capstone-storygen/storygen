import React, { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatWindow from "./components/ChatWindow";
import generateStory from "./Utils/storyApi";

function App() {
    const [messages, setMessages] = useState([]);

    const handleUserInput = async (userInput) => {
        setMessages([...messages, "You: " + userInput]);
        try {
            const aiResponse = await generateStory(userInput);
            setMessages((prevMessages) => [
                ...prevMessages,
                "StoryGen: " + aiResponse,
            ]);
        } catch (error) {
            console.error("Error generating story:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">
                Interactive Story Generator
            </h1>
            <ChatWindow messages={messages} />
            <ChatInput onSubmit={handleUserInput} />
        </div>
    );
}

export default App;

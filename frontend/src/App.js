// App.js
import React, { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatWindow from "./components/ChatWindow";
import NavBar from "./components/navBar";
import generateStory from "./Utils/storyApi";
import AboutUs from "./components/aboutUs";

function App() {
    const [messages, setMessages] = useState([]);
    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showInitialMessage, setShowInitialMessage] = useState(true);

    const handleUserInput = async (userInput) => {
        if (showInitialMessage) {
            setShowInitialMessage(false);
        }

        setMessages((prevMessages) => [
            ...prevMessages,
            <strong key={prevMessages.length}>You</strong>,
            userInput,
        ]);

        try {
            const aiResponse = await generateStory(userInput);
            setMessages((prevMessages) => [
                ...prevMessages,
                <strong key={prevMessages.length}>StoryGen</strong>,
                aiResponse,
            ]);
        } catch (error) {
            console.error("Error generating story:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <NavBar setShowAboutUs={setShowAboutUs} />{" "}
            {showAboutUs ? (
                <AboutUs />
            ) : (
                <>
                    <ChatWindow
                        messages={messages}
                        showInitialMessage={showInitialMessage}
                    />
                    <ChatInput
                        onSubmit={handleUserInput}
                        firstMessageReceived={messages.length > 0}
                    />
                </>
            )}
        </div>
    );
}

export default App;

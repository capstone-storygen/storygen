import React, { useState, useEffect } from "react";
import ChatInput from "./components/ChatInput";
import ChatWindow from "./components/ChatWindow";
import NavBar from "./components/navBar";
import generateStory from "./Utils/storyApi";
import AboutUs from "./components/aboutUs";

const TypingComponent = ({ phrases }) => {
    const [currentPhrase, setCurrentPhrase] = useState("");
    const [typingSpeed] = useState(5); // Adjust typing speed as needed

    useEffect(() => {
        const phrase = phrases[0];
        let timeout;
        if (currentPhrase.length < phrase.length) {
            timeout = setTimeout(() => {
                setCurrentPhrase(phrase.substring(0, currentPhrase.length + 1));
            }, typingSpeed);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [currentPhrase, phrases, typingSpeed]);

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            {currentPhrase}
        </div>
    );
};

const Logo = ({ text }) => (
    <div style={{ marginRight: 5, display: "inline-block" }}>
        {text === "You" ? "👤" : "🤖"}
    </div>
);

function App() {
    const [messages, setMessages] = useState([]);
    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showInitialMessage, setShowInitialMessage] = useState(true);
    const [typing, setTyping] = useState(false); // Added state for typing animation
    const [firstMessageTyped, setFirstMessageTyped] = useState(false);

    const resetMessages = () => {
        setMessages([]);
        setFirstMessageTyped(false); // Reset the firstMessageTyped state
    };

    const handleUserInput = async (userInput) => {
        if (showInitialMessage) {
            setShowInitialMessage(false);
        }

        setMessages((prevMessages) => [
            ...prevMessages,
            <>
                <Logo text="You" />
                <strong key={prevMessages.length}>You</strong>
            </>,
            userInput,
        ]);

        try {
            // Set typing to true to show the loading animation
            setTyping(true);
            const aiResponse = await generateStory(userInput);
            setMessages((prevMessages) => [
                ...prevMessages,
                <>
                    <Logo text="StoryGen" />
                    <strong key={prevMessages.length}>StoryGen</strong>
                </>,
                <TypingComponent phrases={[aiResponse]} />,
            ]);
        } catch (error) {
            console.error("Error generating story:", error);
        } finally {
            // Set typing to false after the response is received
            setTyping(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <NavBar
                setShowAboutUs={setShowAboutUs}
                setShowInitialMessage={setShowInitialMessage}
                resetMessages={resetMessages}
            />{" "}
            {showAboutUs ? (
                <AboutUs />
            ) : (
                <>
                    <ChatWindow
                        messages={messages}
                        showInitialMessage={showInitialMessage}
                    />
                    {typing ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                        </div>
                    ) : (
                        <ChatInput
                            onSubmit={handleUserInput}
                            firstMessageReceived={messages.length > 0}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default App;

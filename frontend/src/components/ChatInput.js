import React, { useState } from "react";

function ChatInput({ onSubmit }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSubmit(inputValue);
            setInputValue("");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center mt-4"
        >
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="border p-2 w-64 mr-2"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Send
            </button>
        </form>
    );
}

export default ChatInput;

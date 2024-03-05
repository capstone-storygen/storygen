import React from "react";

function ChatWindow({ messages }) {
    return (
        <div className="overflow-y-auto h-64 border p-4">
            {messages.map((message, index) => (
                <div key={index} className="mb-2">
                    {message}
                </div>
            ))}
        </div>
    );
}

export default ChatWindow;

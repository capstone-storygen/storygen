import React, { useState, useRef, useEffect } from "react";

function ChatInput({ onSubmit, firstMessageReceived, onEndStory }) {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSubmit(inputValue);
            setInputValue("");
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
        }
    }, [inputRef]);

    return (
        <form className="w-full fixed bottom-8 flex" onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                    firstMessageReceived
                        ? "Control the timeline, introduce new characters..."
                        : "Write from where the story should begin, you can also introduce characters, set timelines..."
                }
                className="block w-5/6 h-20 z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                required
            />
            <div className="flex">
                <button
                    type="submit"
                    className="bg-blue-500 h-14 my-3 text-white px-2 py-2 rounded-lg ml-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    {firstMessageReceived ? "Cont.." : "Generate"}
                </button>
                {firstMessageReceived && (
                    <button
                        type="button"
                        onClick={onEndStory}
                        className="bg-red-500 h-14 my-3 text-white px-2 py-2 rounded-lg ml-2 hover:bg-red-600 focus:outline-none focus:bg-red-600"
                    >
                        End story
                    </button>
                )}
            </div>
        </form>
    );
}

export default ChatInput;

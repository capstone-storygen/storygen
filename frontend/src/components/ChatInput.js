import React, { useState, useRef, useEffect } from "react";
import pdfMake from "pdfmake/build/pdfmake.js";
import pdfFonts from "pdfmake/build/vfs_fonts.js";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function ChatInput({
    onSubmit,
    firstMessageReceived,
    resetMessages,
    setShowInitialMessage,
    airesp,
    setAiresp,
}) {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSubmit(inputValue);
            setInputValue("");
        }
    };

    const onDownloadStory = () => {
        // Define the document structure for the PDF
        const document = {
            content: [
                {
                    text: "Story",
                    fontStyle: "bold",
                    alignment: "center",
                    fontSize: 20,
                    lineHeight: 2,
                },
            ],
        };

        // Add each response from airesp array to the PDF
        airesp.forEach((response) => {
            document.content.push({ text: response, lineHeight: 2 });
        });

        // Generate and download the PDF
        pdfMake.createPdf(document).download("story.pdf");
    };

    useEffect(() => {
        if (
            inputRef.current &&
            typeof inputRef.current.scrollIntoView === "function"
        ) {
            inputRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
        }
    }, []);

    return (
        <form className="w-full fixed bottom-8 flex" onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                    firstMessageReceived
                        ? "Control the timeline, introduce new characters, Or end the story , ..."
                        : "Write from where the story should begin, you can also introduce characters, set timelines and much more ..."
                }
                className=" shadow hover:shadow-blue-300 hover:shadow-lg  hover:text-slate-800 w-9/12 lg:translate-x-12 h-20 text-base text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                required
            />
            <div className="flex">
                <button
                    type="submit"
                    className="lg:rounded-bl-xl lg:translate-x-12 bg-blue-500 lg:h-14 lg:my-3 my-5 h-10 text-white px-2 py-2 rounded-full ml-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 relative"
                >
                    <span className="lg:hidden">🢂</span>
                    <span className="hidden lg:inline">
                        {firstMessageReceived ? "Cont.." : "Generate"}
                    </span>
                </button>
                {firstMessageReceived && (
                    <button
                        type="button"
                        onClick={onDownloadStory}
                        className=" lg:rounded-2xl lg:translate-x-12 bg-green-400 lg:h-14 lg:my-3 my-5 h-10 text-white px-1 py-2 rounded-2xl ml-2 hover:bg-green-600 focus:outline-none focus:bg-red-600 relative"
                    >
                        <span className="lg:hidden">💾</span>
                        <span className="hidden lg:inline">Download</span>
                    </button>
                )}
            </div>
        </form>
    );
}

export default ChatInput;

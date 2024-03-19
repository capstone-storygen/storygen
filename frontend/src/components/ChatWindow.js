// const BlinkingCursor = ({ visible }) => (
//     <span
//         className={`inline-block w-2 h-9 bg-blue-600 mx-1 ${
//             visible ? "animate-blink" : "hidden"
//         }`}
//         style={{ position: "absolute" }}
//     ></span>
// );

// const TypingComponent = ({ phrases }) => {
//     const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
//     const [currentPhrase, setCurrentPhrase] = useState("");
//     const [typingSpeed] = useState(350); // Adjust typing speed as needed
//     const [backspacingSpeed] = useState(100); // Adjust backspacing speed as needed
//     const [backspacing, setBackspacing] = useState(false);
//     const [showCursor, setShowCursor] = useState(true);
//     const [pauseAfterTyping] = useState(10000); // Pause duration after typing a complete phrase

//     useEffect(() => {
//         const phrase = phrases[currentPhraseIndex];
//         let timeout;

//         if (!backspacing) {
//             if (currentPhrase.length < phrase.length) {
//                 timeout = setTimeout(() => {
//                     setCurrentPhrase(
//                         phrase.substring(0, currentPhrase.length + 1)
//                     );
//                 }, typingSpeed);
//             } else {
//                 timeout = setTimeout(() => {
//                     setBackspacing(true);
//                 }, pauseAfterTyping);
//             }
//         } else {
//             if (currentPhrase.length > 0) {
//                 timeout = setTimeout(() => {
//                     setCurrentPhrase(
//                         currentPhrase.substring(0, currentPhrase.length - 1)
//                     );
//                 }, backspacingSpeed);
//             } else {
//                 setBackspacing(false);
//                 setCurrentPhraseIndex(
//                     (prevIndex) => (prevIndex + 1) % phrases.length
//                 );
//             }
//         }

//         return () => {
//             clearTimeout(timeout);
//         };
//     }, [
//         currentPhrase,
//         currentPhraseIndex,
//         backspacing,
//         phrases,
//         typingSpeed,
//         backspacingSpeed,
//         pauseAfterTyping,
//     ]);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setShowCursor((prevShowCursor) => !prevShowCursor);
//         }, 500);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div style={{ position: "relative", display: "inline-block" }}>
//             {currentPhrase}
//             <BlinkingCursor visible={showCursor && !backspacing} />
//         </div>
//     );
// };

import { useEffect, useRef } from "react";
import React from "react";
import { motion } from "framer-motion";

function ChatWindow({ messages, showInitialMessage }) {
    return (
        <div className="flex justify-center w-full pt-4">
            <div className="overflow-y-auto h-96 p-4 mt-4 w-full">
                {showInitialMessage && (
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.9,
                            delay: 0.2,
                        }}
                        className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
                    >
                        <div className="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-16 xl:px-20 max-h-96">
                            <img
                                className="pointer-events-none absolute bottom-0 left-0 -z-10 opacity-3"
                                src="/images/l-el4xSJBJMU_wwUrzuJN.png"
                                alt=""
                            />
                            <div className="mx-auto max-w-xl lg:max-w-screen-xl">
                                <div className="mx-auto mb-16 flex flex-col items-center text-center lg:mb-0 lg:max-w-lg">
                                    <div className="mb-6 max-w-xl">
                                        <h2 className="font-newfont mb-6 max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
                                            Write about <br />
                                            <span className="inline-block text-blue-600">
                                                <h1 className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-blue-600 dark:text-blue-300 ">
                                                    Interactive stories
                                                </h1>
                                            </span>
                                        </h2>
                                        <p className="text-base text-gray-700 md:text-lg">
                                            Powered by AI, effortlessly craft
                                            original stories, depict thrilling
                                            adventures, compose captivating
                                            romances, or simply have fun
                                            exploring limitless possibilities
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                )}
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className="mb-2 font-newfont text-base md:text-lg"
                    >
                        {message}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatWindow;

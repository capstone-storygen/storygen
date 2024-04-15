import { useState } from "react";
import logo from "../assets/logo_light.png";

function NavBar({ setShowAboutUs, setShowInitialMessage, resetMessages }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleStoryverseClick = () => {
        resetMessages();
        setShowInitialMessage(true);
        setShowAboutUs(false);
        fetch("/api/story/resetMessages", { method: "POST" }); // Add this line to send a request to reset messageHistory in the backend
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <button
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                    onClick={handleStoryverseClick}
                >
                    <img src={logo} className="h-8" alt="Storyverse Logo" />
                    <span className="self-center text-4xl font-font1 whitespace-nowrap dark:text-white text-gray-800">
                        Storyverse
                    </span>
                </button>
                <div className="md:hidden">
                    <div className="relative">
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-label="Open main menu"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <ul className="py-2">
                                    <li>
                                        <button
                                            className="block w-full px-4 py-2 text-sm text-left text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                                            onClick={handleStoryverseClick}
                                        >
                                            Home
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="block w-full px-4 py-2 text-sm text-left text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                                            onClick={() => setShowAboutUs(true)}
                                        >
                                            About Us
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className="hidden md:block md:w-auto">
                    <ul className="font-newfont font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <button
                                href="#"
                                className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                aria-current="page"
                                onClick={handleStoryverseClick}
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setShowAboutUs(true)} // Update showAboutUs state
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                About Us
                            </button>
                        </li>
                        {/* <li>
                            <button
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Contact us
                            </button>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

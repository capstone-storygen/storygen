/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                font1: ["Merienda"],
                font2: ["Pacifico"],
                font3: ["Damion"],
                newfont: ["Libre Baskerville"],
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};

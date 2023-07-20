/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                myeongjo: ["Nanum Myeongjo", "serif"],
                dokdo: ["Dokdo", "cursive"],
                mt: ["Perpetua Titling MT", "serif"],
            },
            colors: {
                main: "#6E07F3",
                point: "#141c3a",
                sub: "#f9ff21",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-3d")],
};

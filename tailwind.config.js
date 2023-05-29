/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Noto Sans KR", "Black Han Sans", "Arial", "sans-serif"],
                han: ["Black Han Sans"],
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

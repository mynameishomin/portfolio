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
                main: "#ebff82",
                point: "#ff9682",
            },
        },
    },
    plugins: [],
};

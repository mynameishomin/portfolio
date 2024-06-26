/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Noto Sans KR", "sans-serif"],
            },
            colors: {
                background: "#eff6ff",
                main: "#6E07F3",
                point: "#141c3a",
                sub: "#f9ff21",
            },
            gridTemplateRows: {
                layout: "3.5rem auto",
            },
            gridTemplateColumns: {
                layout: "3.5rem minmax(1px,1fr)",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-3d")],
};

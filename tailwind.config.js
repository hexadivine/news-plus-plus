/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                'mobile' : {max : "400px"},
                'small-tablet' : {max : "700px"},
                'tablet' : {max : "1000px"}
            }
        },
    },
    plugins: [],
};

module.exports = {
    content: [
        "../../packages/ui/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand": "#EFD183",
                "process": "rgba(202, 255, 160, 0.05)",
                "team" : "rgba(0, 0, 0, 0.01)"
            }
        },
    },
    plugins: [],
};

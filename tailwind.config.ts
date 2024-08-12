import type { Config } from "tailwindcss";

const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                aurora: "aurora 60s linear infinite",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                peach: "#fcd2c8",
                sky: "#85afd4",
                lavender: "#aa9ec4",
                ivory: "#f8f7f3",
                "light-blue": "#acc5e0",
                "soft-gray": "#cfcfe7",
                pink: "#f0b1bd",
                gold: "#fdd175",
                aqua: "#cbe7f1",
                "gray-blue": "#7884ac",
            },
            boxShadow: {
                peach: "0 4px 6px rgba(252, 210, 200, 0.5)",
                sky: "0 4px 6px rgba(133, 175, 220, 0.5)",
                lavender: "0 4px 6px rgba(170, 158, 196, 0.5)",
                ivory: "0 4px 6px rgba(248, 247, 243, 0.5)",
                "light-blue": "0 4px 6px rgba(172, 197, 224, 0.5)",
                "soft-gray": "0 4px 6px rgba(207, 207, 231, 0.5)",
                pink: "0 4px 6px rgba(240, 177, 189, 0.5)",
                gold: "0 4px 6px rgba(253, 209, 117, 0.5)",
                aqua: "0 4px 6px rgba(203, 231, 241, 0.5)",
                "gray-blue": "0 4px 6px rgba(120, 132, 172, 0.5)",
            },
            fontFamily: {
                pacifico: ["var(--font-pacifico)"],
            },
            keyframes: {
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
            },
        },
    },
    plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    );

    addBase({
        ":root": newVars,
    });
}

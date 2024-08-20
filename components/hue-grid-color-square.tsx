"use client";

import toast from "react-hot-toast";

interface HueGridColorSquareProps {
    color: string;
}

function getTextColorForBackground(hexColor: string) {
    hexColor = hexColor.replace("#", "");

    // Parse the hex color
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);

    // Calculate the relative luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? "black" : "white";
}

export default function HueGridColorSquare({ color }: HueGridColorSquareProps) {
    const textColor = getTextColorForBackground(color);

    const handleCopy = () => {
        navigator.clipboard.writeText(color);
        toast("Copied to clipboard!", {
            icon: "✔️",
            style: {
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "600",
                background: "#fff",
                color: "#000",
            },
        });
    };

    return (
        <div className="col-span-1 hidden lg:block">
            <div
                className="flex h-[11rem] items-end rounded-xl border shadow-xl"
                style={{ backgroundColor: color }}
            >
                <button
                    className="select-none px-3 py-2 font-mono text-sm font-bold tracking-wide"
                    style={{ color: textColor }}
                    onClick={() => handleCopy()}
                >
                    {color}
                </button>
            </div>
        </div>
    );
}

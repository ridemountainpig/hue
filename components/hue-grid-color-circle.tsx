"use client";

import toast from "react-hot-toast";

interface HueGridColorCircleProps {
    color: string;
}

export default function HueGridColorCircle({ color }: HueGridColorCircleProps) {
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
        <div
            className="cursor-pointer rounded-lg bg-white p-3 hover:bg-slate-100 sm:p-4"
            onClick={() => handleCopy()}
        >
            <div className="flex justify-center">
                <div
                    className="flex h-12 w-12 items-end rounded-full sm:h-14 sm:w-14"
                    style={{ backgroundColor: color }}
                ></div>
            </div>
            <div className="mt-2 select-none font-mono text-xs font-bold tracking-wider">
                {color}
            </div>
        </div>
    );
}

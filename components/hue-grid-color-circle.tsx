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
            className="cursor-pointer rounded-lg bg-white p-4 hover:bg-slate-100"
            onClick={() => handleCopy()}
        >
            <div
                className="flex h-14 w-14 items-end rounded-full"
                style={{ backgroundColor: color }}
            ></div>
            <div className="mt-2 select-none font-mono text-xs font-bold tracking-wider">
                {color}
            </div>
        </div>
    );
}

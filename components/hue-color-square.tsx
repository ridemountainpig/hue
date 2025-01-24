"use client";

import { toast } from "react-hot-toast";

interface HueColorSquareProps {
    color: string;
    copy: boolean;
}

export default function HueColorSquare({ color, copy }: HueColorSquareProps) {
    const colorText = color.toUpperCase().replace("#", "");

    const handleCopy = () => {
        navigator.clipboard.writeText(color);
        toast(`Copied color #${colorText} to clipboard!`, {
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
        <div className="group relative">
            <img
                src="/square.svg"
                alt="square"
                className="h-12 w-12 rounded-lg shadow-lg"
                style={{ backgroundColor: color }}
            />
            {copy && (
                <div
                    className="absolute top-0 left-0 hidden h-full w-full cursor-pointer rounded-lg group-hover:block"
                    onClick={handleCopy}
                >
                    <div className="h-full w-full"></div>
                    <div className="hidden xl:block">
                        <div className="flex w-full justify-center">
                            <div className="-mt-1 flex w-full items-center justify-center rounded-md border bg-slate-200 py-0.5 text-xs font-semibold text-slate-800">
                                <span>{colorText}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

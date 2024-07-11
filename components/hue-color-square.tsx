import { useState } from "react";

interface HueColorSquareProps {
    color: string;
}

export default function HueColorSquare({ color }: HueColorSquareProps) {
    const colorText = color.toUpperCase().replace("#", "");
    const [copied, setCopied] = useState(colorText);

    const handleCopy = () => {
        navigator.clipboard.writeText(color);
        setCopied("copied");
        setTimeout(() => {
            setCopied(colorText);
        }, 1000);
    };

    return (
        <div className="group relative">
            <img
                src="/square.svg"
                alt="square"
                className="h-12 w-12 rounded-lg"
                style={{ backgroundColor: color }}
            />
            <div
                className="absolute left-0 top-0 hidden h-full w-full cursor-pointer rounded-lg group-hover:block"
                onClick={handleCopy}
            >
                <div className="h-full w-full"></div>
                <div className="flex w-full justify-center">
                    <div className="-mt-1 flex w-full items-center justify-center rounded-md border bg-slate-200 py-0.5 text-xs font-semibold text-slate-800">
                        <span>{copied}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { Check, Clipboard } from "lucide-react";

interface TailwindCopyProps {
    tailwind_colors_name: string;
    tailwind_colors: Record<string, string> | string;
    tailwindVersionToggle: boolean;
}

export default function TailwindCopy({
    tailwind_colors_name,
    tailwind_colors,
    tailwindVersionToggle,
}: TailwindCopyProps) {
    const [copied, setCopied] = useState(false);

    const handleTailwindColorCopy = (
        name: string,
        colors: Record<string, string> | string,
    ) => {
        setCopied(true);
        if (tailwindVersionToggle) {
            const copyColors = JSON.stringify(colors, null, 4);
            navigator.clipboard.writeText(`${name}: ${copyColors}`);
        } else {
            navigator.clipboard.writeText(tailwind_colors as string);
        }
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <button
            className="flex cursor-pointer items-center gap-x-2 rounded-lg border bg-white p-2 text-black transition-colors duration-300 hover:bg-slate-100"
            onClick={() =>
                handleTailwindColorCopy(tailwind_colors_name, tailwind_colors)
            }
        >
            <span className="text-2xs font-mono font-semibold sm:text-xs">
                Tailwind
            </span>
            {copied ? (
                <Check strokeWidth={2.5} size={14} />
            ) : (
                <Clipboard strokeWidth={2.5} size={14} />
            )}
        </button>
    );
}

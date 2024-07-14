"use client";

import { useState } from "react";
import { Check, Clipboard } from "lucide-react";

interface TailwindCopyProps {
    tailwind_colors_name: string;
    tailwind_colors: Record<string, string>;
}

export default function TailwindCopy({
    tailwind_colors_name,
    tailwind_colors,
}: TailwindCopyProps) {
    const [copied, setCopied] = useState(false);

    const handleTailwindColorCopy = (
        name: string,
        colors: Record<string, string>,
    ) => {
        setCopied(true);
        const copyColors = JSON.stringify(colors, null, 4);
        navigator.clipboard.writeText(`${name}: ${copyColors}`);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <button
            className="flex items-center gap-x-2 rounded-lg border bg-white p-2 transition-colors duration-300 hover:bg-slate-100"
            onClick={() =>
                handleTailwindColorCopy(tailwind_colors_name, tailwind_colors)
            }
        >
            <span className="font-mono text-xs font-semibold">tailwind</span>
            {copied ? (
                <Check strokeWidth={2.5} size={14} />
            ) : (
                <Clipboard strokeWidth={2.5} size={14} />
            )}
        </button>
    );
}

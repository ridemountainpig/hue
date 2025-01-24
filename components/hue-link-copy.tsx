"use client";

import { useState } from "react";
import { Check, Clipboard } from "lucide-react";

export default function HueLinkCopy() {
    const [copied, setCopied] = useState(false);

    const handleHueLinkCopy = () => {
        setCopied(true);
        const hueLink = window.location.href;
        navigator.clipboard.writeText(hueLink);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <button
            className="flex cursor-pointer items-center gap-x-2 rounded-lg border bg-white p-2 text-black transition-colors duration-300 hover:bg-slate-100"
            onClick={() => handleHueLinkCopy()}
        >
            <span className="text-2xs font-mono font-semibold sm:text-xs">
                Hue Link
            </span>
            {copied ? (
                <Check strokeWidth={2.5} size={14} />
            ) : (
                <Clipboard strokeWidth={2.5} size={14} />
            )}
        </button>
    );
}

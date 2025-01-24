"use client";

import toast from "react-hot-toast";
import { motion } from "framer-motion";

interface HueGridColorCircleProps {
    index: number;
    color: string;
}

export default function HueGridColorCircle({
    index,
    color,
}: HueGridColorCircleProps) {
    const handleCopy = () => {
        navigator.clipboard.writeText(color);
        toast(`Copied color ${color} to clipboard!`, {
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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: 0.04 * index,
            }}
            className="cursor-pointer rounded-lg bg-white p-3 hover:bg-slate-100 sm:p-4"
            onClick={() => handleCopy()}
        >
            <div className="flex justify-center">
                <div
                    className="flex h-12 w-12 items-end rounded-full sm:h-14 sm:w-14"
                    style={{ backgroundColor: color }}
                ></div>
            </div>
            <div className="mt-2 font-mono text-xs font-bold tracking-wider text-black select-none">
                {color}
            </div>
        </motion.div>
    );
}

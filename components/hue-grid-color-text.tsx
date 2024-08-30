"use client";

import { motion } from "framer-motion";

interface HueGridColorTextProps {
    colorOne: string;
    colorTwo: string;
    hueName: string;
}

export default function HueGridColorText({
    colorOne,
    colorTwo,
    hueName,
}: HueGridColorTextProps) {
    return (
        <div className="col-span-2">
            <div
                className="flex h-[11rem] w-full items-center justify-center rounded-xl border shadow-xl"
                style={{
                    backgroundImage: `linear-gradient(to right, ${colorOne}, ${colorTwo})`,
                }}
            >
                <span className="select-none break-words px-4 text-center font-pacifico text-5xl font-bold tracking-widest text-white">
                    {hueName.split("").map((char, index) => {
                        return (
                            <motion.span
                                key={index}
                                className="inline-block py-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.04,
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        );
                    })}
                </span>
            </div>
        </div>
    );
}

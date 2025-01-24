"use client";

import { motion } from "framer-motion";

interface HueGridTailwindCodeProps {
    tailwindColors: string;
}

export default function HueGridTailwindCodeV4({
    tailwindColors,
}: HueGridTailwindCodeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: 0.04,
            }}
            className="bg-opacity-70 mx-2 my-4 h-[20rem] rounded-xl bg-slate-100 p-4 font-mono text-base font-semibold tracking-wider text-black sm:mx-4"
        >
            <pre
                className="h-full overflow-auto"
                style={{ scrollbarWidth: "thin" }}
            >
                <code>{tailwindColors}</code>
            </pre>
        </motion.div>
    );
}

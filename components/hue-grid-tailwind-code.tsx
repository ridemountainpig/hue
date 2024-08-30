"use client";

import { motion } from "framer-motion";

interface HueGridTailwindCodeProps {
    tailwindColorsName: string;
    tailwindColors: Record<string, string>;
}

export default function HueGridTailwindCode({
    tailwindColorsName,
    tailwindColors,
}: HueGridTailwindCodeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: 0.04,
            }}
            className="m-4 h-[20rem] rounded-xl bg-slate-100 bg-opacity-70 p-4 font-mono text-sm font-semibold tracking-wider sm:text-base"
        >
            {`${tailwindColorsName}:`}
            <pre className="inline">
                <code>{JSON.stringify(tailwindColors, null, 4)}</code>
            </pre>
        </motion.div>
    );
}

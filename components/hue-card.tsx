"use client";

import { useState } from "react";
import HueColorDock from "@/components/hue-color-dock";

interface HueCardProps {
    colors: string[];
}

export default function HueCard({ colors }: HueCardProps) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className="col-span-1 mt-10 h-64 w-full overflow-hidden rounded-xl border shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex h-48 items-center justify-center gap-x-5">
                <HueColorDock colors={colors} hovered={hovered} />
            </div>
            <div className="h-16">
                <div className="flex h-full w-full items-center justify-between px-8">
                    <span className="select-none font-pacifico text-2xl font-bold">
                        Hue
                    </span>
                </div>
            </div>
        </div>
    );
}

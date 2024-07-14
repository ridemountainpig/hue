"use client";

import { useState } from "react";
import HueColorDock from "@/components/hue-color-dock";
import { SquareArrowOutUpRight } from "lucide-react";

interface HueCardProps {
    name: string;
    colors: string[];
    tailwind_colors_name: string;
    tailwind_colors: Record<string, string>;
    background: string;
}

export default function HueCard({
    name,
    colors,
    tailwind_colors_name,
    tailwind_colors,
}: HueCardProps) {
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
            <div className="bg-decoration flex h-48 items-center justify-center">
                <div className="flex gap-x-5 rounded-xl p-2">
                    <HueColorDock
                        colors={colors}
                        hovered={hovered}
                        copy={true}
                    />
                </div>
            </div>
            <div className="h-16">
                <div className="flex h-full w-full items-center justify-between">
                    <span className="ml-4 select-none font-pacifico text-xl font-bold">
                        {name}
                    </span>
                    <a href={`/${name}`}>
                        <div className="mr-4 flex cursor-pointer items-center rounded-lg border bg-white p-2 hover:bg-slate-100">
                            <SquareArrowOutUpRight
                                strokeWidth={2.25}
                                size={20}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

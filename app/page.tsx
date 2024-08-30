import fs from "fs";
import path from "path";
import HueCard from "@/components/hue-card";
import HueTitle from "@/components/hue-titile";
import { HueData } from "@/types/hue-type";

export default function Home() {
    const filePath = path.join(process.cwd(), "public/hue.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const hueData = JSON.parse(fileContents);

    return (
        <>
            <div className="flex justify-center">
                <HueTitle h1Title="Hue" h2Title="" />
                <span className="flex w-[95%] select-none flex-wrap justify-center py-10 font-pacifico text-3xl font-bold tracking-widest opacity-80 md:text-4xl lg:py-20">
                    <div className="py-2">
                        <span className="px-2 text-peach">Painting</span>
                        <span className="px-2 text-soft-gray">Your</span>
                        <span className="px-2 text-gray-blue">World</span>
                    </div>
                    <div className="py-2">
                        <span className="px-2 text-pink">In</span>
                        <span className="px-2 text-gold">Vibrant</span>
                        <span className="px-2 text-aqua">Hues</span>
                    </div>
                </span>
            </div>
            <div className="flex justify-center px-3 lg:px-10">
                <div className="grid w-full grid-cols-1 gap-1 md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:grid-cols-4">
                    {hueData.map((hue: HueData, index: number) => (
                        <HueCard
                            key={index}
                            name={hue.name}
                            colors={hue.colors}
                            tailwind_colors_name={hue.tailwind_colors_name}
                            tailwind_colors={hue.tailwind_colors}
                            background={hue.background}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

import fs from "fs";
import path from "path";
import HueCard from "@/components/hue-card";
import { HueData } from "@/types/hue-type";

export default function Home() {
    const filePath = path.join(process.cwd(), "public/hue.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const hueData = JSON.parse(fileContents);

    return (
        <>
            <div className="flex justify-center">
                <h1 className="hidden">Hue</h1>
                <span className="select-none py-20 font-pacifico text-4xl font-bold tracking-widest opacity-80">
                    <span className="px-2 text-peach">Painting</span>
                    <span className="px-2 text-soft-gray">Your</span>
                    <span className="px-2 text-gray-blue">World</span>
                    <span className="px-2 text-pink">In</span>
                    <span className="px-2 text-gold">Vibrant</span>
                    <span className="px-2 text-aqua">Hues</span>
                </span>
            </div>
            <div className="flex justify-center px-10">
                <div className="my-12 grid w-full grid-cols-4 gap-4">
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

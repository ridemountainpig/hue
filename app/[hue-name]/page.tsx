import fs from "fs";
import { HueData } from "@/types/hue-type";
import HueColorDock from "@/components/hue-color-dock";
import TailwindCopy from "@/components/tailwind-copy";
import HueGridColorSquare from "@/components/hue-grid-color-square";
import HueGridColorCircle from "@/components/hue-grid-color-circle";

export default function HuePage({
    params,
}: {
    params: { "hue-name": string };
}) {
    const hueData: HueData[] = JSON.parse(
        fs.readFileSync("public/hue.json", "utf8"),
    );
    const hue: HueData | undefined = hueData.find(
        (hue) => hue.name === params["hue-name"].replaceAll("%20", " "),
    );
    const colors = hue?.tailwind_colors
        ? Object.values(hue.tailwind_colors)
        : [];
    const tailwind_colors = hue?.tailwind_colors ? hue.tailwind_colors : [];
    const tailwind_colors_name = hue?.tailwind_colors_name
        ? hue.tailwind_colors_name
        : "";

    return (
        <>
            <h1 className="hidden">Hue</h1>
            <div className="flex w-full justify-center">
                <h2 className="select-none font-pacifico text-5xl font-bold tracking-widest text-slate-600">
                    {params["hue-name"].replaceAll("%20", " ")}
                </h2>
            </div>
            <div className="mt-24 flex h-20 w-full items-center justify-center pb-20">
                <HueColorDock colors={colors} hovered={true} copy={false} />
            </div>
            <div className="mt-10 flex items-center justify-center bg-white pb-20">
                <div className="w-[50rem]">
                    <div className="grid grid-cols-4 gap-x-4 gap-y-4">
                        <HueGridColorSquare color={colors[0]} />
                        <div className="col-span-2">
                            <div
                                className="flex h-[11rem] w-full items-center justify-center rounded-xl border shadow-xl"
                                style={{
                                    backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[9]})`,
                                }}
                            >
                                <span className="select-none text-center font-pacifico text-5xl font-bold tracking-widest text-white">
                                    {params["hue-name"].replaceAll("%20", " ")}
                                </span>
                            </div>
                        </div>
                        <HueGridColorSquare color={colors[9]} />
                        <div className="col-span-2">
                            <div className="flex h-[25rem] items-start rounded-xl border bg-white py-4 shadow-xl">
                                <div className="w-full">
                                    <div className="flex w-full justify-end px-4">
                                        <TailwindCopy
                                            tailwind_colors_name={
                                                tailwind_colors_name
                                            }
                                            tailwind_colors={
                                                Array.isArray(tailwind_colors)
                                                    ? {}
                                                    : tailwind_colors
                                            }
                                        />
                                    </div>
                                    <div className="m-4 h-[20rem] rounded-xl bg-slate-100 bg-opacity-70 p-4 font-mono text-base font-semibold tracking-wider">
                                        {`${hue?.tailwind_colors_name}:`}
                                        <pre className="inline">
                                            <code>
                                                {JSON.stringify(
                                                    hue?.tailwind_colors,
                                                    null,
                                                    4,
                                                )}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex h-[12rem] w-full items-center justify-center gap-x-8 rounded-xl border bg-white shadow-xl">
                                <HueGridColorCircle color={colors[1]} />
                                <HueGridColorCircle color={colors[2]} />
                                <HueGridColorCircle color={colors[3]} />
                                <HueGridColorCircle color={colors[4]} />
                            </div>
                            <div className="mt-4 flex h-[12rem] w-full items-center justify-center gap-x-8 rounded-xl border bg-white shadow-xl">
                                <HueGridColorCircle color={colors[5]} />
                                <HueGridColorCircle color={colors[6]} />
                                <HueGridColorCircle color={colors[7]} />
                                <HueGridColorCircle color={colors[8]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

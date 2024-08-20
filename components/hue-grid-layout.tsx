import HueTitle from "@/components/hue-titile";
import HueColorDock from "@/components/hue-color-dock";
import TailwindCopy from "@/components/tailwind-copy";
import HueGridColorSquare from "@/components/hue-grid-color-square";
import HueGridColorCircle from "@/components/hue-grid-color-circle";

interface HueGridLayoutProps {
    hueName: string;
    colors: string[];
    tailwind_colors_name: string;
    tailwind_colors: Record<string, string>;
}

export default function HueGridLayout({
    hueName,
    colors,
    tailwind_colors_name,
    tailwind_colors,
}: HueGridLayoutProps) {
    return (
        <>
            <HueTitle h1Title="Hue" h2Title={hueName}></HueTitle>
            <div className="hidden md:block">
                <div className="mt-24 flex h-20 w-full items-center justify-center pb-20">
                    <HueColorDock colors={colors} hovered={true} copy={false} />
                </div>
            </div>
            <div className="mt-20 flex items-center justify-center bg-white px-5 pb-20 md:mt-10">
                <div className="w-[50rem]">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-4">
                        <HueGridColorSquare color={colors[0]} />
                        <div className="col-span-2">
                            <div
                                className="flex h-[11rem] w-full items-center justify-center rounded-xl border shadow-xl"
                                style={{
                                    backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[9]})`,
                                }}
                            >
                                <span className="select-none break-words px-4 text-center font-pacifico text-5xl font-bold tracking-widest text-white">
                                    {hueName}
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
                                    <div className="m-4 h-[20rem] rounded-xl bg-slate-100 bg-opacity-70 p-4 font-mono text-sm font-semibold tracking-wider sm:text-base">
                                        {`${tailwind_colors_name}:`}
                                        <pre className="inline">
                                            <code>
                                                {JSON.stringify(
                                                    tailwind_colors,
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
                            <div className="flex h-[12rem] w-full items-center justify-center rounded-xl border bg-white shadow-xl">
                                <HueGridColorCircle color={colors[1]} />
                                <HueGridColorCircle color={colors[2]} />
                                <HueGridColorCircle color={colors[3]} />
                                <HueGridColorCircle color={colors[4]} />
                            </div>
                            <div className="mt-4 flex h-[12rem] w-full items-center justify-center rounded-xl border bg-white shadow-xl">
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

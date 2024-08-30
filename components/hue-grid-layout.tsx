import HueTitle from "@/components/hue-titile";
import HueColorDock from "@/components/hue-color-dock";
import TailwindCopy from "@/components/tailwind-copy";
import HueGridColorSquare from "@/components/hue-grid-color-square";
import HueGridColorText from "@/components/hue-grid-color-text";
import HueGridColorCircle from "@/components/hue-grid-color-circle";
import HueGridTailwindCode from "@/components/hue-grid-tailwind-code";
import HueLinkCopy from "@/components/hue-link-copy";

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
                        <HueGridColorText
                            colorOne={colors[0]}
                            colorTwo={colors[9]}
                            hueName={hueName}
                        />
                        <HueGridColorSquare color={colors[9]} />
                        <div className="col-span-2">
                            <div className="flex h-[25rem] items-start rounded-xl border bg-white py-4 shadow-xl">
                                <div className="w-full">
                                    <div className="flex w-full justify-center gap-x-2 px-4 lg:justify-end">
                                        <HueLinkCopy />
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
                                    <HueGridTailwindCode
                                        tailwindColorsName={
                                            tailwind_colors_name
                                        }
                                        tailwindColors={tailwind_colors}
                                    ></HueGridTailwindCode>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex h-[12rem] w-full items-center justify-center rounded-xl border bg-white shadow-xl">
                                <HueGridColorCircle
                                    color={colors[1]}
                                    index={1}
                                />
                                <HueGridColorCircle
                                    color={colors[2]}
                                    index={2}
                                />
                                <HueGridColorCircle
                                    color={colors[3]}
                                    index={3}
                                />
                                <HueGridColorCircle
                                    color={colors[4]}
                                    index={4}
                                />
                            </div>
                            <div className="mt-4 flex h-[12rem] w-full items-center justify-center rounded-xl border bg-white shadow-xl">
                                <HueGridColorCircle
                                    color={colors[5]}
                                    index={5}
                                />
                                <HueGridColorCircle
                                    color={colors[6]}
                                    index={6}
                                />
                                <HueGridColorCircle
                                    color={colors[7]}
                                    index={7}
                                />
                                <HueGridColorCircle
                                    color={colors[8]}
                                    index={8}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

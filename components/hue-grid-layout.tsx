"use client";

import { useState } from "react";
import HueTitle from "@/components/hue-titile";
import HueColorDock from "@/components/hue-color-dock";
import TailwindCopy from "@/components/tailwind-copy";
import HueGridColorSquare from "@/components/hue-grid-color-square";
import HueGridColorText from "@/components/hue-grid-color-text";
import HueGridColorCircle from "@/components/hue-grid-color-circle";
import HueGridTailwindCodeV3 from "@/components/hue-grid-tailwind-code-v3";
import HueGridTailwindCodeV4 from "@/components/hue-grid-tailwind-code-v4";
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
    const [tailwindVersionToggle, setTailwindVersionToggle] = useState(false);

    function convertToV4(colors = {}) {
        let cssVariables = "@theme {\n";
        for (const [colorLevel, hex] of Object.entries(colors)) {
            cssVariables += ` --color-${tailwind_colors_name}-${colorLevel}: ${hex};\n`;
        }
        cssVariables += "}";
        return cssVariables;
    }
    const tailwindColorsV3 = tailwind_colors;
    const tailwindColorsV4 = convertToV4(tailwindColorsV3);

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
                                    <div className="flex w-full justify-between px-2 sm:px-4">
                                        <div className="flex gap-x-2">
                                            <HueLinkCopy />
                                            <TailwindCopy
                                                tailwind_colors_name={
                                                    tailwind_colors_name
                                                }
                                                tailwind_colors={
                                                    tailwindVersionToggle
                                                        ? Array.isArray(
                                                              tailwindColorsV3,
                                                          )
                                                            ? {}
                                                            : tailwindColorsV3
                                                        : tailwindColorsV4
                                                }
                                                tailwindVersionToggle={
                                                    tailwindVersionToggle
                                                }
                                            />
                                        </div>
                                        <label className="inline-flex cursor-pointer items-center">
                                            <input
                                                type="checkbox"
                                                className="peer sr-only"
                                                onChange={() =>
                                                    setTailwindVersionToggle(
                                                        !tailwindVersionToggle,
                                                    )
                                                }
                                            />
                                            <div className="peer relative h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-slate-600 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full"></div>
                                            <span className="text-2xs ml-1 font-mono font-semibold text-black sm:text-xs">
                                                Tailwind V3
                                            </span>
                                        </label>
                                    </div>
                                    {tailwindVersionToggle ? (
                                        <HueGridTailwindCodeV3
                                            tailwindColorsName={
                                                tailwind_colors_name
                                            }
                                            tailwindColors={tailwindColorsV3}
                                        ></HueGridTailwindCodeV3>
                                    ) : (
                                        <HueGridTailwindCodeV4
                                            tailwindColors={tailwindColorsV4}
                                        ></HueGridTailwindCodeV4>
                                    )}
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

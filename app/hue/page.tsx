"use client";

import { useSearchParams } from "next/navigation";
import hueUtils from "@/utils/hue";
import HueGridLayout from "@/components/hue-grid-layout";

export default function HuePage() {
    const searchParams = useSearchParams();

    const hueColor = searchParams.get("hue-color");
    const hueName = searchParams.get("hue-name");

    const colorName = hueName ? hueName.replaceAll("%20", " ") : "";
    const colorOne = hueColor ? "#" + hueColor?.split("-")[0] : "";
    const colorTwo = hueColor ? "#" + hueColor?.split("-")[1] : "";

    const hue = hueUtils.generateHue(colorOne, colorTwo);
    const colors = hue.colors;
    const tailwind_colors = hue.tailwind_colors;
    const tailwind_colors_name = hueName
        ? hueName.replaceAll(" ", "_").toLowerCase()
        : "";

    return (
        <HueGridLayout
            hueName={colorName}
            colors={colors}
            tailwind_colors_name={tailwind_colors_name}
            tailwind_colors={tailwind_colors}
        ></HueGridLayout>
    );
}

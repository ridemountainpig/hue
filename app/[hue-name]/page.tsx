import fs from "fs";
import path from "path";
import { HueData } from "@/types/hue-type";
import HueGridLayout from "@/components/hue-grid-layout";
import HueError from "@/components/hue-error";

export async function generateMetadata({
    params,
}: {
    params: { "hue-name": string };
}) {
    return {
        title: params["hue-name"].replaceAll("%20", " ") + " | Hue",
        description: "Painting Your World In Vibrant Hues",
        openGraph: {
            type: "website",
            url: "https://hue-palette.com/" + params["hue-name"],
            title: params["hue-name"].replaceAll("%20", " ") + " | Hue",
            description: "Painting Your World In Vibrant Hues",
            images: [
                {
                    url: "https://hue-palette.com/hue-icon.png",
                    width: 1200,
                    height: 630,
                    alt: "Hue icon",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: params["hue-name"].replaceAll("%20", " ") + " | Hue",
            description: "Painting Your World In Vibrant Hues",
            creator: "@ridemountainpig",
            images: ["https://hue-palette.com/hue-icon.png"],
        },
    };
}

export default function HuePage({
    params,
}: {
    params: { "hue-name": string };
}) {
    const filePath = path.join(process.cwd(), "public/hue.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const hueData: HueData[] = JSON.parse(fileContents);

    const hue: HueData | undefined = hueData.find(
        (hue) => hue.name === params["hue-name"].replaceAll("%20", " "),
    );

    if (!hue) {
        return <HueError></HueError>;
    }

    const colors = hue?.tailwind_colors
        ? Object.values(hue.tailwind_colors)
        : [];
    const tailwind_colors = hue?.tailwind_colors ? hue.tailwind_colors : {};
    const tailwind_colors_name = hue?.tailwind_colors_name
        ? hue.tailwind_colors_name
        : "";

    return (
        <HueGridLayout
            hueName={params["hue-name"].replaceAll("%20", " ")}
            colors={colors}
            tailwind_colors_name={tailwind_colors_name}
            tailwind_colors={tailwind_colors}
        ></HueGridLayout>
    );
}

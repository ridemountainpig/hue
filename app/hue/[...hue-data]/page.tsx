import hueUtils from "@/utils/hue";
import HueGridLayout from "@/components/hue-grid-layout";
import HueError from "@/components/hue-error";

export async function generateMetadata({
    params,
}: {
    params: { "hue-data": string[] };
}) {
    return {
        title: params["hue-data"][0].replaceAll("%20", " ") + " | Hue",
        description: "Painting Your World In Vibrant Hues",
        openGraph: {
            type: "website",
            url:
                "https://hue-palette.com/hue/" +
                params["hue-data"][0] +
                "/" +
                params["hue-data"][1],
            title: params["hue-data"][0].replaceAll("%20", " ") + " | Hue",
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
            title: params["hue-data"][0].replaceAll("%20", " ") + " | Hue",
            description: "Painting Your World In Vibrant Hues",
            creator: "@ridemountainpig",
            images: ["https://hue-palette.com/hue-icon.png"],
        },
    };
}

export default function HuePage({
    params,
}: {
    params: { "hue-data": string[] };
}) {
    const hueName = params["hue-data"][0];
    const hueColor = params["hue-data"][1];

    if (!hueName || !hueColor) {
        return <HueError></HueError>;
    }

    const colorName = hueName ? hueName.replaceAll("%20", " ") : "";
    const colorOne = hueColor ? "#" + hueColor?.split("-")[0] : "";
    const colorTwo = hueColor ? "#" + hueColor?.split("-")[1] : "";

    const isValidHexColor = (color: string) => /^#[0-9A-F]{6}$/i.test(color);

    if (
        !colorOne ||
        !colorTwo ||
        !isValidHexColor(colorOne) ||
        !isValidHexColor(colorTwo)
    ) {
        return <HueError></HueError>;
    }

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

import fs from "fs";
import path from "path";
import Image from "next/image";
import { HueData } from "@/types/hue-type";
import { House } from "lucide-react";
import HueGridLayout from "@/components/hue-grid-layout";

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
        return (
            <>
                <div className="flex w-full justify-center">
                    <h2 className="mt-16 select-none font-pacifico text-4xl font-bold tracking-widest text-slate-600">
                        Couldn&apos;t find the hue you&apos;re looking for
                    </h2>
                </div>
                <div className="mt-12 flex w-full justify-center gap-x-4">
                    <a href="/">
                        <button className="flex items-center gap-x-2 rounded-lg border bg-white p-2 px-4 py-2 transition-colors duration-300 hover:bg-slate-100">
                            <House strokeWidth={2.5} size={20} />
                            <span className="font-mono text-lg font-semibold">
                                Go To Homepage
                            </span>
                        </button>
                    </a>
                    <a href="/hue-generator">
                        <button className="flex items-center gap-x-2 rounded-lg border bg-white p-2 px-4 py-2 transition-colors duration-300 hover:bg-slate-100">
                            <Image
                                src={"/favicon.ico"}
                                alt="Hue icon"
                                width={27}
                                height={27}
                            ></Image>
                            <span className="font-mono text-lg font-semibold">
                                Generate New Hue
                            </span>
                        </button>
                    </a>
                </div>
            </>
        );
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

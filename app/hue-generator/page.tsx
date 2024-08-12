import HueTitle from "@/components/hue-titile";
import HueGenerator from "@/components/hue-generator";

export async function generateMetadata() {
    return {
        title: "Hue Generator | Hue",
        description: "Painting Your World In Vibrant Hues",
        openGraph: {
            type: "website",
            url: "https://hue-palette.com/hue-generator",
            title: "Hue Generator | Hue",
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
            title: "Hue Generator | Hue",
            description: "Painting Your World In Vibrant Hues",
            creator: "@ridemountainpig",
            images: ["https://hue-palette.com/hue-icon.png"],
        },
    };
}

export default function HueGeneratorPage() {
    return (
        <>
            <HueTitle h1Title="Hue" h2Title="Hue Generator" />
            <div className="py-20">
                <HueGenerator></HueGenerator>
            </div>
        </>
    );
}

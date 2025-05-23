import HueTitle from "@/components/hue-titile";
import HueGenerator from "@/components/hue-generator";

export async function generateMetadata() {
    return {
        title: "Hue Generator | Hue",
        description:
            "Bring your vision to life with beautiful, customizable hues! Hue Generator empowers everyone—from creators to enthusiasts—to explore, design, and apply unique hues effortlessly. It offers instant Tailwind CSS configuration for those who need it, adding a vibrant touch to any project.",
        keywords:
            "hue generator, custom hue palette, hue palette generator, color hue generator, Tailwind CSS hue generator, web design hue tool, generate hue palettes, custom Tailwind hues, color hue picker, hue tool for web developers, Tailwind CSS custom hues, online hue generator, UI/UX hue palette, color scheme generator, Tailwind hue configuration, hue palette customization, accessible hue generator, web design color generator",
        openGraph: {
            type: "website",
            url: "https://hue-palette.com/hue-generator",
            title: "Hue Generator | Hue",
            description: "Painting Your World In Vibrant Hues",
            images: [
                {
                    url: "/api/og",
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
            images: ["/api/og"],
        },
    };
}

export default function HueGeneratorPage() {
    return (
        <>
            <HueTitle h1Title="Hue" h2Title="Hue Generator" />
            <div className="pt-10 pb-20">
                <HueGenerator></HueGenerator>
            </div>
        </>
    );
}

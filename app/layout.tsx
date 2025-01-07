import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { Rwdot } from "rwdot";

const pacifico = Pacifico({
    subsets: ["latin"],
    variable: "--font-pacifico",
    weight: "400",
});

export const metadata: Metadata = {
    title: "Hue Palette",
    description:
        "Bring your vision to life with beautiful, customizable color palettes! Hue Palette empowers everyone from creators to enthusiasts to explore, design, and apply unique color combinations effortlessly. Add a touch of creativity to any project. Create custom hue palettes and generate Tailwind CSS configuration code in seconds. Hue Palette is perfect for both designers and developers!",
    keywords:
        "Color Palette Generator, Hue Palette, Custom Color Palettes, Tailwind CSS Colors, Tailwind CSS Palette Generator, Web Design Color Tool, CSS Color Configurator, Color Schemes for Web Design, Custom Hue Palette, Tailwind Color Customizer, UI/UX Color Palette, Online Color Tool, Frontend Design Color Tool, Web Development Color Palettes, Tailwind CSS Config Generator, Accessible Color Palettes, Hue Picker, Tailwind Theme Colors",
    authors: [
        {
            name: "ridemountainpig",
            url: "https://www.github.com/ridemountainpig",
        },
    ],
    openGraph: {
        type: "website",
        url: "https://hue-palette.com/",
        title: "Hue Palette",
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
        title: "Hue Palette",
        description: "Painting Your World In Vibrant Hues",
        creator: "@ridemountainpig",
        images: ["https://hue-palette.com/hue-icon.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${pacifico.variable} bg-decoration bg-white`}>
                <Header></Header>
                <main>{children}</main>
                <Footer></Footer>
                <Toaster position="bottom-center" reverseOrder={false} />
                <Rwdot
                    position="bottom-right"
                    show={process.env.RWDOT_ENV === "development"}
                />
            </body>
            <GoogleAnalytics gaId="G-J6GMFK5VNN" />
        </html>
    );
}

import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import { Rwdot } from "rwdot";

const pacifico = Pacifico({
    subsets: ["latin"],
    variable: "--font-pacifico",
    weight: "400",
});

export const metadata: Metadata = {
    title: "Hue Palette",
    description: "Painting Your World In Vibrant Hues",
    keywords:
        "hue, palette, hue palette, hue generator, hues, hues generator, hues palette, hues generator, hues palette, hue generator, hue palette generator, hue palette generator, tailwind css, tailwind, tailwind css generator, tailwind generator, tailwind css palette, tailwind palette, tailwind css palette generator, tailwind palette generator",
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
                <Toaster position="bottom-center" reverseOrder={false} />
                <Rwdot
                    position="bottom-right"
                    show={process.env.RWDOT_ENV === "development"}
                />
            </body>
        </html>
    );
}

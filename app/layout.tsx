import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";

const pacifico = Pacifico({
    subsets: ["latin"],
    variable: "--font-pacifico",
    weight: "400",
});

export const metadata: Metadata = {
    title: "Hue",
    description: "Hue",
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
            </body>
        </html>
    );
}

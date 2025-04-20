import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
    runtime: "edge",
};

export default async function (request: NextRequest) {
    const fontData = await fetch(
        new URL("../../asset/pacifico.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer());

    const { searchParams } = new URL(request.url);
    const hueName = searchParams.get("hueName")?.replaceAll("%20", " ");
    const hueColor = searchParams.get("hueColor");
    const colorOne = hueColor ? "#" + hueColor?.split("-")[0] : "";
    const colorTwo = hueColor ? "#" + hueColor?.split("-")[1] : "";

    if (!hueName || !hueColor || hueName.length > 14) {
        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "white",
                    }}
                >
                    <div tw="flex items-center justify-center">
                        <img
                            src="https://www.hue-palette.com/hue-icon.png"
                            alt="Hue Icon"
                            width={450}
                        />
                        <span tw="font-pacifico text-[12rem] font-bold tracking-widest text-slate-600 ml-22">
                            Hue
                        </span>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: "Pacifico",
                        data: fontData,
                        style: "normal",
                    },
                ],
            },
        );
    }

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage: `linear-gradient(to right, ${colorOne}, ${colorTwo})`,
                }}
            >
                <span tw="font-pacifico text-[10rem] font-bold tracking-widest text-white">
                    {hueName}
                </span>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "Pacifico",
                    data: fontData,
                    style: "normal",
                },
            ],
        },
    );
}

import { NextApiRequest, NextApiResponse } from "next";
import hueUtils from "@/utils/hue";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const hueColor = req.query.hueColor as string;
    const hueColorOne = "#" + hueColor.split("-")[0];
    const hueColorTwo = "#" + hueColor.split("-")[1];

    const isValidHexColor = (color: string) => /^#[0-9A-F]{6}$/i.test(color);

    if (
        !hueColorOne ||
        !hueColorTwo ||
        !isValidHexColor(hueColorOne) ||
        !isValidHexColor(hueColorTwo)
    ) {
        return res.status(400).json({ error: "Invalid hex color" });
    }

    const hue = hueUtils.generateHue(hueColorOne, hueColorTwo);

    res.status(200).json(hue);
}

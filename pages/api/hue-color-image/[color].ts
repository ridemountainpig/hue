import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const color = req.query.color as string;

    const colorImage = `
    <svg width="100" height="100" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#${color}">
        <rect width="16" height="16" rx="1" ry="1" fill="#${color}"/>
    </svg>
    `;

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(colorImage);
}

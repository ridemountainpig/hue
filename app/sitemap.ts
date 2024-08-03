import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public/hue.json");
const fileContents = fs.readFileSync(filePath, "utf8");
const hueData = JSON.parse(fileContents);

export default function sitemap(): MetadataRoute.Sitemap {
    let hueJsonSitemap = [];

    for (const hue of hueData) {
        const url = `https://hue-palette.com/${hue.name}/`;
        hueJsonSitemap.push({
            url: url,
            priority: 0.8,
            lastModified: new Date(),
        });
    }

    return [
        {
            url: "https://hue-palette.com",
            priority: 1,
            lastModified: new Date(),
        },
        {
            url: "https://hue-palette.com/hue-generator",
            priority: 0.8,
        },
        ...hueJsonSitemap,
    ];
}

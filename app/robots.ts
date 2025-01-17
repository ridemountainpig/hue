import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/_next/static/media/"],
        },
        sitemap: "https://www.hue-palette.com/sitemap.xml",
    };
}

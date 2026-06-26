import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/termeni-si-conditii", "/politica-cookies"],
            },
        ],
        sitemap: "https://ecoelite.ro/sitemap.xml",
    };
}

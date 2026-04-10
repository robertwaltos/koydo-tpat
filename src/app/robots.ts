import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://tpat.koydo.app/sitemap.xml",
    host: "https://tpat.koydo.app",
  };
}

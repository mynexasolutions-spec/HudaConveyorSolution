import type { MetadataRoute } from "next";
import { SEO_PAGES, SITE_URL } from "./seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(SEO_PAGES).map((slug: string) => ({
    url: slug === "" ? SITE_URL : `${SITE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: slug === "" || slug === "gallery" ? "weekly" : "monthly",
    priority: slug === "" ? 1 : 0.8,
  }));
}

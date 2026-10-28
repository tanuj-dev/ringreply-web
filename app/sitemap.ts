import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";
import { solutions } from "./solutions/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/pricing", 0.9),
    page("/features", 0.9),
    page("/how-it-works", 0.8),
    page("/demo", 0.8),
    page("/solutions", 0.8),
    ...solutions.map((s) => page(`/solutions/${s.slug}`, 0.8)),
    page("/contact", 0.6),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
    page("/cookie-policy", 0.2, "yearly"),
  ];
}

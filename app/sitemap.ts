import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/academics",
    "/campus",
    "/achievements",
    "/admissions",
    "/news",
    "/gallery",
    "/contact",
    "/parent-portal",
    "/alumni",
    "/staff",
    "/notices",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/news" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/admissions" || route === "/academics" ? 0.9 : 0.8,
  }));
}

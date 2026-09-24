import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://reinerumila.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/resume"].map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}

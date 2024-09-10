import { MetadataRoute } from "next";

const buildUrl = (path?: string) => `http://localhost:3000${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now.toISOString(),
    },
    {
      url: buildUrl("/news"),
      lastModified: now.toISOString(),
    },
    {
      url: buildUrl("/members"),
      lastModified: now.toISOString(),
    },
    {
      url: buildUrl("/contact"),
      lastModified: now.toISOString(),
    },
  ];
}

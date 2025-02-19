import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hlmnhkl.netlify.app",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://hlmnhkl.netlify.app/projects",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://hlmnhkl.netlify.app/contact",
      lastModified: new Date().toISOString(),
    },
  ];
}

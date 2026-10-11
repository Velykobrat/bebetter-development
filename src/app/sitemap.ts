import type { MetadataRoute } from "next";
import { caseProjects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/work", ...caseProjects.map((project) => `/work/${project.slug}`)]
    .map((pathname) => ({ url: new URL(pathname, siteUrl).href }));
}

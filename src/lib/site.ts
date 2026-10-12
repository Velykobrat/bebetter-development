import type { Metadata } from "next";
import { projectImage } from "@/lib/project-images";

export const siteUrl = new URL("https://bebetter-development.vercel.app/");
export const siteDescription = "BeBetter Development — незалежний технологічний бренд і digital studio. Створюємо сайти, лендінги та цифрові інструменти для людей і бізнесу.";

export function pageMetadata(title: string, description: string, pathname: string, image = "/brand/og-cover.png"): Metadata {
  const imageUrl = projectImage(image);
  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: "website",
      siteName: "BeBetter Development",
      locale: "uk_UA",
      title,
      description,
      url: pathname,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  };
}

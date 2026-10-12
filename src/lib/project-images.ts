import cloudinaryImages from "@/data/cloudinary-images.json";
const images: Record<string, string> = cloudinaryImages;
export function projectImage(path: string): string {
  return images[path] ?? path;
}

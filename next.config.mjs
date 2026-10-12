// @ts-check
import { readFileSync } from "node:fs";

/** @type {Record<string, string>} */
const cloudinaryImages = JSON.parse(readFileSync(new URL("./src/data/cloudinary-images.json", import.meta.url), "utf8"));
const cloudinaryClouds = [...new Set(Object.values(cloudinaryImages).map((value) => new URL(value).pathname.split("/")[1]))];

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: process.cwd() },
  images: {
    remotePatterns: cloudinaryClouds.map((cloud) => ({
      protocol: "https",
      hostname: "res.cloudinary.com",
      pathname: `/${cloud}/image/upload/**`,
    })),
  },
};

export default nextConfig;

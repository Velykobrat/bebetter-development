import { readFile, readdir, writeFile, rename } from "node:fs/promises";
import { resolve, relative, extname } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
require("@next/env").loadEnvConfig(process.cwd());
const cloud = process.env.CLOUDINARY_CLOUD_NAME;
const preset = process.env.CLOUDINARY_UPLOAD_PRESET;
if (!cloud || !preset || !/^[a-zA-Z0-9_-]+$/.test(cloud)) {
  throw new Error("Set CLOUDINARY_CLOUD_NAME and an unsigned CLOUDINARY_UPLOAD_PRESET in .env.local first.");
}
const manifestPath = resolve("src/data/cloudinary-images.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const publicRoot = resolve("public");

async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collect(path));
    else if (/\.(png|jpe?g|webp|avif|svg)$/i.test(entry.name)) files.push(path);
  }
  return files;
}

const files = [...await collect(resolve("public/projects")), ...await collect(resolve("public/brand"))];
for (const path of files) {
  const localPath = "/" + relative(publicRoot, path).replaceAll("\\", "/");
  if (manifest[localPath]) {
    const existing = new URL(manifest[localPath]);
    if (existing.hostname !== "res.cloudinary.com" || !existing.pathname.startsWith(`/${cloud}/image/upload/`)) {
      throw new Error(`Manifest contains a different Cloudinary account for ${localPath}`);
    }
    console.log(`SKIP ${localPath}`);
    continue;
  }
  const form = new FormData();
  const bytes = await readFile(path);
  const extension = extname(path).toLowerCase();
  const type = extension === ".jpg" || extension === ".jpeg" ? "image/jpeg" : extension === ".svg" ? "image/svg+xml" : `image/${extension.slice(1)}`;
  form.append("file", new Blob([bytes], { type }), localPath.split("/").at(-1));
  form.append("upload_preset", preset);
  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, {
    method: "POST", body: form, signal: AbortSignal.timeout(60000),
  });
  const result = await response.json();
  if (!response.ok || !result.secure_url) throw new Error(`Upload failed for ${localPath}: ${result.error?.message ?? response.status}`);
  const uploaded = new URL(result.secure_url);
  if (uploaded.protocol !== "https:" || uploaded.hostname !== "res.cloudinary.com" || !uploaded.pathname.startsWith(`/${cloud}/image/upload/`)) {
    throw new Error(`Unexpected delivery URL for ${localPath}`);
  }
  manifest[localPath] = uploaded.href;
  await writeFile(manifestPath + ".tmp", JSON.stringify(manifest, null, 2) + "\n");
  await rename(manifestPath + ".tmp", manifestPath);
  console.log(`UPLOADED ${localPath}`);
}
console.log("Migration recorded. Restart Next.js, run checks and build, and review images before removing local originals.");

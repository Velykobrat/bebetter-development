import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const origin = process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:3100";
const server = process.env.SMOKE_BASE_URL ? null : spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3100"], {
  stdio: ["ignore", "pipe", "pipe"],
});
let output = "";
server?.stdout.on("data", (chunk) => { output += chunk; });
server?.stderr.on("data", (chunk) => { output += chunk; });
server?.on("error", (error) => { output += error.message; });

try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server && server.exitCode !== null) throw new Error(`Server stopped: ${output}`);
    try {
      const response = await fetch(origin, { signal: AbortSignal.timeout(2000) });
      ready = response.ok;
      if (ready) break;
    } catch { /* Wait for the production server to listen. */ }
    await delay(500);
  }
  assert.ok(ready, `Server did not become ready: ${output}`);

  const routes = ["/", "/work", "/work/photographer-portfolio", "/work/mini-printer-landing", "/work/chess-journey", "/work/hundred"];
  for (const route of routes) {
    const response = await fetch(`${origin}${route}`, { signal: AbortSignal.timeout(10000) });
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, /id="main-content"/, `${route}: main content missing`);
    assert.match(html, /<h1[\s>]/, `${route}: heading missing`);
    const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/);
    assert.ok(canonical, `${route}: canonical missing`);
    assert.equal(new URL(canonical[1]).href, new URL(route, "https://bebetter-development.vercel.app").href, `${route}: incorrect canonical`);
    console.log(`PASS ${route}`);
  }
  const missing = await fetch(`${origin}/work/nonexistent-case`, { signal: AbortSignal.timeout(10000) });
  assert.equal(missing.status, 404, "Unknown case must return 404");
  const removedCase = await fetch(`${origin}/work/sweet-pop`, { signal: AbortSignal.timeout(10000) });
  assert.equal(removedCase.status, 404, "Sweet Pop has no case page");
  const icon = await fetch(`${origin}/favicon.ico`, { signal: AbortSignal.timeout(10000) });
  assert.equal(icon.status, 200, "Favicon missing");
  const iconBytes = Buffer.from(await icon.arrayBuffer());
  assert.equal(iconBytes.readUInt16LE(2), 1, "Invalid ICO format");
  console.log("PASS unknown case and favicon");
} finally {
  server?.kill();
}

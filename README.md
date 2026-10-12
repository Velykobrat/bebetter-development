# BeBetter Development

**Technology to Be Better.**

BeBetter Development is an independent technology brand founded by Vitalii Velykobrat.

We build, explore and experiment with technology designed to extend human capability, remove unnecessary complexity, and help people do meaningful things better.

## Philosophy

We develop technology.  
Technology develops us.

Technology should not exist for its own sake. It should remove friction, extend human capability, and help us do meaningful things better.

## Stack

- Next.js
- TypeScript
- React
- Tailwind CSS

## Development

Install dependencies:

    npm install

Run the development server:

    npm.cmd run dev

Open `http://localhost:3000`.

## Public site and metadata

The canonical origin is `https://bebetter-development.vercel.app/`, configured in `src/lib/site.ts`.
When moving to a custom domain, update this value before deploying.

- `/sitemap.xml` includes Home, Work, and prepared case pages.
- `/robots.txt` allows production crawling and disallows Vercel preview crawling.
- Open Graph and Twitter metadata use the brand cover or the case screenshot.
- Contacts remain a placeholder until the company's channels are ready.
- Vercel Web Analytics SDK is included in the root layout. Enable Web Analytics in the project's Vercel dashboard and deploy the changes to start collecting page views.
- Telegram enquiry delivery is not connected yet.

Validate locally with `npm.cmd run lint` and `npm.cmd run build`.
Selected work uses static responsive previews, with one image per project and no carousel JavaScript.
Case pages present the idea, current context, implementation and desktop/mobile screenshots.

## Automated checks

GitHub Actions runs on every push and pull request using Node.js 22:
`npm ci`, `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run test:smoke`.
The smoke check starts the production server and verifies Home, Work, all current
case pages, their headings and canonical URLs, an unknown case returning 404, and the favicon.
Run `npm.cmd run test:smoke` locally after a successful build.

## Cloudinary image migration

The current manifest maps project and brand images to the `dln0hogkt` Cloudinary account.
The site uses these URLs; local originals remain as a backup pending production verification.

Create an unsigned upload preset limited to the image formats used here in your Cloudinary account.
Put `CLOUDINARY_CLOUD_NAME` and `CLOUDINARY_UPLOAD_PRESET` in the ignored `.env.local` file.
No API secret is needed or exposed to the browser.
Run `npm.cmd run images:upload` to upload project screenshots and the brand cover.
The script records returned HTTPS URLs in `src/data/cloudinary-images.json` after every upload,
so an interrupted migration can resume without uploading recorded files again.
Restart Next.js after migration: its allowed remote image paths are derived from this manifest.
Review the images, run the checks and build, then commit the manifest.
Local files remain available until migration is verified; unmapped images use local paths.
Next Image handles responsive resizing, WebP delivery and lazy loading.
See the [Cloudinary upload API](https://cloudinary.com/documentation/image_upload_api_reference).

The favicon uses the existing public/brand/logo-icon.svg logo on an off-white background,
with SVG, multi-size ICO and Apple touch icon variants.

---

© 2026 BeBetter Development

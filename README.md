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
For mobile testing, tapping the current gallery screenshot advances to the next image;
swiping and arrow controls are also supported. Confirm the behavior on a real phone.

---

© 2026 BeBetter Development

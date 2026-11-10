# Shadraw

Portfolio and commissions website for **Shadraw**, the studio of Hamdiya, an artist in Verona, Italy, who works in portraiture and figurative art.

Built with Next.js 16 (App Router), React 19 and Tailwind CSS 4. Every page is generated as static output when the site is built.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All copy lives in `src/content/site.ts`: works, process steps, studio clips, commission offers, quotes and FAQ, plus the contact email and Instagram link.

- **Artwork images** are in `src/assets/` and are imported into `site.ts`. To add a work, drop a JPG in `src/assets/` and add an entry to `works`.
- **Studio videos** and their poster frames are in `public/media/`. They are muted, compressed to 540px wide and play only while on screen.
- **Brand palette** (shades of brown, linen → espresso) is defined in `src/app/globals.css` under `@theme`.

## Deploy on Vercel

1. Go to https://vercel.com/new and import the `jataa95/shadraw` GitHub repository.
2. Keep the defaults (Framework: Next.js, Build: `next build`) and click **Deploy**.
3. Every push to `main` will redeploy automatically.

After you connect a custom domain, update `site.url` in `src/content/site.ts` so social preview links use it.

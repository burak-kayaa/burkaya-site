# burkaya.com

Personal site of Burak Kaya: intro, CV, projects (including [Canya](https://canya.burkaya.com)) and a blog.
Built with [Astro](https://astro.build) on the [Astro Sphere](https://github.com/markhorn-dev/astro-sphere) template
(Tailwind CSS + SolidJS for search) as a fully static site, deployed on Cloudflare Pages.

## Structure

```text
src/consts.ts               Site title/description, nav links, social links, page headings
src/data/cv.ts              Profile summary, skills, education, certifications (rendered on /work)
src/content/work/           One Markdown file per job → the Experience list on /work
src/content/projects/       One folder per project (index.md + images) → /projects and /projects/<slug>
src/content/blog/           One folder per post (index.md or index.mdx) → /blog and /blog/<slug>
src/pages/                  Routes: /, /work, /projects, /blog, /search, /rss.xml, /robots.txt
src/components/             Header, drawer, footer, cards, search (SolidJS), star/meteor backgrounds
src/layouts/                PageLayout, article layouts
public/                     brand.svg (header mark), favicon, ui/social sprites, fonts, `_headers`
```

Light/dark follows the system and can be toggled in the header. The hero animation on the home page is the
template's; `public/js/bg.js` draws the particles/stars.

## Writing a post

Create `src/content/blog/<slug>/index.md`; the folder name becomes the URL (`/blog/<slug>`). Images can sit next to
`index.md` and be referenced relatively.

```md
---
title: "Post title"
summary: "One sentence shown in lists, RSS, search and meta tags."
date: "Sep 20 2026"
draft: false
tags:
- postgres
- spring-boot
---

Body in Markdown. Code blocks are highlighted at build time.
```

Projects use the same shape under `src/content/projects/<slug>/index.md`, plus optional `demoUrl` and `repoUrl`.
Jobs under `src/content/work/<company>.md` take `company`, `role`, `dateStart`, `dateEnd` (a date or `"Present"`).

## Development

Requires [Bun](https://bun.sh) 1.4 or newer.

```bash
bun install
bun run dev        # http://localhost:4321
bun run build      # astro check + static build into dist/
bun run preview    # serve dist/ locally
```

## Deploying to Cloudflare Pages

The site is a static build; no adapter or Worker is needed.

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repository.
2. Build settings:
   - Framework preset: **Astro**
   - Build command: `bun run build`
   - Build output directory: `dist`
   - Bun is detected automatically from `bun.lock`. The `packageManager` field in `package.json` pins Bun 1.4.2
     (the default image ships an older Bun that cannot read this lockfile version); if the build still picks
     an older Bun, add the environment variable `BUN_VERSION=1.4.2` under Settings → Variables and secrets.
   - `.node-version` pins Node 22 for the Astro toolchain.
3. Custom domain: add `burkaya.com` (and `www.burkaya.com` if wanted) under the project's Custom domains tab.
   The DNS zone is already on Cloudflare, so the CNAME records are created for you.

Every push to `main` triggers a production deploy; pull requests get preview URLs.

`public/_headers` adds basic security headers; `public/robots.txt` and the generated `sitemap-index.xml` handle indexing.

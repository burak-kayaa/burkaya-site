# burkaya.com

Personal site of Burak Kaya: intro, CV, projects (including [Canya](https://canya.burkaya.com)) and a blog.
Built with [Astro](https://astro.build) on the [Astrofy](https://github.com/manuelernestog/astrofy) template
(Tailwind CSS + daisyUI) as a fully static site, deployed on Cloudflare Pages.

## Structure

```text
src/config.ts               Site title/description, slug and view-transition switches
src/data/site.ts            Name, links, Canya metadata
src/data/cv.ts              CV content rendered on /cv and /projects
src/content/blog/           Blog posts (Markdown/MDX with frontmatter)
src/pages/                  Routes: /, /projects, /cv, /blog, /blog/<slug>, /blog/tag/<tag>, /rss.xml, 404
src/components/             Sidebar, header, footer, cards, CV timeline
src/layouts/                BaseLayout (drawer + sidebar), PostLayout
tailwind.config.cjs         Tailwind + daisyUI (theme set in BaseLayout's `data-theme`)
public/                     profile.webp (avatar), canya.webp, favicon, robots.txt, `_headers`
```

Replace `public/profile.webp` with a real photo (square, ~300px+); the current one is a placeholder.
The colour theme is a daisyUI theme name on `<html data-theme="lofi">` in `src/layouts/BaseLayout.astro`;
any theme from https://daisyui.com/docs/themes/ works.

## Writing a post

Create `src/content/blog/<slug>.md`; the file name becomes the URL (`/blog/<slug>`).

```md
---
title: "Post title"
description: "One sentence shown in lists, RSS and meta tags."
pubDate: "Sep 20 2026"
heroImage: "/some-image.webp"        # optional
badge: "NEW"                         # optional
tags: ["postgres", "spring-boot"]    # optional; each gets a /blog/tag/<tag> page
---

Body in Markdown. Code blocks are highlighted at build time.
```

## Development

Requires [Bun](https://bun.sh) 1.4 or newer.

```bash
bun install
bun run dev        # http://localhost:4321
bun run build      # static build into dist/
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

# burkaya.com

Personal site of Burak Kaya: intro, CV, projects (including [Canya](https://canya.burkaya.com)) and a blog.
Built with [Astro](https://astro.build) as a fully static site and deployed on Cloudflare Pages.

## Structure

```text
src/data/site.ts        Name, links, Canya metadata
src/data/cv.ts          CV content rendered on /about and /projects
src/content/blog/       Blog posts (Markdown with frontmatter)
src/pages/              Routes: /, /about, /projects, /blog, /blog/<id>, /rss.xml, 404
src/components/         Header, footer, post list, home-page system sketch
src/layouts/Base.astro  HTML shell, meta tags, fonts, theme bootstrap
src/styles/global.css   Design tokens (light/dark) and base typography
public/                 favicon, robots.txt, Cloudflare `_headers`
```

## Writing a post

Create `src/content/blog/<slug>.md`; the file name becomes the URL (`/blog/<slug>`).

```md
---
title: "Post title"
description: "One sentence shown in lists, RSS and meta tags."
date: 2026-09-20
tags: ["postgres", "spring-boot"]   # optional
draft: true                          # optional; hides the post from builds
---

Body in Markdown. Code blocks are highlighted at build time.
```

## Development

Requires [Bun](https://bun.sh) 1.4 or newer.

```bash
bun install
bun run dev        # http://localhost:4321
bun run build      # type-check (astro check) + static build into dist/
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

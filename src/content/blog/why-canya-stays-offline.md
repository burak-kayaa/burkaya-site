---
title: "Why Canya stays offline"
description: "The one network call a local-first diagram app is allowed to make, and why everything else is a file on your disk."
date: 2026-09-20
tags: ["canya", "local-first", "tauri"]
---

Canya is a desktop app for technical diagrams. The pitch is short: your diagrams are files, and the app does not talk to the internet.

That second half is a design decision, not a missing feature. Here is the reasoning, and the single exception I allowed myself.

## Files, not accounts

Every Canya project is one JSON file with a `.canya` extension and a versioned envelope. You choose where it lives when you create it. Autosave writes it back atomically after a short debounce; `Ctrl/Cmd+S` writes it now. There is no sync, no login, no "your projects" list that lives somewhere other than your disk.

That gives you a few things for free:

- **Backups are your backups.** Put the file in a git repo, a Syncthing folder, a USB stick. Canya does not care.
- **Nothing to leak.** Architecture diagrams are usually the most sensitive document a team has. An app that never sends them anywhere cannot mishandle them.
- **No lifecycle risk.** If I stop maintaining Canya tomorrow, your files still open in the last version you installed, and the format is plain JSON.

## The one exception

There is exactly one place where Canya makes a network request: **Import from Link**. You paste an `https://` URL to a published `.canya` file, the app fetches it once, validates it with the same schema it uses for a local file, and opens it as a new project. Nothing is fetched without you pasting the link, and nothing is sent back.

I wanted people to be able to share a diagram by dropping a link in a README or a wiki page, and "download it, then open it" was too many steps. One user-initiated `GET` felt like the right size for that.

## What about updates?

Installed copies check a `latest.json` on the GitHub release once at startup, and you can turn that off in Settings. Downloads are verified against a signing key before anything is installed. AUR installs skip this entirely, because `pacman` owns the binary there.

I count that as part of the installer rather than part of the app, but it is worth being explicit: startup update check, one exception for import, and nothing else.

If you want to try it: [canya.burkaya.com](https://canya.burkaya.com).

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A learning project for beginner web developers to practice styling and extending a vanilla static site. No build tools, frameworks, or package manager — just HTML, CSS, and JavaScript served directly.

## Development

Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

## Deployment

Deployed on Vercel as a static site. `vercel.json` sets `outputDirectory` to `.` (repo root), so all files are served as-is.

```bash
vercel        # preview deployment
vercel --prod # production deployment
```

## Architecture

Three files make up the entire app:

- **[index.html](index.html)** — single-page layout with four sections: sticky nav, hero, about, contact form
- **[styles.css](styles.css)** — CSS custom properties defined in `:root` control the dark theme (`--color-bg`, `--color-accent`, etc.) and `--max-width` constrains all section widths
- **[main.js](main.js)** — three small behaviors: footer year, CTA button smooth scroll, and client-side-only contact form submission (no backend)

The contact form does not send data anywhere — the submit handler just shows a confirmation message and resets the form.

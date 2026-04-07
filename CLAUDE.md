# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A learning project for beginner web developers to practice styling and extending a vanilla static recipe manager app. No build tools, frameworks, or package manager — just HTML, CSS, and JavaScript (ES modules) served directly.

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

### File Structure

```
index.html              # Home page — initializes default data, links to Add and List
pages/
  add.html              # Add a new recipe (form + live markdown preview)
  edit.html             # Edit an existing recipe (form + live markdown preview)
  list.html             # Browse all recipes, delete individual recipes
  recipe.html           # View a single recipe (rendered markdown)
scripts/
  home.esm.js           # Entry point for index.html; calls init()
  init.esm.js           # Seeds localStorage with a default "Chili" recipe if empty
  storage.esm.js        # All localStorage read/write operations (see Data Model below)
  add.esm.js            # Form handling and live preview for add.html
  edit.esm.js           # Form handling and live preview for edit.html
  list.esm.js           # Renders recipe list, handles delete
  recipe.esm.js         # Renders a single recipe by ?id= query param
styles/
  styles.css            # Single stylesheet for all pages
```

### Data Model

Recipes are stored in `localStorage` under the key `recipes.list` as a JSON array. Each recipe object has:

```js
{
  id: string | number,        // timestamp from new Date().getTime() (add), or preserved on edit
  title: string,
  description: string,
  ingredientsMarkdown: string, // raw markdown text
  stepsMarkdown: string,       // raw markdown text
}
```

### Key Behaviors

- **Data persistence**: `localStorage` only — data lives in the current browser, no backend.
- **Default data**: `init.esm.js` seeds one sample recipe ("Chili") if the list is empty.
- **Markdown rendering**: `marked` (loaded from jsDelivr CDN as an ES module) parses ingredient and step fields into HTML.
- **Sanitization**: `DOMPurify` (loaded from jsDelivr CDN as a classic script) sanitizes all rendered markdown before insertion into the DOM.
- **Navigation**: After form submission, `navigation.navigate()` (Navigation API) redirects to `/pages/list.html`.
- **Edit pattern**: Editing deletes the old record by id, then re-adds it with the same id and updated fields.
- **Recipe routing**: `recipe.html` and `edit.html` read the recipe id from `?id=` query param via `URLSearchParams`.

### External Dependencies (CDN, no install)

| Library    | How loaded                    | Purpose                        |
|------------|-------------------------------|--------------------------------|
| `marked`   | ES module import from jsDelivr | Markdown → HTML parsing        |
| `DOMPurify`| Classic `<script>` from jsDelivr | Sanitize HTML before DOM insertion |

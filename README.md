# Project Templates

Copier-based project scaffolding for personal TypeScript/Node.js projects.

## Prerequisites

- [Copier](https://copier.readthedocs.io/): `pipx install copier`
- [direnv](https://direnv.net/) (optional, for Nix flake auto-loading)

## Usage

```bash
# Create a new project interactively
copier copy ~/projects/templates ~/projects/my-new-app

# Create with pre-answered questions
copier copy ~/projects/templates ~/projects/my-new-app \
  -d 'name=my-new-app' \
  -d 'type=sveltekit' \
  -d 'tailwind=true'

# Update an existing project when templates change
copier update ~/projects/my-existing-app
```

## Project Types

| Type | Description |
|------|-------------|
| **SvelteKit app** | Full SvelteKit app deployed to Cloudflare Workers |
| **Cloudflare Worker** | Pure Hono-based Worker (no SvelteKit) |
| **Svelte library** | Svelte component library with demo site on Cloudflare Workers |

## Features

- **Svelte 5** + SvelteKit 2
- **TypeScript** strict mode
- **Tailwind CSS v4** (optional)
- **svelte-m3c** Material Design 3 (optional)
- **ESLint** + **Prettier** with perfectionist plugin
- **Vitest** unit and/or browser tests (optional)
- **Playwright** (optional)
- **Cloudflare Workers** deployment via Wrangler
- **Nix flake** for reproducible dev environment
- **GitHub Actions** CI (and CD for libraries)

## Standardized Conventions

All projects generated from this template follow consistent conventions:

- **pnpm 11.2.2** as package manager
- **4-space tabs**, **double quotes**, **trailing commas all**
- **Alphabetical imports/exports** via ESLint perfectionist
- **`<script lang="ts">`** enforced in all Svelte files
- **NodeNext** module resolution
- **80-character** print width

## License

GPL-3.0-or-later

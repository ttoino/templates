# Project Templates

Copier-based project scaffolding for personal projects.

## Prerequisites

- [Copier](https://copier.readthedocs.io/): `pipx install copier`
- [direnv](https://direnv.net/) (optional, for Nix flake auto-loading)

## Usage

```bash
# Create a new project interactively
copier copy gh:ttoino/templates ~/projects/my-new-app

# Create with pre-answered questions
copier copy gh:ttoino/templates ~/projects/my-new-app \
  -d 'name=my-new-app' \
  -d 'project_type=sveltekit' \
  -d 'tailwind=true'

# Update an existing project when templates change
copier update ~/projects/my-existing-app
```

## Project Types

| Type | Description |
|------|-------------|
| **general** | Minimal general-purpose project with Nix + Renovate |
| **python** | Python package with uv, ruff, pyright, pytest, and optional CLI |
| **worker** | Pure Hono-based Cloudflare Worker |
| **sveltekit** | Full SvelteKit app deployed to Cloudflare Workers/Pages |
| **svelte-library** | Svelte component library |

## Features

- **TypeScript** strict mode (Node, Worker, Svelte)
- **Svelte 5** + SvelteKit 2 (Svelte templates)
- **Tailwind CSS v4** (optional, Svelte templates)
- **svelte-m3c** Material Design 3 (optional, Svelte templates)
- **ESLint** + **Prettier** with perfectionist plugin
- **Vitest** unit and/or browser tests (optional)
- **Playwright** (optional, Svelte templates)
- **Cloudflare Workers** deployment via Wrangler (Worker, SvelteKit)
- **Python 3.13** + **uv** + **tox** (Python template)
- **Nix flake** for reproducible dev environment
- **Renovate** dependency automation
- **GitHub Actions** CI (and CD for libraries)

## Standardized Conventions

All projects generated from this template follow consistent conventions:

- **pnpm 11.2.2** as package manager (Node/TypeScript templates)
- **4-space tabs**, **double quotes**, **trailing commas all**
- **Alphabetical imports/exports** via ESLint perfectionist
- **`<script lang="ts">`** enforced in all Svelte files
- **NodeNext** module resolution (Svelte templates)
- **80-character** print width

## Repository Structure

This repo intentionally contains multiple self-contained Copier templates. Each
template lives in its own top-level directory and duplicates shared boilerplate
so that generated projects remain independent and easy to evolve separately.

## License

GPL-3.0-or-later

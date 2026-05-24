# AGENTS.md

This is a [Copier](https://copier.readthedocs.io/) template repository. It generates TypeScript project scaffolding (SvelteKit apps, Cloudflare Workers, Svelte libraries). **This repo itself is not a runnable project** — there is no `package.json` at root and no build step here.

## How the template works

- **`copier.yml`** at root defines questions, computed values, and settings.
- **`_subdirectory: template`** means only files inside `template/` are rendered into generated projects.
- Files ending in `.jinja` are processed by Jinja. Plain files are copied as-is.
- **Conditional filenames** use Jinja: `{% if type == 'worker' %}src{% endif %}/index.ts`. When the condition is false, the filename evaluates to empty and Copier skips that file entirely.
- The `.jinja` suffix **must** appear outside the Jinja condition in filenames (e.g. `{% if condition %}file.txt{% endif %}.jinja`), otherwise Copier won't recognize it as a template.

## copier.yml variables

| Variable | Type | Meaning |
|----------|------|---------|
| `name` | str | Project name (kebab-case). Default: destination directory name. |
| `description` | str | Optional project description. Default: `""`. |
| `type` | str | `worker`, `sveltekit`, or `library`. |
| `tailwind` | bool | Only asked when `type != 'worker'`. |
| `svelte_m3c` | bool | Only asked when `tailwind` is true. |
| `tests` | bool | Include Vitest (and `@cloudflare/vitest-pool-workers` for workers). |
| `browser_tests` | bool | Only asked when `type != 'worker'`. Adds `@vitest/browser-playwright` + Playwright. |
| `_svelte` | computed | `type in ['sveltekit', 'library']`. Used in template conditionals. |

## Important conventions

- **pnpm 11.2.2** in generated projects (set in `packageManager` field).
- **NodeNext** module resolution for svelte projects; **bundler** for workers.
- **Prettier**: 4-space indent, double quotes, trailing commas all. YAML uses 2-space tabs.
- **ESLint**: `typescript-eslint` strict + `perfectionist/recommended-alphabetical`. Use `// @sort` comments to partition sorting.
- **Svelte**: All `.svelte` files must use `<script lang="ts">` (enforced by `svelte/block-lang`).
- **Wrangler**: `not_found_handling: "none"` (not `"404-page"`). Observability logs and traces are explicitly enabled.
- **Worker tests** use `@cloudflare/vitest-pool-workers` with a `vitest.config.ts` (not `.mts`).
- **Svelte tests** use plain Vitest with `tests/setup.ts` and `tests/dummy.test.ts`.
- **`worker-configuration.d.ts`** is gitignored and auto-generated via `wrangler types`.
- All generated projects are **GPL-3.0-or-later**.

## Common edits

- To add/remove a conditional file: rename it to include/exclude a Jinja condition in the path. See existing files for the pattern.
- To add a new question: define it in `copier.yml`, then reference it in `.jinja` files.
- To change defaults or validation: edit `copier.yml`.
- **Never** manually edit `.copier-answers.yml` in generated projects.

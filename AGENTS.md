# AGENTS.md

This is a [Copier](https://copier.readthedocs.io/) template repository that
generates project scaffolding for several project types:
`general`, `python`, `worker`, `sveltekit`, and `svelte-library`.

**This repo itself is not a runnable project** — there is no root `package.json`
and no build step here.

## How the templates work

- **`copier.yml`** at root defines questions, computed values, and settings.
- **`_subdirectory: "{{ project_type }}"`** means Copier renders files from the
  chosen template directory into the generated project.
- Files ending in `.jinja` are processed by Jinja. Plain files are copied as-is.
- **Conditional filenames** use Jinja:
  `{% if cli %}src/{{ name | replace('-', '_') }}/cli.py{% endif %}.jinja`.
  When the condition is false, Copier skips that file entirely.
- The `.jinja` suffix **must** appear outside any Jinja condition in filenames,
  otherwise Copier will not recognize the file as a template.
- This repo intentionally duplicates shared boilerplate across templates so that
  generated projects remain independent and easy to evolve separately. Do **not**
  add symlinks or sync scripts between template directories.

## copier.yml variables

| Variable | Type | Meaning |
|----------|------|---------|
| `name` | str | Project name (kebab-case). Default: destination directory name. |
| `description` | str | Project description. |
| `project_type` | str | `general`, `python`, `worker`, `sveltekit`, or `svelte-library`. |
| `tailwind` | bool | Only for Svelte templates. |
| `svelte_m3c` | bool | Only when `tailwind` is true. |
| `cli` | bool | Only for `python`. |
| `tests` | bool | Only for `worker`, `sveltekit`, `svelte-library`. |
| `browser_tests` | bool | Only when `tests` is true for Svelte templates. |

## Important conventions

- **pnpm 11.2.2** in generated Node/TypeScript projects (`packageManager`).
- **NodeNext** module resolution for Svelte projects; **bundler** for workers.
- **Prettier**: 4-space indent, double quotes, trailing commas all. YAML 2-space.
- **ESLint**: `typescript-eslint` strict + `perfectionist/recommended-alphabetical`.
- **Svelte**: All `.svelte` files must use `<script lang="ts">`.
- **Wrangler**: `not_found_handling: "none"`, observability enabled,
  `build.command: "pnpm build"`, empty `previews`, `upload_source_maps: true`.
- **Python**: `>=3.13`, `uv`, `tox`, `ruff`, `pyright`, `pytest`.
- **CI/CD**: Node templates use the shared `.github/actions/setup-project`
  composite action. Python and general templates use their own lightweight
  workflows.
- **Worker tests** use `@cloudflare/vitest-pool-workers` with `vitest.config.ts`.
- **Svelte tests** use plain Vitest with `tests/setup.ts` and `tests/dummy.test.ts`.
- **`worker-configuration.d.ts`** is gitignored and auto-generated via `wrangler types`.
- All generated projects are **GPL-3.0-or-later**.
- Generated projects use **Renovate** for dependency automation.

## Common edits

- To add/remove a conditional file: rename it to include/exclude a Jinja
  condition in the path. See existing files for the pattern.
- To add a new question: define it in `copier.yml`, then reference it in
  `.jinja` files under the relevant template directory.
- To change defaults or validation: edit `copier.yml`.
- **Never** manually edit `.copier-answers.yml` in generated projects.

# psy3

Russian-language website for psychologist Nikita Nechaev, built with React, Vite, and Tailwind CSS v4.

Use Node 22 and pnpm 10.34.3, as pinned in `.mise.toml`.

## Local development

From the repository root:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:8443` and leave the terminal running. `PORT` overrides the default port.

## Validation and production preview

```bash
pnpm exec tsc --noEmit
pnpm build
pnpm preview
```

For the GitHub Pages project path:

```bash
pnpm build --base /psy3/
pnpm preview --base /psy3/
```

Open `http://localhost:8443/psy3/` for that preview. Stop the development server first, or pass `--port 8444` to the preview command.

## Deployment

Set the repository's Settings → Pages → Source to **GitHub Actions**. Pushing to `main` runs `.github/workflows/pages.yml`, which installs locked dependencies, checks TypeScript, builds for the Pages path, and deploys `dist/`.

Images and fonts use Git LFS. GitHub Desktop handles LFS; for a command-line checkout, install Git LFS and run `git lfs install` followed by `git lfs pull`.

Search indexing remains disabled by the existing `noindex, nofollow` metadata in `index.html` and `public/robots.txt`.

The original site design brief is in [docs/design-brief.md](docs/design-brief.md).

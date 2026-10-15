# psy3

Standalone React + Vite + Tailwind CSS website for psychologist Nikita Nechaev.

## Development Server

Run `pnpm install --frozen-lockfile` and `pnpm dev` from the repository root. Use the Node 22 and pnpm 10.34.3 versions pinned in `.mise.toml`.

- Vite uses `$PORT` when set and defaults to 8443. Verify whether a server is already running before starting another.
- Hot reload reflects source changes immediately.
- Validate changes with `pnpm build` and `pnpm exec tsc --noEmit`.
- GitHub Pages builds and deploys through `.github/workflows/pages.yml`. Use `pnpm build --base /psy3/` to check the project-path build locally.

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Primary application component and the usual starting point for UI work
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `index.html` - Russian-language HTML shell, page metadata, `#root` element, and `src/main.tsx` entrypoint
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Standard React and Tailwind CSS v4 plugins, the `@` alias for `src`, and development/preview ports
- `public/robots.txt` - Allows search crawling and declares the sitemap URL
- `public/sitemap.xml` - Lists the canonical homepage for search engines
- `public/favicon_io/` - Browser icons, Apple touch icon, and web manifest
- `docs/design-brief.md` - Original visual and content brief
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`. This scaffold does not need a Tailwind config file or PostCSS config.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.

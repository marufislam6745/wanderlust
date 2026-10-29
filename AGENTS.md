<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

"Wanderlust" — early-stage travel-booking frontend (destinations, bookings, admin, auth pages; most routes referenced in `src/components/Nav.tsx` don't exist yet). Single Next.js 16 App Router app under `src/`: routes in `src/app`, components in `src/components`, helpers in `src/lib`. No backend, database, tests, or CI yet.

## Commands

- `npm run dev` — Turbopack dev server; also regenerates the agent-rules block above
- `npm run build` / `npm run start`
- `npm run lint` — ESLint flat config; lints the whole repo (takes no file args)
- No typecheck script exists; use `npx tsc --noEmit`

## Configured Next.js features (see `next.config.ts`)

- `cacheComponents: true` — new caching model; read `node_modules/next/dist/docs/cache-components.md` before adding data fetching or using `cookies`/`headers`
- `reactCompiler: true` — React Compiler runs; don't add manual `useMemo`/`useCallback` optimizations
- `partialPrefetching: true`
- Tailwind CSS v4 via the Turbopack `@tailwindcss/turbopack` loader. There is no `tailwind.config.*`; all theme tokens are CSS variables in `src/app/globals.css` (`@theme inline`). Do not add a Tailwind v3 config.

## UI stack

- shadcn components, `base-nova` style on `@base-ui/react` primitives — **not Radix** (`components.json`). Add new ones with `npx shadcn add <component>` into `src/components/ui/`.
- `cn` is the `cn` npm package, re-exported from `src/lib/utils.ts` — do not replace it with the usual clsx + tailwind-merge implementation.
- Path alias `@/*` → `./src/*`.
- Static marketing images live in `public/assets/`.

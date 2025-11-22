# Game Popularity Data Hub (Next.js)

Full-stack dashboards now live in a single Next.js 15 app router project so both UI and API routes share one codebase.

## Requirements
- Node.js 20+ with npm (install from [nodejs.org](https://nodejs.org/en/download)).
- VS Code with the official ESLint and Tailwind CSS extensions for inline linting.

## Setup & Scripts
```bash
npm install              # install workspace deps
npm run dev              # start local dev server on http://localhost:3000
npm run lint             # lint using the shared ESLint config
npm run build && npm start  # production build + preview (optional)
```

## Data Workflow
- Keep offline CSV sources inside `data/private/`. Real CSV/TSV files are ignored by git; the folder ships with a `.gitkeep` placeholder so the structure is always present.
- Use the utility in `src/lib/csv.ts` to read a file server-side:
  ```ts
  import {readCsv} from "@/lib/csv";

  export const getTopGames=async ()=>{
    const rows=await readCsv("top_games.csv");
    return rows;
  };
  ```
- Because this runs in the Next.js server context, you can call `readCsv` from Server Components, Server Actions, or API route handlers without exposing file paths to the browser.

## API Surface
- `src/app/api/health/route.ts` responds with `{status:"ok"}` so you can sanity-check deployments or uptime monitors.
- Add additional files under `src/app/api/*` to proxy Twitch, Steam, or social APIs for live metrics. Those routes live alongside the UI so they share the same environment variables.

## UI Entry
- `src/app/page.tsx` contains a Jarvis-styled mission brief describing the CSV + API layers you will build next.
- Tailwind CSS (configured via `postcss.config.mjs` and `tailwind.config.ts`) powers layouts and theming for upcoming charts.

## Next Steps
1. Drop example CSVs (e.g., Twitch viewership snapshots) into `data/private/` and build a route that reads them with `readCsv`.
2. Scaffold chart components inside `src/app/(routes)` using your preferred visualization library.
3. Introduce API fetchers for Twitch/Steam so real-time pulses sit next to the offline aggregates.

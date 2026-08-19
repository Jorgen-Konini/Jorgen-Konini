# Portfolio website

One-page portfolio built with Next.js (static export), deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
```

## Editing content

All copy lives in [`lib/data.ts`](lib/data.ts) — experience, projects, skills, links.
The experience dates are placeholders (`20XX — 20XX`) — fill in the real ones there.

## CV download

The "Download CV" buttons link to `/cv.pdf`. Drop your CV at `public/cv.pdf`
(create the `public/` folder if needed) and it will be served automatically.

## Deploying

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push
to `main`. One-time setup: in the repo's **Settings → Pages**, set **Source** to
**GitHub Actions**. The site is then served at
`https://jorgen-konini.github.io/Jorgen-Konini/`.

To serve it at `https://jorgen-konini.github.io/` instead, move this code to a
repo named `jorgen-konini.github.io` and remove the `NEXT_PUBLIC_BASE_PATH` env
var from the workflow.

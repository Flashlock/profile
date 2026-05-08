# Austin Betts - Profile Site

Personal portfolio site for Austin Betts. Built with **React + Vite + TypeScript**, **MUI Joy**, and **Framer Motion**. Deployed to **GitHub Pages** via GitHub Actions on pushes to `master`.

## Local development

```bash
npm install
npm run dev
```

## Build / preview

```bash
npm run build
npm run preview
```

## Deployment notes (GitHub Pages)

- Workflow: [`/.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- Vite base path: [`/vite.config.ts`](vite.config.ts) uses `/` for local dev and `/profile/` for production builds
  - This assumes the repo is named **`profile`** and will deploy at `https://<user>.github.io/profile/`
- In GitHub repo settings -> Pages, set source to **GitHub Actions**

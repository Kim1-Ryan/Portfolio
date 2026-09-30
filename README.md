# Kim Ryan Portfolio

React with plain JavaScript, JSX components, and regular CSS. Built with Vite.

## Run

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Publish the `dist` folder to a static host. The build includes both the portfolio and playground pages and supports subfolder hosting.

## GitHub Pages

In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**. Commit and push `.github/workflows/deploy.yml` to `main`. The workflow installs dependencies, builds both pages, and publishes only `dist` at https://kim1-ryan.github.io/Portfolio/.

Every subsequent push to `main` deploys automatically. You can also run **Deploy portfolio to GitHub Pages** manually from the Actions tab. Do not publish the repository root: its HTML points to JSX source that needs Vite to compile it first.

## Project structure

- `src/main.jsx` mounts React.
- `src/App.jsx` selects the portfolio or playground page.
- `src/components/` contains the page sections, header and footer.
- `src/styles.css` contains the shared responsive styles.
- `public/images/` contains project screenshots and optimised WebP copies.
- `previous-static/` preserves the static pages from before the React conversion.

Edit project links in SelectedWork.jsx and Playground.jsx. Edit contact details in Contact.jsx and Playground.jsx.

The root HTML files are Vite entry points. Use the development server rather than opening them directly from the filesystem. Existing live projects and contact destinations are preserved. Google Fonts have system fallbacks.

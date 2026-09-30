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

## Project structure

- `src/main.jsx` mounts React.
- `src/App.jsx` selects the portfolio or playground page.
- `src/components/` contains the page sections, header and footer.
- `src/styles.css` contains the shared responsive styles.
- `public/images/` contains project screenshots and optimised WebP copies.
- `previous-static/` preserves the static pages from before the React conversion.

Edit project links in SelectedWork.jsx and Playground.jsx. Edit contact details in Contact.jsx and Playground.jsx.

The root HTML files are Vite entry points. Use the development server rather than opening them directly from the filesystem. Existing live projects and contact destinations are preserved. Google Fonts have system fallbacks.

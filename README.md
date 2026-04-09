# Golden Stallion AI

React/Vite front end for the HKJC race intelligence dashboard.

## Stack

- React 19
- Vite
- Tailwind CSS v4 with `@tailwindcss/postcss`
- `react-router-dom`
- Radix Dialog and Accordion
- Swiper
- Custom UI primitives in `src/components/ui`

## Project Layout

- `src/Layout.jsx` shared shell and navigation
- `src/pages/*` route-level pages
- `src/components/ui/*` reusable UI primitives
- `src/components/racing/*` race-card components
- `src/data/mockData.js` temporary front-end data until the backend is rebuilt
- `legacy-python-prototype/` original Streamlit/Python/Node app and CSV data

## Commands

```bash
npm install
npm run dev
npm run build
```

The backend is intentionally deferred. The current UI uses stable mock data with the same broad shape as the old scraper output.

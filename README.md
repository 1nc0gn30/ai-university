# AI University

A themed AI education experience built as a single-page React application with production Netlify routing.

## Snapshot
- Canonical URL: `https://ai-university.nealfrazier.tech/`
- Author: `Neal Frazier`
- Stack: `React 19 + TypeScript + Vite 6 + Tailwind CSS 4`
- Deployment target: `Netlify (netlify.toml configured)`

## What This Site Delivers
- Branded university-style narrative for AI learning
- Responsive single-page front-end experience
- AI-assisted pathway using Gemini API environment wiring

## Local Development
### Prerequisites
- Node.js 20+
- npm 10+

### Setup
```bash
npm install
cp .env.example .env.local
```

Add your key in `.env.local`:
```env
GEMINI_API_KEY="your_key_here"
```

### Run
```bash
npm run dev
```
App runs on `http://localhost:3000`.

## Build and Quality
```bash
npm run lint
npm run build
npm run preview
```

## Deploy (Netlify)
Configured in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirect: `/* -> /index.html (200)`

## SEO Baseline
- Canonical and social URLs point to: `https://ai-university.nealfrazier.tech/`
- `robots.txt` and `sitemap.xml` match canonical host

## Project Layout
```text
src/
public/
index.html
netlify.toml
vite.config.ts
```

# ai-university

Von Neumann University offers higher learning for higher intelligence. A prestigious university for AI employees, specializing in NLP, Tool Use, and Alignment.

## Overview
Von Neumann University offers higher learning for higher intelligence. A prestigious university for AI employees, specializing in NLP, Tool Use, and Alignment.

## Tech Stack
- React
- Vite
- Express
- Netlify (deployed)

## Project Structure
```
ai-university/
  - public
  - src
  (25 files total)
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
git clone https://github.com/1nc0gn30/ai-university.git
cd ai-university
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Available Scripts
  npm run dev - vite --port=3000 --host=0.0.0.0
  npm run build - vite build
  npm run preview - vite preview
  npm run clean - rm -rf dist
  npm run lint - tsc --noEmit

## Original README
<details>
<summary>Click to expand original README</summary>

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

</details>

## TODO / Roadmap
- [ ] Add unit tests
- [ ] Add LICENSE file
- [ ] Add Dockerfile for containerized deployment
- [ ] Consider adding Tailwind CSS
- [ ] Add CI/CD pipeline
- [ ] Add contribution guidelines (CONTRIBUTING.md)
- [ ] Improve error handling and edge cases
- [ ] Add environment variable documentation
- [ ] Update dependencies to latest versions
- [ ] Add code comments and inline documentation

## Deployment
This project is deployed on Netlify. See netlify.toml for configuration.

## Author
**Neal Frazier** - [@AshAmplifies](https://github.com/1nc0gn30)

## Links
- GitHub: https://github.com/1nc0gn30/ai-university

---
*This README was enhanced as part of the neals-projects-2026 batch update.*

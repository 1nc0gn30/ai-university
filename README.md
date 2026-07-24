<!-- xonettn -->
<div align="center">

# 🤖 AI University

A themed AI education experience built as a single-page React application with production Netlify routing.


![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)

![Deploy](https://img.shields.io/badge/Deployed-Netlify-00C7B7?logo=netlify&logoColor=white)

</div>

---

## Snapshot
- Canonical URL: `https://ai-university.nealfrazier.tech/`
- Author: `Neal Frazier`
- Stack: `React 19 + TypeScript + Vite 6 + Tailwind CSS 4`
- Deployment target: `Netlify (netlify.toml configured)`

## What This Site Delivers
- Branded university-style narrative for AI learning
- Responsive single-page front-end experience
- AI-assisted pathway using Gemini API environment wiring

## 💻 Local Development
### 📋 Prerequisites
- Node.js 20+
- npm 10+

### ⚙️ Setup
```bash
npm install
cp .env.example .env.local
```

Add your key in `.env.local`:
```env
GEMINI_API_KEY="your_key_here"
```

### 🚀 Run
```bash
npm run dev
```
App runs on `http://localhost:3000`.

## 🔨 Build and Quality
```bash
npm run lint
npm run build
npm run preview
```

## 🚀 Deploy (Netlify)
Configured in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirect: `/* -> /index.html (200)`

## 🔍 SEO Baseline
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

---

<div align="center">

**[xonettn]** · Built by [Neal Frazier](https://github.com/1nc0gn30) · [@AshAmplifies](https://twitter.com/AshAmplifies)

</div>

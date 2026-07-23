# 🌟 Ashfeer K A — Professional Portfolio Website

A world-class, fully responsive portfolio website built with **React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion**.

---

## 🚀 Live Preview

Open [http://localhost:3003](http://localhost:3003) during development.

---

## 📁 Project Structure

```
PORTFOLIO/
├── public/
│   ├── favicon.svg          # Custom gradient favicon
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt           # SEO robots
│   └── resume.pdf           # ← REPLACE WITH YOUR RESUME PDF
├── src/
│   ├── config/
│   │   └── portfolio.config.ts  ← EDIT THIS FILE TO UPDATE CONTENT
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── SoftwarePortfolio.tsx
│   │   │   ├── GitHub.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── Resume.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── SectionWrapper.tsx
│   │       ├── TypewriterText.tsx
│   │       ├── AnimatedCounter.tsx
│   │       ├── SkillBar.tsx
│   │       ├── ProjectCard.tsx
│   │       └── ThemeToggle.tsx
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useGitHub.ts
│   │   └── useScrollSpy.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## ✏️ How to Update Content

**All personal data is in ONE file:** `src/config/portfolio.config.ts`

You can edit:
- Personal info (name, title, bio, email, phone, location)
- Social links (GitHub, LinkedIn)
- Skills (name, category, proficiency level)
- Work experience
- Projects
- Software portfolio items
- Education
- Certifications
- SEO settings (title, description, keywords)
- Contact form endpoint

**No React knowledge needed to update content!**

---

## 🖼️ Adding Your Profile Photo

1. Replace the `avatar` URL in `personalInfo` in `portfolio.config.ts`
2. Or place a photo at `public/photo.jpg` and set `avatar: '/photo.jpg'`

---

## 📄 Adding Your Resume PDF

1. Place your resume PDF file at: `public/resume.pdf`
2. The "Download Resume" button will automatically serve it.

---

## 🔧 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to Netlify
```

### GitHub Pages
```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

---

## 📬 Contact Form Setup

The contact form uses **mailto fallback** by default.

For a proper backend form:
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and copy the endpoint URL
3. Paste it in `portfolio.config.ts` → `contactConfig.formspreeEndpoint`

---

## 🎨 Customizing the Design

Edit `src/index.css` to change:
- Color palette (CSS custom properties at the top)
- Typography
- Animation speeds

---

## 🌙 Dark / Light Mode

Toggle is in the navbar. Theme preference is saved to `localStorage` and persists between visits.

---

## 📊 GitHub Section

The GitHub section fetches **live data** from the GitHub API on every page load.
- Username: `ashfeerka007-netizen`
- Change in `portfolio.config.ts` → `githubConfig.username`

---

## 📱 PWA Support

The site is PWA-ready with:
- `public/manifest.json` 
- Offline caching (add a service worker for full offline support)

---

## ✅ Features Checklist

- [x] Dark / Light mode with persistence
- [x] Fully responsive (320px → 4K)
- [x] Animated hero with canvas particles
- [x] Typewriter cycling text
- [x] Animated skill progress bars
- [x] Live GitHub data
- [x] Language pie chart (Recharts)
- [x] Software portfolio split-panel view
- [x] Contact form with validation
- [x] SEO optimized (meta tags, Open Graph, JSON-LD)
- [x] PWA manifest
- [x] Smooth scroll navigation
- [x] Active section highlighting
- [x] Sticky glassmorphism navbar
- [x] Framer Motion animations throughout
- [x] Admin config file (no-code content updates)

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18 | UI Framework |
| TypeScript | 5 | Type Safety |
| Vite | 8 | Build Tool |
| Tailwind CSS | 4 | Styling |
| Framer Motion | Latest | Animations |
| Lucide React | Latest | Icons |
| Recharts | Latest | Charts |
| react-type-animation | Latest | Typewriter |
| react-countup | Latest | Number Counters |
| react-helmet-async | Latest | SEO |

---

## 👤 Author

**Ashfeer K A**  
📧 ashfeerka@gmail.com  
🐙 [github.com/ashfeerka007-netizen](https://github.com/ashfeerka007-netizen)  
💼 [linkedin.com/in/ashfeerka](https://linkedin.com/in/ashfeerka)

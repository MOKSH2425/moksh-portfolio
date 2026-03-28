# ✨ Moksh Shah — Portfolio v3

**Stack:** Next.js 14 · CSS Modules · GSAP · Dark Gradient / Premium Purple

---

## 🚀 Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## 🗂 Structure

```
app/
  layout.js          → Root layout + SEO meta
  page.js            → Assembles all sections
  globals.css        → Reset, utilities, keyframes

components/
  Navbar/            → Sticky glass navbar, scroll spy, mobile drawer
  Hero/              → Gradient mesh, typewriter, stats, socials
  About/             → Bio, photo card, info chips
  Skills/            → Glass skill cards
  Projects/          → 3D tilt cards, featured layout
  Education/         → Animated timeline
  Contact/           → Info card + clean form
  Footer/            → Brand, nav links, contact
  ui/SectionBadge/   → Reusable pill badge

constants/
  index.js           → ALL data (nav, skills, projects, education, socials)

hooks/
  useGSAP.js         → useReveal + useRevealEl scroll hooks
  useTypewriter.js   → Typewriter effect

styles/
  variables.css      → All design tokens
```

---

## ✏️ Personalise

| What              | Where                       |
|-------------------|-----------------------------|
| All content/data  | `constants/index.js`        |
| Typed roles       | `hooks/useTypewriter.js`    |
| Colors            | `styles/variables.css`      |
| SEO               | `app/layout.js`             |
| Social + GitHub links | `constants/index.js` → `SOCIALS` |

---

## 🖼 Add Your Photo

1. Add photo → `public/assets/img/moksh.jpg`
2. In `About.jsx` replace `photoInner` div with:
```jsx
<img src="/assets/img/moksh.jpg" alt="Moksh Shah" className={styles.photo} />
```
3. Add to `About.module.css`:
```css
.photo { width:100%; height:100%; object-fit:cover; border-radius:var(--radius-lg); }
```

---

## 📬 Wire up Contact Form (Formspree)

1. Sign up at [formspree.io](https://formspree.io) → copy your Form ID
2. In `Contact.jsx`, replace the fake timeout with:
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(Object.fromEntries(new FormData(formRef.current))),
});
setStatus(res.ok ? 'sent' : '');
```

---

## 🌐 Deploy

```bash
# Vercel (recommended)
npx vercel

# or push to GitHub → connect at vercel.com (zero config)
```

---

Made with 💜 by **Moksh Shah** · shahmoksh7@gmail.com · Surat, India

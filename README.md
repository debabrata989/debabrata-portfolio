# Debabrata Malik - Developer Portfolio

A production-grade, highly animated, and fully responsive personal portfolio website designed for campus placements, HRs, recruiters, and technical interviewers.

Built with **React 19**, **Vite**, **Framer Motion**, and **Custom Vanilla CSS (Design Tokens)**.

---

## 🚀 1. How to Run Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://127.0.0.1:5173/`

3. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in `dist/`.

4. **Lint code**:
   ```bash
   npm run lint
   ```

---

## 📝 2. How to Edit Personal Information

All portfolio content is separated into structured data files inside `src/data/`. You never need to modify JSX markup to update your text!

- **Name, Tagline, Bio, Roles, Academic Status**:
  - File: [`src/data/personalInfo.js`](file:///d:/Antigravity/PORTFOLIO%202/src/data/personalInfo.js)
  - Update `name`, `tagline`, `shortBio`, `roles`, `stats`, and `principles`.

- **Social Profiles & Contact Info**:
  - File: [`src/data/socialLinks.js`](file:///d:/Antigravity/PORTFOLIO%202/src/data/socialLinks.js)
  - Update your GitHub, LinkedIn, and email address.

- **Skills & Proficiencies**:
  - File: [`src/data/skills.js`](file:///d:/Antigravity/PORTFOLIO%202/src/data/skills.js)
  - Add or update skills in Frontend, Backend, Databases, Programming, Tools, and AI/ML.

- **Internship & Experience**:
  - File: [`src/data/experience.js`](file:///d:/Antigravity/PORTFOLIO%202/src/data/experience.js)
  - Update or add work experiences, roles, CTTC details, and accomplishments.

- **Education**:
  - File: [`src/data/education.js`](file:///d:/Antigravity/PORTFOLIO%202/src/data/education.js)
  - Update GIET Bhubaneswar and Bhadrak Autonomous College dates or CGPA/marks if desired.

- **Certifications**:
  - File: [`src/data/certifications.js`](file:///d:/Antigravity/PORTFOLIO%202/src/data/certifications.js)

---

## 💼 3. How to Add or Edit Projects

- Open [`src/data/projects.js`](file:///d:/Antigravity/PORTFOLIO%202/src/data/projects.js).
- Each project object has:
  ```javascript
  {
    id: "project-slug",
    title: "Project Title",
    subtitle: "Quick Subtitle",
    category: "Full Stack / MERN / AI",
    featured: true,
    summary: "Brief recruiter summary...",
    description: "Detailed architecture description...",
    tags: ["React.js", "Node.js", "MongoDB"],
    highlights: ["Feature 1", "Feature 2"],
    metrics: "Impact metric",
    github: "https://github.com/DebabrataMalik/repo-name",
    demo: "https://your-demo-url.com",
    accentColor: "#06b6d4"
  }
  ```
- Simply update the `github` and `demo` URLs with your real links once published!

---

## 📄 4. How to Add Your Official Resume (PDF)

- A placeholder PDF is located at:
  [`public/resume.pdf`](file:///d:/Antigravity/PORTFOLIO%202/public/resume.pdf)
- To replace it with your official PDF resume:
  1. Rename your official resume file to `resume.pdf`.
  2. Drop it into the `public/` folder, replacing `public/resume.pdf`.
  3. That's it! Every "Download Resume" button across the navbar, hero, CTA banner, and terminal will immediately serve your official resume.

---

## 🌐 5. How to Deploy to Netlify / Vercel

### Deploying to Vercel (Recommended):
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio for placement season"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `PORTFOLIO 2` repository.
4. Settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. Your portfolio will be live with an SSL certificate within 30 seconds!

### Deploying to Netlify:
1. Go to [netlify.com](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Select your GitHub repository.
3. Build Settings:
   - Base directory: (leave blank)
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy Site**.

---

## 📱 Features Summary

- **100% Responsive**: Tailored for Mobile, Tablet, Laptop, and 4K screens.
- **Accessible (a11y)**: Keyboard navigation, high contrast ratios, `prefers-reduced-motion` compliance.
- **Interactive Terminal**: CLI simulator for recruiters with commands (`help`, `bio`, `skills`, `projects`, `contact`, `experience`, `clear`).
- **Interactive Project Modal**: In-depth architecture review with ESC to close.
- **Zero Console Errors**: Checked with `oxlint` (0 warnings, 0 errors).

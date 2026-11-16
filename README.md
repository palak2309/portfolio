# Palak Pathan — Developer Portfolio Website

A modern, responsive, and production-ready personal developer portfolio built for **Palak Pathan**, a final-year B.Sc. Computer Science student at Christ College, Pune (Savitribai Phule Pune University).

Designed specifically for technology company recruitment for roles such as:
- **Software Developer / Software Engineer Trainee** (e.g. Spektra Systems)
- **Python Developer**
- **AI Application Developer**
- **Web Developer**
- **Data Analyst / Power BI Developer**
- **Blockchain Developer Trainee**

---

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS (custom dark navy & purple/electric-blue design system)
- **Icons:** Lucide React & Handcrafted SVGs
- **Build Tool:** Vite 5
- **Performance:** Optimized chunks, Zero runtime CSS bloat, Accessible semantic HTML

---

## Environment Variables (.env)

The application supports typed environment variables through Vite (`import.meta.env`). All environment variables exposed to the client must start with the `VITE_` prefix.

An example configuration file is provided in [`.env.example`](.env.example).

| Variable | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `VITE_WEB3FORMS_ACCESS_KEY` | string | `""` | Optional API key from [Web3Forms](https://web3forms.com) to receive contact messages directly via AJAX. If empty, the form automatically falls back to the native email client composer. |
| `VITE_LINKEDIN_URL` | string | `""` | When provided (e.g. `https://linkedin.com/in/palak-pathan`), automatically turns all LinkedIn buttons into direct external links instead of the informational placeholder modal. |
| `VITE_RESUME_URL` | string | `/Palak_Pathan_Resume.pdf` | Path or CDN URL to candidate resume PDF. |
| `VITE_GITHUB_URL` | string | `https://github.com/palak2309` | GitHub profile URL. |
| `VITE_CONTACT_EMAIL` | string | `palakpathan23@gmail.com` | Primary contact email address. |
| `VITE_CONTACT_PHONE` | string | `+91 9763333321` | Contact phone number. |

### How to use locally:
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and fill in any custom values.

### How to set on Vercel:
1. In your Vercel project dashboard, go to **Settings** > **Environment Variables**.
2. Add `VITE_WEB3FORMS_ACCESS_KEY` (and any other optional variables).
3. Redeploy your project.

---

## Project Structure

```text
palak-portfolio/
├── .env.example              # Template for environment variables
├── .env                      # Local environment configuration (ignored by git)
├── public/
│   ├── favicon.svg           # Custom monogram vector favicon
│   ├── documents/            # Authentic PDF documents for patent & credentials
│   │   ├── Patent_Registration_Certificate_476212-001.pdf
│   │   ├── Patent_Office_Journal_Publication_44-2026.pdf
│   │   └── Design_Patent_Representation_Sheets.pdf
│   ├── images/               # High-resolution project & document screenshots
│   │   ├── patent-certificate.png
│   │   ├── patent-journal-page2.png
│   │   ├── patent-perspective-view.png
│   │   ├── smart_metro_star_schema.jpg
│   │   ├── autoaudit-dashboard.png
│   │   └── tokenestate-app.png
│   ├── Palak_Pathan_Resume.pdf          # Official uploaded resume PDF
│   └── Resume.pdf                       # Canonical fallback
├── src/
│   ├── config/
│   │   └── portfolioData.ts  # Master configuration (consumes env vars + fallbacks)
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky header with active scroll observer
│   │   ├── Hero.tsx          # High-impact recruitment hero section
│   │   ├── About.tsx         # Grounded background & project domains
│   │   ├── Skills.tsx        # Categorized skills (no fake progress bars)
│   │   ├── Projects.tsx      # Featured systems, prototypes & 3D carousel
│   │   ├── Achievements.tsx  # Design Patent & Document Carousel with modal lightbox
│   │   ├── Certifications.tsx# Credly verified credentials
│   │   ├── Education.tsx     # B.Sc. CS details & core coursework
│   │   ├── Contact.tsx       # Contact details & functional form
│   │   ├── Footer.tsx        # Navigation, credits & legal disclosures
│   │   ├── ResumeModal.tsx   # Direct download & preview modal
│   │   ├── LinkedInModal.tsx # Transparent LinkedIn placeholder modal
│   │   └── SocialIcons.tsx   # Semantic vector icons
│   ├── vite-env.d.ts         # TypeScript typing declarations for env variables
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Entry point
│   └── index.css             # Tailwind layers and custom utilities
├── index.html                # SEO tags, OpenGraph metadata, Google Fonts
├── package.json              # Scripts and dependencies
├── tailwind.config.js        # Custom color themes and glow effects
├── tsconfig.json             # TypeScript compiler configuration
└── vite.config.ts            # Vite bundler configuration
```

---

## Local Development Instructions

### 1. Prerequisites
Ensure you have **Node.js** (v18 or newer) installed.

### 2. Navigate to Project Directory
```powershell
cd "C:\Users\Palak Pathan\.gemini\antigravity\scratch\palak-portfolio"
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 5. Build for Production
```bash
npm run build
```
The compiled, minified bundle will be generated in the `dist/` directory.

---

## How to Deploy on Vercel

### Method 1: Using the Vercel Dashboard (Recommended)
1. Push this folder to a GitHub repository on your GitHub account (`https://github.com/palak2309/portfolio`).
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and select your repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. (Optional) In **Environment Variables**, add `VITE_WEB3FORMS_ACCESS_KEY` if you want direct inbox forwarding.
6. Click **"Deploy"**. Your portfolio will be live with free SSL in less than 60 seconds!

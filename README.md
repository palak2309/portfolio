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

## 🚀 Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS (custom dark navy & purple/electric-blue design system)
- **Icons:** Lucide React & Handcrafted SVGs
- **Build Tool:** Vite 5
- **Performance:** Optimized chunks, Zero runtime CSS bloat, Accessible semantic HTML

---

## 📁 Project Structure

```text
palak-portfolio/
├── public/
│   ├── favicon.svg               # Custom monogram vector favicon
│   ├── images/
│   │   └── smart_metro_star_schema.jpg  # Kimball Star Schema deliverable
│   └── resume.pdf                # (Place your final PDF here)
├── src/
│   ├── config/
│   │   └── portfolioData.ts      # Centralized, strictly-typed configuration
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header with active scroll observer
│   │   ├── Hero.tsx              # High-impact recruitment hero section
│   │   ├── About.tsx             # Grounded background & project domains
│   │   ├── Skills.tsx            # Categorized skills (no fake progress bars)
│   │   ├── Projects.tsx          # Featured systems, prototypes & modals
│   │   ├── Certifications.tsx    # Credly verified credentials
│   │   ├── Education.tsx         # B.Sc. CS details & core coursework
│   │   ├── Contact.tsx           # Contact details & functional form
│   │   ├── Footer.tsx            # Navigation, credits & legal disclosures
│   │   ├── ResumeModal.tsx       # Configurable download & email request modal
│   │   ├── LinkedInModal.tsx     # Transparent LinkedIn placeholder modal
│   │   └── SocialIcons.tsx       # Semantic vector icons
│   ├── App.tsx                   # Root component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Tailwind layers and custom utilities
├── index.html                    # SEO tags, OpenGraph metadata, Google Fonts
├── package.json                  # Scripts and dependencies
├── tailwind.config.js            # Custom color themes and glow effects
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite bundler configuration
```

---

## 🛠️ Local Development Instructions

### 1. Prerequisites
Ensure you have **Node.js** (v18 or newer) installed.

### 2. Navigate to Project Directory
```powershell
cd "C:\Users\Palak Pathan\.gemini\antigravity\scratch\palak-portfolio"
```

### 3. Install Dependencies (if not already installed)
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Build for Production
```bash
npm run build
```
The compiled, minified bundle will be generated in the `dist/` directory.

---

## 🌐 How to Deploy on Vercel

### Method 1: Using the Vercel Dashboard (Recommended)
1. Push this folder to a GitHub repository on your GitHub account (`https://github.com/palak2309/portfolio`).
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and select your repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Your portfolio will be live with free SSL in less than 60 seconds!

### Method 2: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## ⚙️ Configuration & Customization

All personal details, project links, contact settings, and credentials are intentionally centralized in `src/config/portfolioData.ts`:

1. **Adding Your Resume:**
   - Drop your finalized resume PDF into `public/resume.pdf`.
   - The "Download Resume" buttons across the site will automatically download this file.
2. **Adding LinkedIn Profile:**
   - Once your LinkedIn profile is ready, open `src/config/portfolioData.ts` and set your LinkedIn URL or update the modal.
3. **Contact Form Setup:**
   - By default, the contact form opens the user's email client with pre-filled fields.
   - To receive form submissions straight to your inbox without opening an email client:
     - Get a free key at [Web3Forms](https://web3forms.com/).
     - Paste it into `contactFormConfig.web3FormsAccessKey` in `src/config/portfolioData.ts`.
4. **Smart Metro Analytics Screenshot:**
   - Place your Power BI report screenshot into `public/images/metro-dashboard.png`.

---

## 🔒 Truthful Presentation Standards
- **No inflated titles:** Presented truthfully as a final-year B.Sc. student / aspiring developer.
- **Team attribution:** AutoAudit and TokenEstate clearly cite collaborative team scope.
- **Regulatory disclaimer:** TokenEstate explicitly states MVP/prototype status for demonstration purposes only.
- **No fake skill bars:** Skills are represented as clean technology tags without arbitrary proficiency percentages.

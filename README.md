# NRI Construction & Fabrication

![NRI Construction & Fabrication](public/logos/logo.png)

A modern, high-performance web application for **NRI Construction & Fabrication**, an Australian owned and fully integrated development, construction, and property maintenance contractor. 

Built with industry-leading technologies to ensure blazing-fast performance, perfect SEO scores, and a beautiful, responsive user experience.

---

## 🚀 Technologies Used

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## ✨ Key Features

- **Responsive Design:** Fluid layouts that scale perfectly across mobile, tablet, and desktop viewports.
- **Modern UI/UX:** Clean, corporate aesthetic with micro-animations, glassmorphism, and a robust design system.
- **Dynamic Routing:** Next.js App router implementations for seamless transitions between pages (Home, About, Services, Projects, Contact).
- **SEO Optimized:** Comprehensive metadata integration, OpenGraph support, structured robots/sitemap setup, and semantic HTML5 structuring.
- **Performance:** Leveraging Next.js Image component, intelligent font loading, and server-side rendering for optimal Core Web Vitals.
- **Custom Theming:** Consistent design tokens matching the NRI brand identity (Navy Blue and Orange).

---

## 📂 File Structure

```text
nri-construction/
├── public/                 # Static assets (images, logos, icons)
│   ├── images/             # High-quality photography assets
│   ├── logos/              # Brand logo variations
│   └── icon.png            # Favicon
├── src/
│   ├── app/                # Next.js App Router root
│   │   ├── about/          # About page route
│   │   ├── contact/        # Contact page route
│   │   ├── projects/       # Projects portfolio route
│   │   ├── services/       # Services overview route
│   │   ├── globals.css     # Global Tailwind styles & variables
│   │   ├── layout.tsx      # Root application layout & SEO metadata
│   │   └── page.tsx        # Homepage implementation
│   ├── components/         # Reusable React components
│   │   ├── layout/         # Header, Footer, and structural components
│   │   └── ui/             # Shadcn UI primitives (Buttons, Sheets, etc.)
│   └── lib/                # Utility functions and helpers
├── .gitignore              # Git ignore rules
├── components.json         # Shadcn UI configuration
├── next.config.ts          # Next.js configuration settings
├── package.json            # Project dependencies & scripts
├── tailwind.config.ts      # Tailwind CSS theme configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🛠️ Setup Process & Local Development

To run this project locally, follow these steps:

**1. Clone the repository**
```bash
git clone https://github.com/SocialOrangeGlobal/nri-construction.git
cd nri-construction
```

**2. Install dependencies**
You can use `npm`, `yarn`, `pnpm`, or `bun`.
```bash
npm install
```

**3. Run the development server**
```bash
npm run dev
```

**4. Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

---

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server after building:

```bash
npm run start
```

---

## 📄 License

This project is proprietary and confidential. All rights reserved by NRI Construction & Fabrication.

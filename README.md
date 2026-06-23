# Sameer Saifi's Portfolio (SamX)

A modern, clean, and professional portfolio website built with Next.js 16 and Once UI. This portfolio showcases my work as a Senior Graphic Designer, featuring an MDX-based content system for projects, an about/CV page, and a gallery.

View the [demo here](https://samx.vercel.com)

![Sameer Saifi Portfolio](public/images/og/home.jpg)

## 🚀 Getting Started

### Prerequisites

- Node.js v18.17 or higher
- npm or yarn package manager

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/FarukhSaifi/samx.git
cd samx
```

**2. Install dependencies**

```bash
npm install
```

**3. Run development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

**4. Configure your portfolio**

```
src/resources/once-ui.config.ts
```

**5. Update your content**

```
src/resources/content.tsx
```

**6. Add blog posts and projects**

- Blog posts: `src/app/blog/posts/`
- Projects: `src/app/work/projects/`

## ✨ Features

### 🔍 SEO Optimized

- Automatic Open Graph and X (Twitter) image generation with `next/og`
- Automatic schema.org structured data and metadata generation

### 🎯 Design

- **Responsive Layout** for all screen sizes
- **Customizable** through [Once UI data attributes](https://once-ui.com/docs/theming)
- **Dark Mode** support

### 📝 Content Management

- **MDX Support** for projects
- **Flexible Pages** — enable or disable blog, work, gallery, and about/CV
- **Password Protection** for specific routes

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org) with App Router
- [Once UI System](https://once-ui.com)
- SCSS + CSS Modules
- MDX content
- TypeScript
- [Vercel](https://vercel.com) deployment

## 📦 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # React components
├── lib/                 # Constants, blog utilities
├── resources/           # content.tsx, once-ui.config.ts, icons.ts
└── types/               # TypeScript definitions
```

## 🔧 Configuration

Create a `.env.local` file (see `.env.example`):

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
PAGE_ACCESS_PASSWORD=your-password-here
```

## 🚀 Deployment

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) by connecting this repository.

## 👨‍💻 About Me

**Sameer Saifi** – Senior Graphic Designer

- 📍 Location: New Delhi, India
- 💼 Currently: Senior Graphic Designer at Nutcracker Communications
- 🌐 Website: [samx.vercel.com](https://samx.vercel.com)
- 📧 Email: [sameer1x9@gmail.com](mailto:sameer1x9@gmail.com)
- 💼 LinkedIn: [md-sameer-saifi](https://www.linkedin.com/in/md-sameer-saifi/)
- 📷 Instagram: [@samx99designs](https://www.instagram.com/samx99designs/)

## 🙏 Acknowledgments

- Built with [Once UI System](https://once-ui.com)
- Portfolio template by [Once UI Magic Portfolio](https://github.com/once-ui-system/magic-portfolio)
- Powered by [Next.js](https://nextjs.org)

---

**Built with ❤️ by Sameer Saifi**

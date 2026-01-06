# Magic Portfolio

Magic Portfolio is a simple, clean, beginner-friendly portfolio template. It supports an MDX-based content system for projects and blog posts, an about / CV page and a gallery.

[View the demo](https://samx.vercel.com).

![Magic Portfolio](public/images/og/home.jpg)

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/samx.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run dev server

```bash
npm run dev
```

### 4. Edit config

```text
src/resources/samx.config.js
```

### 5. Edit content

```text
src/resources/content.js
```

### 6. Create blog posts / projects

```text
Add a new .mdx file to src/app/blog/posts or src/app/work/projects
```

Magic Portfolio was built with [SamX](https://samx.vercel.com) for [Next.js](https://nextjs.org). It requires Node.js v18.17+.

## Documentation

Docs available at: [docs.samx.vercel.com](https://docs.samx.vercel.com/docs/magic-portfolio/quick-start)

## Features

### SamX

- All tokens, components & features of [SamX](https://samx.vercel.com)

### SEO

- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

### Design

- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://samx.vercel.com/docs/theming)

### Content

- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

### Localization

- A localized, earlier version of Magic Portfolio is available with the next-intl library
- To use localization, switch to the 'i18n' branch

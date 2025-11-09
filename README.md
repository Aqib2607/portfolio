# 🚀 Portfolio - Aqib Jawwad Nahin

<div align="center">

<!-- Project Status Badges -->
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=for-the-badge)
![Build](https://img.shields.io/badge/Build-Passing-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<!-- Technology Stack Badges -->
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

</div>

---

## 📈 Project Metrics

<div align="center">

| Metric | Value |
|--------|-------|
| 📁 **Total Components** | 50+ |
| 📝 **Lines of Code** | 5,000+ |
| 🎨 **UI Components** | 30+ |
| 📱 **Responsive Design** | 100% |
| ⚡ **Lighthouse Score** | 95+ |
| 🌐 **Accessibility** | WCAG 2.1 AA |

</div>

---

## 🌟 Overview

A modern, responsive portfolio website showcasing my skills as a **Full Stack Developer**. Built with cutting-edge technologies and designed with a focus on performance, accessibility, and user experience.

**🔗 Live Demo:** [aqibjawwad.me](https://aqibjawwad.me)

---

## ✨ Features

### 🎨 **Modern Design**
- **Glassmorphism UI** - Contemporary glass-card design elements
- **Gradient Animations** - Smooth, eye-catching gradient backgrounds
- **Dark Theme** - Optimized for better user experience
- **Responsive Layout** - Perfect on all devices (mobile, tablet, desktop)

### 🚀 **Performance Optimized**
- **Lightning Fast** - Built with Vite for optimal performance
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **Progressive Enhancement** - Works without JavaScript
- **Accessibility First** - ARIA labels, keyboard navigation, screen reader support

### 📱 **Interactive Components**
- **Smooth Scrolling** - Anchor-based navigation
- **Animated Sections** - CSS animations with proper timing
- **Social Integration** - Direct links to GitHub, LinkedIn, WhatsApp
- **Contact Forms** - Interactive contact section
- **Dynamic Content** - Real project data integration

### 🛠️ **Developer Experience**
- **TypeScript** - Type-safe development
- **Component Library** - Reusable Shadcn/ui components
- **Modern Tooling** - ESLint, PostCSS, Autoprefixer
- **Git Workflow** - Organized commit history and branching

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework

### **UI/UX**
- **Shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful, customizable icons
- **Radix UI** - Accessible, unstyled UI primitives
- **CSS Animations** - Custom keyframe animations

### **Build Tools**
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing
- **ESLint** - Code linting and quality assurance

### **Deployment**
- **Environment Variables** - Configurable for different environments
- **Static Site Generation** - Optimized build output
- **CDN Ready** - Optimized for global content delivery

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** - JavaScript runtime
- **npm or bun** - Package manager
- **Git** - Version control

### Installation

```bash
# Clone the repository
git clone https://github.com/Aqib2607/portfolio.git
cd portfolio

# Install dependencies
npm install
# OR using bun (faster)
bun install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
# OR using bun
bun run dev
```

### Build for Production

```bash
# Build the project
npm run build
# OR using bun
bun run build

# Preview the build
npm run preview
# OR using bun
bun run preview
```

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── Banner.svg         # Social media banner
│   ├── profile_pic.jpg    # Profile image
│   └── project_images/    # Project screenshots
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # Shadcn/ui components
│   │   ├── Hero.tsx      # Landing section
│   │   ├── About.tsx     # About section
│   │   ├── Projects.tsx  # Projects showcase
│   │   ├── Skills.tsx    # Skills display
│   │   └── Contact.tsx   # Contact form
│   ├── pages/            # Page components
│   │   └── Landing.tsx   # Main landing page
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── App.tsx           # Root component
├── .env.example          # Environment variables template
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies and scripts
```

---

## 🎨 Component Gallery

### **Hero Section**
- Animated background with floating elements
- Profile image with gradient border
- Call-to-action buttons
- Social media links

### **About Section**
- Personal information and journey
- Highlighted skills and expertise
- Contact information
- Professional highlights

### **Projects Section**
- Featured project cards with hover effects
- Technology badges
- Live demo and source code links
- Responsive grid layout

### **Skills Section**
- Animated progress bars
- Technology grid
- Learning goals and certifications
- Technical philosophy

### **Contact Section**
- Interactive contact form
- Multiple contact methods
- Social media integration
- FAQ section

---

## 🌐 Environment Configuration

Create a `.env` file in the root directory:

```env
# Site Configuration
VITE_SITE_URL=https://yourdomain.com

# Analytics (Optional)
VITE_GA_ID=your_google_analytics_id

# Contact Form (Optional)
VITE_FORM_ENDPOINT=your_form_endpoint
```

---

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Mobile Devices** (320px - 768px)
- **Tablets** (768px - 1024px)
- **Desktop** (1024px+)
- **Large Screens** (1440px+)

### **Key Responsive Features**
- Flexible grid layouts
- Scalable typography
- Touch-friendly navigation
- Optimized images
- Mobile-first approach

---

## 🔧 Customization

### **Colors & Themes**
- Modify `tailwind.config.ts` for color schemes
- Update CSS custom properties in `index.css`
- Customize gradient definitions

### **Content Updates**
- Edit component files in `src/components/`
- Update project data in `Projects.tsx`
- Modify personal information in respective components

### **Adding New Sections**
1. Create component in `src/components/`
2. Import in `Landing.tsx`
3. Add navigation link in `Navigation.tsx`
4. Update anchor links

---

## 🚀 Deployment

### **Static Hosting**
The project builds to static files and can be deployed on:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3 + CloudFront**
- **Any static hosting service**

### **Build Commands**
```bash
# Production build
npm run build

# Preview build locally
npm run preview
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Use existing component patterns
- Maintain responsive design principles
- Test on multiple devices
- Update documentation

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License
Copyright (c) 2025 Aqib Jawwad Nahin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 About the Developer

**Aqib Jawwad Nahin** - Full Stack Web Developer

- 🌐 **Website:** [aqibjawwad.me](https://aqibjawwad.me)
- 📧 **Email:** [aqibjawwad2607@gmail.com](mailto:aqibjawwad2607@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/aqib-jawwad](https://linkedin.com/in/aqib-jawwad)
- 🐱 **GitHub:** [github.com/Aqib2607](https://github.com/Aqib2607)

---

## 🎯 Project Goals

- ✅ **Modern Design** - Contemporary UI/UX patterns
- ✅ **Performance** - Fast loading and smooth interactions
- ✅ **Accessibility** - WCAG 2.1 AA compliance
- ✅ **SEO Optimization** - Search engine friendly
- ✅ **Mobile First** - Responsive design approach
- ✅ **Developer Experience** - Clean, maintainable code

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

**Built with ❤️ by [Aqib Jawwad Nahin](https://github.com/Aqib2607)**

![Profile Views](https://komarev.com/ghpvc/?username=Aqib2607&color=brightgreen&style=for-the-badge)

</div>
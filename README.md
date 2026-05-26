# Personal Portfolio

A modern React + Vite portfolio website for **Logesh T**, featuring an overview of skills, education, certifications, highlighted projects, and a working contact form.

## ✨ Overview

This portfolio showcases:

- **Hero / landing section** with branding and call-to-action
- **About** section with professional summary and highlights
- **Projects** gallery with live links, GitHub links, and project tags
- **Education** timeline
- **Certifications** section with credential links
- **Contact** form integrated with **EmailJS**
- Responsive navigation and footer with social links

## 🛠️ Tech Stack

- **React 19**
- **Vite 7**
- **Tailwind CSS 4**
- **Lucide React** for icons
- **EmailJS** for contact form delivery

## 📁 Project Structure

- `src/App.jsx` – main page composition
- `src/main.jsx` – application entry point
- `src/layout/` – navigation and footer components
- `src/sections/` – page sections such as About, Projects, Education, Certifications, Contact
- `src/components/` – reusable UI components
- `public/Project-images/` – project screenshots used in the portfolio

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build locally

```bash
npm run preview
```

### 5. Lint the project

```bash
npm run lint
```

## 📧 Contact Form Setup

The contact form uses **EmailJS**. To enable form submissions, add the following variables in a `.env` file at the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these variables are not configured, the form will show an error message instead of sending.

## 🌐 Deployment

This project is ready to deploy to platforms such as:

- **Vercel**

For Vite apps, deploy the generated `dist` folder after running `npm run build`.

## 📌 Notes

- The portfolio includes a collection of full-stack and frontend projects with direct links to demos and GitHub repositories.
- The navbar links scroll smoothly to each section.
- The footer contains links to GitHub and LinkedIn.

## 👤 Author

**Logesh T**

- GitHub: https://github.com/Logesh-26
- LinkedIn: https://www.linkedin.com/in/logesh2612

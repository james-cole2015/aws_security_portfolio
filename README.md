# ⚠️ Security Disclaimer

**This application is intentionally insecure and is provided solely for educational and research purposes.**

It is designed to demonstrate real-world security flaws in web applications to help developers, students, and security professionals recognize, exploit, and remediate these vulnerabilities in a controlled, ethical manner.

## 🚫 Warning

- Do **not** deploy this application in production.
- Do **not** use this application to target any system without **explicit, documented authorization**.
- This code is provided **"as is"**, without warranty or guarantee of any kind.
- The authors, contributors, and maintainers **assume no liability** for any damages arising from the use or misuse of this project.

By accessing, cloning, using, or modifying this repository, you acknowledge that you have read, understood, and agreed to this disclaimer and the terms of the license.

For additional information about ethical usage and use cases, see [`USE_CASES.md`](./USE_CASES.md).



# AWS Security Portfolio

A professional portfolio website built with React + Vite, designed for AWS security specialists. Features a clean, responsive design optimized for deployment to AWS S3 as a static website.

## Features

- **Homepage**: Professional introduction with core expertise showcase
- **Projects Page**: AWS security projects with descriptions and links
- **Resume Page**: Downloadable PDF resume and professional certifications
- **Contact Page**: Professional contact information and availability
- **Responsive Design**: Mobile-first approach with clean, modern styling
- **React Router**: Single-page application with client-side routing

## Tech Stack

- React 18
- Vite (build tool)
- React Router DOM
- Pure CSS (no external CSS frameworks)
- Optimized for AWS S3 static hosting

## Setup Instructions

1. **Clone/Create the project**:
   ```bash
   mkdir aws-security-portfolio
   cd aws-security-portfolio
   ```

2. **Copy all files** from the artifacts into their respective locations according to the folder structure

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

### Adding New Sections

The modular component structure makes it easy to add new pages:
1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Optimized for performance

## License

MIT License - feel free to use this template for your own portfolio.
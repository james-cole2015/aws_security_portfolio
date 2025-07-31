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

## Deployment to AWS S3

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Create S3 bucket**:
   - Create a new S3 bucket (e.g., `your-portfolio-bucket`)
   - Enable static website hosting
   - Set index document: `index.html`
   - Set error document: `index.html` (for React Router)

3. **Configure bucket policy** for public access:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-portfolio-bucket/*"
       }
     ]
   }
   ```

4. **Upload files**:
   ```bash
   aws s3 sync dist/ s3://your-portfolio-bucket --delete
   ```

5. **Optional - CloudFront distribution** for better performance and HTTPS

## Customization

### Update Personal Information

1. **Contact details** in `src/pages/Contact.jsx`:
   - Replace email address
   - Update LinkedIn profile URL
   - Update GitHub profile URL

2. **Resume PDF**: 
   - Add your resume PDF to the `public/` folder
   - Update the download function in `src/pages/Resume.jsx`

3. **Project links** in `src/pages/Projects.jsx`:
   - Update GitHub repository URLs
   - Update demo/project URLs

4. **Professional summary** in `src/pages/Resume.jsx` and `src/pages/Home.jsx`

### Styling

The project uses CSS custom properties (variables) defined in `src/index.css`:
- `--primary-color`: Main brand color (AWS dark blue)
- `--secondary-color`: Accent color (AWS orange)
- Modify these to match your personal branding

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
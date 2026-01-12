# Professional Portfolio

A modern, responsive portfolio website built with React and Vite. Features a clean design with smooth animations and professional styling.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Smooth scrolling navigation, project filtering, contact form
- **Performance Optimized** - Built with Vite for fast loading times
- **SEO Friendly** - Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- React 19
- Vite
- CSS3 with modern features
- Google Fonts (Inter)

## 📋 Sections

1. **Header** - Fixed navigation with smooth scrolling
2. **Hero** - Eye-catching introduction with call-to-action buttons
3. **About** - Personal information and statistics
4. **Skills** - Technical skills with progress bars
5. **Projects** - Portfolio projects with filtering functionality
6. **Contact** - Contact form and information
7. **Footer** - Links and additional information

## 🎨 Customization Guide

### Personal Information
Update the following files with your information:

**src/components/Hero.jsx**
- Replace "Your Name" with your actual name
- Update the subtitle and description
- Add your professional photo

**src/components/About.jsx**
- Update the about text with your experience
- Modify the statistics (projects, years, satisfaction)
- Add your professional photo

**src/components/Contact.jsx**
- Update contact information (email, phone, location)
- Add your social media links
- Configure form submission (currently shows alert)

**index.html**
- Update the title and meta tags
- Replace "Your Name" with your actual name

### Adding Your Resume
Your portfolio includes "Download Resume" buttons in two places:
1. **Hero Section** - Main call-to-action button
2. **About Section** - Download and View Resume buttons

To add your resume:
1. Save your resume as a PDF file
2. Rename it to `resume.pdf`
3. Place it in the `public` folder (replace the placeholder file)
4. The buttons will automatically link to your resume

The download button will save the file as `Soumya_Ranjan_Behera_Resume.pdf` on the user's device.

### Skills Section
Edit `src/components/Skills.jsx` to update:
- Skill categories (Frontend, Backend, Tools)
- Individual skills and proficiency levels
- Add or remove skills as needed

### Projects Section
Modify `src/components/Projects.jsx` to:
- Replace sample projects with your actual projects
- Update project descriptions, technologies, and links
- Add real project screenshots (replace image placeholders)
- Modify filter categories if needed

### Styling
The main styles are in `src/App.css`. You can customize:
- Color scheme (currently purple gradient)
- Fonts and typography
- Spacing and layout
- Animations and transitions

### Color Scheme
To change the color scheme, update the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #667eea;    /* Main brand color */
  --secondary-color: #764ba2;  /* Secondary brand color */
  --text-color: #333;          /* Main text color */
  --text-light: #666;          /* Light text color */
}
```

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

5. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 🌐 Deployment

This portfolio is configured for easy deployment to GitHub Pages. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

**Quick Deploy:**
```bash
npm install
npm run deploy
```

Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Development

The project uses:
- **Vite** for fast development and building
- **ESLint** for code linting
- **Modern CSS** with Grid and Flexbox
- **CSS Variables** for easy theming

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Note**: Remember to replace all placeholder content with your actual information, projects, and images before deploying your portfolio.
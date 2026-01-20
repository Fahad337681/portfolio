# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 Modern and unique design with gradient backgrounds
- 🌙 Dark mode support with theme toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth animations and transitions with Framer Motion
- 🎯 SEO-friendly with proper meta tags
- 🔍 Filterable projects section
- 📬 Contact form with validation
- 🎭 Glassmorphism and modern UI effects

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── ThemeProvider.tsx   # Theme context provider
│   ├── Navigation.tsx      # Navigation bar with mobile menu
│   ├── Hero.tsx            # Hero section with CTA
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section with progress bars
│   ├── Projects.tsx        # Projects section with filters
│   └── Contact.tsx         # Contact form and info
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and description
   - Update social media links

2. **About Section** (`components/About.tsx`):
   - Update bio and professional background
   - Customize highlights

3. **Skills Section** (`components/Skills.tsx`):
   - Update skill categories and levels
   - Add or remove technologies

4. **Projects Section** (`components/Projects.tsx`):
   - Add your own projects
   - Update project images, descriptions, and links
   - Modify filter categories

5. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Update social media links

### Color Scheme

Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ },
}
```

## 📱 Sections

### 1. Hero Section
- Full-screen introduction with animated elements
- Call-to-action buttons
- Social media links
- Scroll indicator

### 2. About Section
- Professional bio
- Key highlights
- Visual elements

### 3. Skills Section
- Categorized skills (Frontend, Backend, Tools)
- Visual progress bars
- Additional technologies badges

### 4. Projects Section
- Filterable project cards
- Hover effects
- Project details, tech stack, and links

### 5. Contact Section
- Contact form with validation
- Contact information cards
- Social media links

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify:** Connect your Git repository
- **AWS Amplify:** Deploy from Git
- **Self-hosted:** Build and serve the `out` directory

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Your Name
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

---

Made with ❤️ using Next.js and Tailwind CSS
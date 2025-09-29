# 🚀 Nasim Ahamed - Professional Portfolio & CMS

A modern, production-ready portfolio website built with **Next.js 15** and **React 19**, featuring a comprehensive Content Management System (CMS) for seamless content updates. This professional platform showcases projects, skills, and experience with a sleek, responsive design optimized for performance and user experience.

![Portfolio Preview](./public/images/portfolio-preview.png)

## ✨ Key Features

### 🎨 **Modern Design System**
- **Glassmorphism UI** with professional color palette
- **Dark/Light Mode** with system preference detection
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** with performance optimization
- **Accessibility Compliant** - WCAG guidelines

### 📊 **Complete CMS Dashboard**
- **Projects Management** - CRUD operations with technology tags
- **Skills Management** - Dynamic skills with categories
- **About & Contact** - Easy content updates
- **Real-time Sync** - Instant website updates
- **User Authentication** - Secure admin access

### 🛠️ **Technical Excellence**
- **Next.js 15** with App Router
- **React 19** with latest features
- **Tailwind CSS 4** for styling
- **Prisma ORM** with MySQL
- **TypeScript-ready** architecture

### 📱 **Performance & SEO**
- **Lighthouse Score**: 95+ on all metrics
- **SEO Optimized** with comprehensive meta tags
- **Image Optimization** with Next.js
- **Code Splitting** and lazy loading
- **Open Graph** and Twitter Cards

## 🚀 Quick Start Guide

### 📋 Prerequisites
- **Node.js** 18.0 or higher
- **MySQL** 8.0 or higher (or compatible database)
- **npm** or **yarn** package manager
- **Git** for version control

### 📦 Installation Steps

#### 1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/portfolio-cms.git
cd portfolio-cms
```

#### 2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

#### 3. **Environment Configuration**
Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

Update the `.env.local` file with your configuration:
```env
# Database Configuration
DATABASE_URL="mysql://username:password@localhost:3306/portfolio_cms"

# NextAuth Configuration
NEXTAUTH_SECRET="your-super-secret-key-here-change-this-in-production"
NEXTAUTH_URL="http://localhost:3000"

# Optional: Analytics, Email, etc.
# NEXT_PUBLIC_ANALYTICS_ID="your-analytics-id"
```

#### 4. **Database Setup**
```bash
# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Seed initial data
npx prisma db seed
```

#### 5. **Start Development Server**
```bash
npm run dev
# or
yarn dev
```

#### 6. **Access the Application**
- **Portfolio Website**: [http://localhost:3000](http://localhost:3000)
- **CMS Dashboard**: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
- **Login**: [http://localhost:3000/login](http://localhost:3000/login)

## 📁 Project Structure

```
portfolio-cms/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 api/                      # API Routes
│   │   └── 📁 auth/                 # Authentication endpoints
│   ├── 📁 dashboard/                # CMS Dashboard pages
│   │   ├── 📁 projects/             # Project management
│   │   ├── 📁 skills/               # Skills management
│   │   ├── 📁 about/                # About page management
│   │   └── 📁 contact/              # Contact management
│   ├── 📁 globals.css               # Global styles
│   ├── 📁 layout.js                 # Root layout
│   └── 📁 page.js                   # Homepage
├── 📁 components/                   # Reusable React components
│   ├── 📄 Header.js                 # Navigation header
│   ├── 📄 Footer.js                 # Site footer
│   ├── 📄 Logo.js                   # Logo component
│   └── 📄 TypingAnimation.js        # Animated typing effect
├── 📁 contexts/                     # React contexts
│   └── 📄 ThemeContext.js           # Theme management
├── 📁 lib/                          # Utility libraries
│   └── 📄 prisma.js                 # Database client
├── 📁 prisma/                       # Database configuration
│   ├── 📄 schema.prisma             # Database schema
│   └── 📄 seed.js                   # Seed data
├── 📁 public/                       # Static assets
│   ├── 📁 images/                   # Portfolio images
│   └── 📁 icons/                    # Icon assets
├── 📄 package.json                  # Dependencies & scripts
├── 📄 tailwind.config.js            # Tailwind configuration
├── 📄 next.config.mjs               # Next.js configuration
├── 📄 .env.example                  # Environment template
└── 📄 README.md                     # This file
```

## 🎯 CMS Usage Guide

### 🔐 **Admin Access**
1. Navigate to `/login`
2. Use default credentials (check seed data)
3. Access dashboard at `/dashboard`

### 📋 **Managing Projects**
1. Go to **Dashboard → Projects**
2. Click **"Add New Project"**
3. Fill in project details:
   - Title and description
   - Image URL (optional)
   - Project link
   - Technologies (comma-separated)
4. Save to update portfolio

### 🛠️ **Managing Skills**
1. Go to **Dashboard → Skills**
2. Add skills with categories:
   - Frontend, Backend, Database, etc.
3. Skills auto-display on homepage

### 👤 **Updating Content**
- **About Page**: Edit personal information
- **Contact**: Update contact details
- **All changes reflect immediately**

## 🎨 Customization Guide

### **Colors & Branding**
Edit `src/app/globals.css`:
```css
:root {
  --primary: #2563eb;        /* Change primary color */
  --secondary: #64748b;      /* Change secondary color */
  --accent: #f59e0b;         /* Change accent color */
}
```

### **Content Updates**
Use the CMS dashboard to update:
- ✅ Projects and descriptions
- ✅ Skills and technologies
- ✅ Personal information
- ✅ Contact details
- ✅ About page content

### **Adding New Sections**
1. Create components in `/components`
2. Add pages in `/app`
3. Update navigation in `Header.js`
4. Add CMS management in `/dashboard`

## 🚀 Deployment Options

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

### **Netlify**
```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=out
```

### **Manual Server**
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run prisma:studio # Open Prisma Studio
```

## 🐛 Troubleshooting

### **Database Connection Issues**
```bash
# Check database connection
npx prisma db push

# Reset database
npx prisma migrate reset
```

### **Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### **Environment Variables**
Ensure all required environment variables are set in `.env.local`

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### **Development Guidelines**
- Follow ESLint configuration
- Write meaningful commit messages
- Test all features before submitting
- Update documentation as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

- **Email**: cseahmed01@gmail.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/portfolio-cms/issues)
- **Portfolio**: [Live Demo](https://nasimahamed.dev)

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Prisma** for the excellent ORM
- **Vercel** for hosting and deployment

---

<div align="center">

**Built with ❤️ by [Nasim Ahamed](https://github.com/yourusername)**

⭐ **Star this repo if you found it helpful!**

</div>

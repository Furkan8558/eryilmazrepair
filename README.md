# 🔧 Eryilmaz Appliance Repair Website

A complete, professional appliance repair service website built with React, Vite, and Tailwind CSS. This is a fully functional, production-ready website that **closely mirrors the structure and features of Mr. Appliance**, including Residential Services, Commercial Services, Why Choose Us, and all essential pages.

## ✨ Features

### 📄 Pages Included (13 Complete Pages)
- **Homepage** - Hero section, services overview, testimonials
- **All Services** - Complete services listing
- **Service Detail** - Individual service pages for each appliance type
- **Residential Services** - Dedicated residential appliance repair page ⭐ NEW
- **Commercial Services** - Commercial appliances with maintenance plans ⭐ NEW
- **Why Choose Us** - Detailed value propositions and differentiators ⭐ NEW
- **About Us** - Company story, team, values, brands we service
- **Contact** - Contact form, info, map placeholder
- **Blog** - Blog listing and individual posts
- **FAQ** - Accordion-style frequently asked questions
- **Reviews** - Customer testimonials showcase
- **Service Areas** - ZIP code checker and coverage areas

### 🎨 Components
- Responsive header with **dropdown navigation** ⭐ NEW
- Professional footer with links
- Hero section with stats
- Service cards
- Testimonial cards
- Booking form
- Contact form
- Call-to-action sections
- Why choose us section
- Pricing plan cards ⭐ NEW

### 🚀 Technical Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Clean, modern UI design
- ✅ Fast performance with Vite
- ✅ SEO-friendly structure
- ✅ Easy to customize
- ✅ Well-organized code
- ✅ Reusable components
- ✅ Professional styling with Tailwind CSS
- ✅ Dropdown navigation menus ⭐ NEW
- ✅ Service categorization (Residential/Commercial) ⭐ NEW

## 🏃 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to view the website! 🎉

### 3. Build for Production
```bash
npm run build
```

## 📚 Documentation

### Getting Started
- **[QUICK_START.md](QUICK_START.md)** - Get started in 3 steps
- **[INSTALLATION.md](INSTALLATION.md)** - Detailed installation guide
- **[CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)** - Complete customization guide
- **[FILE_STRUCTURE.md](FILE_STRUCTURE.md)** - Project structure explained

### Deployment & Hosting 🚀
- **[QUICK_DEPLOY.md](QUICK_DEPLOY.md)** - Deploy in 5 minutes ⚡
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Complete deployment documentation
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Pre-launch checklist
- **[HOSTING_SUMMARY.md](HOSTING_SUMMARY.md)** - Hosting comparison & recommendations

### Integrations
- **[GOOGLE_MAPS_SETUP.md](GOOGLE_MAPS_SETUP.md)** - Google Maps integration guide

## 🎯 What to Customize

### Priority 1 (Essential)
1. `src/data/companyInfo.js` - Your business details
2. `tailwind.config.js` - Your brand colors
3. `src/data/services.js` - Your services and pricing

### Priority 2 (Important)
4. `src/data/serviceAreas.js` - Your coverage areas
5. `src/data/testimonials.js` - Real customer reviews
6. Add your logo and images to `public/images/`

### Priority 3 (Optional)
7. `src/data/blogPosts.js` - Blog content
8. `src/data/faq.js` - FAQ content
9. Integrate email service for forms

## 📁 Project Structure

```
eryilmaz-appliance-repair/
├── src/
│   ├── components/          # Reusable components (10 files)
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── BookingForm.jsx
│   │   └── ...
│   ├── pages/              # Page components (10 pages)
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── ...
│   ├── data/               # Data files (CUSTOMIZE THESE!)
│   │   ├── companyInfo.js  # Business details
│   │   ├── services.js     # Your services
│   │   ├── testimonials.js # Reviews
│   │   ├── blogPosts.js    # Blog content
│   │   ├── faq.js          # FAQ
│   │   └── serviceAreas.js # Coverage
│   └── styles/
│       └── index.css       # Global styles
├── public/                 # Static assets
│   └── images/            # (Add your images here)
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind customization
├── vite.config.js         # Vite configuration
└── Documentation files...
```

## 🛠️ Technologies Used

- **React 18.2** - Modern UI library
- **Vite 5.0** - Lightning-fast build tool
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **React Router 6.20** - Client-side routing
- **React Icons 4.12** - Icon library

## 🎨 Customization Quick Guide

### Change Brand Colors
Edit `tailwind.config.js`:
```javascript
primary: {
  600: '#dc2626', // Your main brand color
  // ...
}
```

### Update Company Info
Edit `src/data/companyInfo.js`:
```javascript
export const companyInfo = {
  name: "Your Company Name",
  phone: "(555) 123-4567",
  email: "info@yourcompany.com",
  // ...
}
```

### Add Your Logo
1. Place logo in `public/images/logo.png`
2. Update `src/components/Header.jsx`

## 🚢 Deployment

### ⚡ Quick Deploy (Recommended)

**Vercel (Easiest):**
1. Push to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Add `VITE_GOOGLE_MAPS_API_KEY` environment variable
5. Deploy! ✨

**Configuration files included:**
- ✅ `vercel.json` - Vercel config (React Router support)
- ✅ `netlify.toml` - Netlify config
- ✅ `CNAME` - Custom domain ready

**Detailed guides:**
- 📖 `QUICK_DEPLOY.md` - 5-minute deployment guide
- 📖 `DEPLOYMENT_GUIDE.md` - Complete deployment documentation

### Other Options
- Netlify (equally good)
- GitHub Pages (requires extra setup)
- Cloudflare Pages

## 📋 NPM Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run preview  # Preview production build
```

## ✅ What's Included

### Services (8 service pages)
- Refrigerator Repair
- Dishwasher Repair
- Oven & Stove Repair
- Washing Machine Repair
- Dryer Repair
- Microwave Repair
- Ice Maker Repair
- Garbage Disposal Repair

### Data Files (Pre-filled)
- ✅ 6 Customer testimonials
- ✅ 6 Blog posts
- ✅ 15+ FAQ questions
- ✅ 7 Service areas
- ✅ Company information template

### Components (Ready to use)
- ✅ Responsive header & footer
- ✅ Hero section with stats
- ✅ Service cards
- ✅ Testimonial cards
- ✅ Contact form
- ✅ Booking form
- ✅ FAQ accordion
- ✅ Call-to-action sections

## 🔧 Next Steps

1. ✅ **Install dependencies** - `npm install`
2. ✅ **Start dev server** - `npm run dev`
3. 📝 **Customize company info** - See `src/data/companyInfo.js`
4. 🎨 **Update brand colors** - See `tailwind.config.js`
5. 📸 **Add images** - Create `public/images/` folder
6. 🚀 **Deploy** - Follow deployment guide above

## 📖 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)

## 🆘 Need Help?

1. Check `QUICK_START.md` for getting started
2. Review `CUSTOMIZATION_GUIDE.md` for detailed customization
3. See `FILE_STRUCTURE.md` to understand the project
4. All components have helpful code comments

## 📄 License

This project is for Eryilmaz Appliance Repair Services.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

Ready to customize and deploy! 🚀


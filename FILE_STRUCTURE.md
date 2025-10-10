# 📁 Complete File Structure

## Project Overview

This is a comprehensive appliance repair service website built with React, Vite, and Tailwind CSS.

## Directory Structure

```
eryilmaz-appliance-repair/
│
├── public/                          # Static assets
│   └── images/                      # (Create this folder)
│       ├── logo.png
│       ├── services/
│       ├── blog/
│       ├── team/
│       └── avatars/
│
├── src/                             # Source files
│   ├── components/                  # Reusable components
│   │   ├── BookingForm.jsx         # Service booking form
│   │   ├── CallToAction.jsx        # CTA section component
│   │   ├── ContactForm.jsx         # Contact form
│   │   ├── Footer.jsx              # Site footer
│   │   ├── Header.jsx              # Site header & navigation
│   │   ├── Hero.jsx                # Homepage hero section
│   │   ├── ScrollToTop.jsx         # Scroll to top on route change
│   │   ├── ServiceCard.jsx         # Service display card
│   │   ├── TestimonialCard.jsx     # Testimonial display card
│   │   └── WhyChooseUs.jsx         # Features/benefits section
│   │
│   ├── data/                        # Data files (CUSTOMIZE THESE!)
│   │   ├── blogPosts.js            # Blog articles data
│   │   ├── companyInfo.js          # Company details (phone, address, etc.)
│   │   ├── faq.js                  # FAQ questions & answers
│   │   ├── serviceAreas.js         # Service coverage areas
│   │   ├── services.js             # Services offered
│   │   └── testimonials.js         # Customer reviews
│   │
│   ├── pages/                       # Page components
│   │   ├── About.jsx               # About us page
│   │   ├── Blog.jsx                # Blog listing page
│   │   ├── BlogPost.jsx            # Individual blog post
│   │   ├── Contact.jsx             # Contact page
│   │   ├── FAQ.jsx                 # FAQ page
│   │   ├── Home.jsx                # Homepage
│   │   ├── Reviews.jsx             # Customer reviews page
│   │   ├── ServiceAreas.jsx        # Service areas page
│   │   ├── ServiceDetail.jsx       # Individual service page
│   │   └── Services.jsx            # Services listing page
│   │
│   ├── styles/                      # Styles
│   │   └── index.css               # Global styles & Tailwind
│   │
│   ├── App.jsx                      # Main app component & routes
│   └── main.jsx                     # App entry point
│
├── .gitignore                       # Git ignore file
├── CUSTOMIZATION_GUIDE.md          # Detailed customization guide
├── FILE_STRUCTURE.md               # This file
├── INSTALLATION.md                 # Installation instructions
├── package.json                    # Dependencies & scripts
├── postcss.config.js               # PostCSS configuration
├── QUICK_START.md                  # Quick start guide
├── README.md                       # Project overview
├── tailwind.config.js              # Tailwind CSS configuration
└── vite.config.js                  # Vite configuration
```

## Key Files Explained

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies and scripts |
| `vite.config.js` | Vite build tool configuration |
| `tailwind.config.js` | Tailwind CSS customization (colors, fonts) |
| `postcss.config.js` | CSS processing configuration |

### Source Files

| File/Folder | Purpose | Customize? |
|-------------|---------|-----------|
| `src/App.jsx` | Main app & routing | Only if adding pages |
| `src/main.jsx` | Entry point | Rarely |
| `src/styles/index.css` | Global styles | For custom CSS |

### Components (src/components/)

| Component | Used For |
|-----------|----------|
| `Header.jsx` | Navigation bar, logo, phone number |
| `Footer.jsx` | Footer with links & contact info |
| `Hero.jsx` | Homepage hero section |
| `ServiceCard.jsx` | Display service items |
| `TestimonialCard.jsx` | Display customer reviews |
| `BookingForm.jsx` | Service appointment booking |
| `ContactForm.jsx` | Contact form |
| `WhyChooseUs.jsx` | Features & benefits section |
| `CallToAction.jsx` | CTA banner |
| `ScrollToTop.jsx` | Auto-scroll on navigation |

### Data Files (src/data/) - **CUSTOMIZE THESE!**

| File | Contains | Priority |
|------|----------|----------|
| `companyInfo.js` | Company details, contact info | **HIGH** |
| `services.js` | Your services, pricing | **HIGH** |
| `serviceAreas.js` | Geographic coverage | **HIGH** |
| `testimonials.js` | Customer reviews | **MEDIUM** |
| `faq.js` | FAQ questions/answers | **MEDIUM** |
| `blogPosts.js` | Blog articles | **LOW** |

### Pages (src/pages/)

| Page | Route | Purpose |
|------|-------|---------|
| `Home.jsx` | `/` | Homepage |
| `Services.jsx` | `/services` | Services listing |
| `ServiceDetail.jsx` | `/services/:id` | Individual service |
| `About.jsx` | `/about` | About us |
| `Contact.jsx` | `/contact` | Contact page |
| `Blog.jsx` | `/blog` | Blog listing |
| `BlogPost.jsx` | `/blog/:id` | Individual blog post |
| `FAQ.jsx` | `/faq` | FAQ page |
| `Reviews.jsx` | `/reviews` | Customer reviews |
| `ServiceAreas.jsx` | `/service-areas` | Service coverage |

## 🎯 What to Customize First

### Priority 1: Essential (Do First)
1. `src/data/companyInfo.js` - Your business info
2. `tailwind.config.js` - Your brand colors
3. `src/data/services.js` - Your actual services

### Priority 2: Important (Do Soon)
4. `src/data/serviceAreas.js` - Your coverage areas
5. `src/data/testimonials.js` - Real reviews
6. `public/images/` - Add your images
7. `src/components/Header.jsx` - Add your logo

### Priority 3: Optional (Do Later)
8. `src/data/blogPosts.js` - Add blog content
9. `src/data/faq.js` - Update FAQ
10. Forms integration - Connect to email service

## 📦 NPM Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## 🔧 Environment Files

Create `.env` file for sensitive data (optional):
```
VITE_API_URL=your-api-url
VITE_GOOGLE_MAPS_KEY=your-key
```

## 📝 Documentation Files

| File | Contains |
|------|----------|
| `README.md` | Project overview |
| `QUICK_START.md` | Get started quickly |
| `INSTALLATION.md` | Detailed setup |
| `CUSTOMIZATION_GUIDE.md` | How to customize |
| `FILE_STRUCTURE.md` | This file |

## 🚀 Next Steps

1. Review `QUICK_START.md` to get started
2. Follow `INSTALLATION.md` for setup
3. Use `CUSTOMIZATION_GUIDE.md` to customize
4. Refer to this file to understand structure

## 📞 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **React Icons** - Icons library

---

**Everything you need is organized and ready to customize!** 🎉


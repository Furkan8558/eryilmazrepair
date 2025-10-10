# 🚀 Quick Start Guide

Get your appliance repair website running in 3 simple steps!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

Your website will open at `http://localhost:3000` 🎉

## Step 3: Customize Your Brand

### Essential Files to Update:

1. **Company Info** → `src/data/companyInfo.js`
   - Name, phone, address, email
   - Business hours
   - Social media links

2. **Colors** → `tailwind.config.js`
   - Primary brand colors
   - Secondary colors

3. **Services** → `src/data/services.js`
   - Add/edit your services
   - Update pricing

4. **Content** → Update data files in `src/data/`
   - Testimonials
   - Blog posts
   - FAQ
   - Service areas

## 📁 What's Included

✅ **10+ Pages**
- Home
- Services (with individual service pages)
- About
- Contact
- Blog
- FAQ
- Reviews
- Service Areas

✅ **Key Features**
- Responsive design (mobile-friendly)
- Service booking form
- Contact form
- Testimonials showcase
- Blog system
- FAQ with accordion
- Service area checker

✅ **Components**
- Professional header with navigation
- Footer with links
- Hero section
- Service cards
- Testimonial cards
- Call-to-action sections
- Forms (contact & booking)

## 🎨 Customization Priority

**Level 1 - Must Do:**
1. Update company information
2. Change contact details
3. Replace placeholder services with your actual services

**Level 2 - Should Do:**
4. Customize brand colors
5. Add your logo
6. Update service areas
7. Add real testimonials

**Level 3 - Nice to Have:**
8. Add blog content
9. Integrate email service
10. Set up analytics
11. Add images

## 📚 Detailed Guides

- **Installation:** See `INSTALLATION.md`
- **Customization:** See `CUSTOMIZATION_GUIDE.md`
- **README:** See `README.md`

## 🆘 Common Issues

**Port already in use?**
- Change port in `vite.config.js`

**Dependencies error?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Can't find files?**
- Make sure you're in the project root directory

## 🚢 Ready to Deploy?

```bash
npm run build
```

Then deploy the `dist` folder to:
- Vercel (recommended)
- Netlify
- Any static hosting

## 📞 Need Help?

All components are well-documented with comments. Review the code to understand how everything works!

---

**You're all set! Start customizing and make this website your own! 🎉**


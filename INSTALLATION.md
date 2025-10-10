# Installation & Setup Guide

## 🚀 Quick Start

Follow these steps to get your appliance repair website up and running:

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

This will install all required dependencies including:
- React
- Vite
- Tailwind CSS
- React Router
- React Icons

### Step 2: Start Development Server

Run the development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The website will automatically open in your browser at `http://localhost:3000`

### Step 3: Customize for Your Brand

Now that the website is running, you can customize it:

#### 1. Update Company Information

Edit `src/data/companyInfo.js`:
- Company name
- Phone numbers
- Address
- Email
- Business hours
- Social media links

#### 2. Customize Colors

Edit `tailwind.config.js`:
- Change primary colors
- Modify secondary colors
- Adjust fonts

#### 3. Update Services

Edit `src/data/services.js`:
- Add/remove services
- Update pricing
- Modify service descriptions

#### 4. Add Your Content

- Replace testimonials in `src/data/testimonials.js`
- Update blog posts in `src/data/blogPosts.js`
- Modify FAQ in `src/data/faq.js`
- Update service areas in `src/data/serviceAreas.js`

#### 5. Add Images

Create an `images` folder in the `public` directory and add:
- Service images
- Blog images
- Team photos
- Company logo

### Step 4: Build for Production

When you're ready to deploy:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

This creates an optimized production build in the `dist` folder.

### Step 5: Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ServiceCard.jsx
│   ├── TestimonialCard.jsx
│   ├── BookingForm.jsx
│   ├── ContactForm.jsx
│   ├── WhyChooseUs.jsx
│   └── CallToAction.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   ├── FAQ.jsx
│   ├── Reviews.jsx
│   └── ServiceAreas.jsx
├── data/               # Data files
│   ├── companyInfo.js
│   ├── services.js
│   ├── testimonials.js
│   ├── blogPosts.js
│   ├── faq.js
│   └── serviceAreas.js
├── styles/             # Global styles
│   └── index.css
└── App.jsx            # Main app component
```

## 🎨 Customization Guide

### Changing Colors

1. Open `tailwind.config.js`
2. Modify the `colors` section:

```javascript
colors: {
  primary: {
    // Your brand colors
    500: '#your-color',
    600: '#your-color',
    // ...
  }
}
```

### Adding New Pages

1. Create a new file in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

### Updating Navigation

Edit `src/components/Header.jsx` to add/remove menu items.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to Other Platforms

The `dist` folder contains static files that can be deployed anywhere:
- GitHub Pages
- AWS S3
- Google Cloud Storage
- Any static hosting service

## 🔧 Troubleshooting

### Port Already in Use

If port 3000 is already in use, edit `vite.config.js`:

```javascript
server: {
  port: 3001, // Change to any available port
}
```

### Dependencies Issues

If you encounter dependency issues:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Next Steps

1. Replace placeholder images with real photos
2. Set up email integration for contact forms
3. Add Google Analytics
4. Implement online booking system
5. Add payment processing if needed
6. Set up SEO metadata
7. Connect to a CMS for blog management

## 🆘 Need Help?

- Check the [README.md](README.md) for more information
- Review the code comments in each file
- All components are well-documented and easy to modify

## 📄 License

This project is for Eryilmaz Appliance Repair Services.


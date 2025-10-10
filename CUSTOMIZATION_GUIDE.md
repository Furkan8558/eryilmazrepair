# Customization Guide

This guide will help you customize the website to match your brand and business needs.

## 🎨 Brand Customization

### 1. Company Information

**File:** `src/data/companyInfo.js`

Update all your business details:

```javascript
export const companyInfo = {
  name: "Your Company Name",
  tagline: "Your Tagline",
  phone: "(555) 123-4567",
  emergencyPhone: "(555) 123-4568",
  email: "info@yourcompany.com",
  address: {
    street: "Your Street Address",
    city: "Your City",
    state: "ST",
    zip: "12345",
    country: "USA"
  },
  hours: {
    weekday: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed"
  },
  social: {
    facebook: "https://facebook.com/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany"
  }
}
```

### 2. Colors & Branding

**File:** `tailwind.config.js`

Change your brand colors:

```javascript
colors: {
  primary: {
    50: '#your-color',   // Lightest
    100: '#your-color',
    200: '#your-color',
    300: '#your-color',
    400: '#your-color',
    500: '#your-color',  // Base color
    600: '#your-color',  // Main brand color
    700: '#your-color',
    800: '#your-color',
    900: '#your-color',  // Darkest
  }
}
```

**Tip:** Use a color palette generator like [Tailwind Color Generator](https://uicolors.app/create) to create a complete color scale.

### 3. Fonts

**File:** `index.html` and `tailwind.config.js`

1. Add Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Update font family in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
  heading: ['YourHeadingFont', 'sans-serif'],
}
```

### 4. Logo

1. Add your logo image to `public/images/logo.png`
2. Update `src/components/Header.jsx`:

```javascript
<Link to="/" className="flex items-center">
  <img src="/images/logo.png" alt="Company Logo" className="h-12" />
</Link>
```

## 📝 Content Customization

### 1. Services

**File:** `src/data/services.js`

Add, remove, or modify services:

```javascript
{
  id: "your-service-id",
  name: "Service Name",
  icon: "FaYourIcon", // From react-icons/fa
  shortDescription: "Brief description",
  description: "Detailed description",
  image: "/images/your-service.jpg",
  commonIssues: [
    "Issue 1",
    "Issue 2",
    // ...
  ],
  brands: ["Brand1", "Brand2", ...],
  price: "Starting at $XX"
}
```

### 2. Testimonials

**File:** `src/data/testimonials.js`

Add your real customer reviews:

```javascript
{
  id: 1,
  name: "Customer Name",
  location: "Location",
  rating: 5,
  date: "2024-01-15",
  service: "Service Type",
  text: "Review text...",
  avatar: "/images/avatars/customer.jpg"
}
```

### 3. Blog Posts

**File:** `src/data/blogPosts.js`

Add your blog content:

```javascript
{
  id: "post-slug",
  title: "Post Title",
  excerpt: "Brief summary...",
  content: "Full content...",
  image: "/images/blog/post-image.jpg",
  author: "Author Name",
  category: "Category",
  date: "2024-01-20",
  readTime: "5 min read",
  tags: ["tag1", "tag2"]
}
```

### 4. FAQ

**File:** `src/data/faq.js`

Update frequently asked questions:

```javascript
{
  id: 1,
  question: "Your question?",
  answer: "Your answer..."
}
```

### 5. Service Areas

**File:** `src/data/serviceAreas.js`

Update your service coverage:

```javascript
{
  id: 1,
  name: "Area Name",
  zip: "12345",
  description: "Description of service in this area",
  available: true
}
```

## 🖼️ Images

### Adding Images

1. Create folder structure in `public/`:
```
public/
├── images/
│   ├── logo.png
│   ├── services/
│   │   ├── refrigerator.jpg
│   │   ├── dishwasher.jpg
│   │   └── ...
│   ├── blog/
│   │   ├── post1.jpg
│   │   └── ...
│   ├── team/
│   │   ├── member1.jpg
│   │   └── ...
│   └── avatars/
│       └── ...
```

2. Reference images in your code:
```javascript
<img src="/images/services/refrigerator.jpg" alt="Refrigerator" />
```

### Image Requirements

- **Logo:** 200x80px (transparent PNG)
- **Service Images:** 800x600px (JPG/PNG)
- **Blog Images:** 1200x630px (JPG)
- **Team Photos:** 400x400px (JPG)
- **Avatars:** 200x200px (JPG/PNG)

## 🔧 Features Customization

### 1. Contact Form Integration

**File:** `src/components/ContactForm.jsx`

Replace the form submission with your email service:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  // Example with EmailJS
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  
  setSubmitted(true)
}
```

**Options:**
- [EmailJS](https://www.emailjs.com/) - Free tier available
- [Formspree](https://formspree.io/) - Simple form backend
- [SendGrid](https://sendgrid.com/) - Email API
- Custom backend API

### 2. Booking System

**File:** `src/components/BookingForm.jsx`

Integrate with scheduling service:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  // Send to your booking API
  const response = await fetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  // Handle response...
}
```

**Booking Solutions:**
- [Calendly](https://calendly.com/)
- [Acuity Scheduling](https://acuityscheduling.com/)
- [Square Appointments](https://squareup.com/us/en/appointments)
- Custom solution

### 3. Analytics

Add Google Analytics to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 4. Live Chat

Add live chat widget (e.g., Tawk.to, Intercom) in `index.html`:

```html
<!-- Live Chat Widget -->
<script>
  // Your chat widget code
</script>
```

### 5. SEO Optimization

**Update meta tags in each page:**

```javascript
// Use react-helmet or similar
<Helmet>
  <title>Page Title | Company Name</title>
  <meta name="description" content="Page description" />
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="Description" />
  <meta property="og:image" content="/images/og-image.jpg" />
</Helmet>
```

## 🎯 Advanced Customization

### Adding New Pages

1. Create new page in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```
3. Add to navigation in `src/components/Header.jsx`

### Creating New Components

1. Create component in `src/components/NewComponent.jsx`
2. Import and use in your pages:
```javascript
import NewComponent from '../components/NewComponent'
```

### Styling Tips

- Use existing Tailwind classes
- Custom styles go in `src/styles/index.css`
- Reuse component classes (`.btn-primary`, `.card`, etc.)

## 📱 Mobile Optimization

The site is already mobile-responsive, but you can adjust:

**File:** `tailwind.config.js`

```javascript
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

## 🔐 Environment Variables

Create `.env` file for sensitive data:

```env
VITE_API_URL=https://your-api.com
VITE_GOOGLE_MAPS_KEY=your-key
VITE_ANALYTICS_ID=your-id
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## ✅ Pre-Launch Checklist

- [ ] Update all company information
- [ ] Replace all placeholder images
- [ ] Customize colors and fonts
- [ ] Test contact form
- [ ] Test booking form
- [ ] Add real testimonials
- [ ] Update service areas
- [ ] Set up analytics
- [ ] Configure SEO meta tags
- [ ] Test on mobile devices
- [ ] Check all links
- [ ] Test in different browsers

## 🚀 Going Live

1. Build production version: `npm run build`
2. Test production build: `npm run preview`
3. Deploy to your hosting platform
4. Set up custom domain
5. Configure SSL certificate
6. Submit to Google Search Console
7. Create Google My Business listing

## 📞 Support

If you need help with customization:
- Review component code (well-commented)
- Check React documentation
- Tailwind CSS documentation
- React Router documentation

Happy customizing! 🎉


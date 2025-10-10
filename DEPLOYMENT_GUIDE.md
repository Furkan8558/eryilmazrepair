# 🚀 Website Deployment Guide

## Quick Overview

This guide covers deploying your Eryilmaz Appliance Repair website to production with:
- ✅ Free hosting (Vercel or Netlify)
- ✅ Custom domain (eryilmazrepair.tk)
- ✅ Free SSL/HTTPS security
- ✅ Global CDN for fast loading

---

## 🎯 Option 1: Vercel (Recommended) ⭐

Vercel is the creator of Next.js and has **exceptional React/Vite support**.

### Step 1: Prepare Your Repository

1. Make sure all your code is committed to Git
2. Push to GitHub (if not already):

```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

If you don't have a GitHub repo yet:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up** with your GitHub account (free)
3. **Click "Add New Project"**
4. **Import your GitHub repository**
5. Vercel will **auto-detect Vite** and configure everything!
6. **Add Environment Variable**:
   - Click "Environment Variables"
   - Add: `VITE_GOOGLE_MAPS_API_KEY` = `your_api_key`
7. **Click "Deploy"**

⏱️ Takes 1-2 minutes. You'll get a free vercel.app domain immediately!

### Step 3: Connect Your Custom Domain

1. In Vercel Dashboard, go to your project
2. Click **Settings** > **Domains**
3. Add your domain: `eryilmazrepair.tk` and `www.eryilmazrepair.tk`
4. Vercel will show you DNS records to add

### Step 4: Configure DNS (Freenom)

1. Go to [Freenom Dashboard](https://my.freenom.com)
2. Go to **Services** > **My Domains** > **Manage Domain**
3. Click **Manage Freenom DNS**
4. Add these records (from Vercel):

```
Type: A
Name: @
Value: 76.76.19.19
TTL: 3600

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

5. Wait 5-60 minutes for DNS propagation
6. Vercel will automatically enable HTTPS!

---

## 🎯 Option 2: Netlify (Also Excellent)

### Step 1: Deploy to Netlify

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up** with GitHub (free)
3. **Click "Add new site" > "Import an existing project"**
4. **Connect to GitHub** and select your repository
5. **Build settings** (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Add Environment Variables**:
   - Click "Show advanced"
   - Add: `VITE_GOOGLE_MAPS_API_KEY` = `your_api_key`
7. **Click "Deploy"**

### Step 2: Connect Custom Domain

1. Go to **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Enter: `eryilmazrepair.tk`
4. Click **Verify**

### Step 3: Configure DNS

1. Go to Freenom DNS settings
2. Add these records:

```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600

Type: CNAME
Name: www
Value: your-site-name.netlify.app
TTL: 3600
```

3. In Netlify, enable **HTTPS** (under Domain settings)

---

## 🎯 Option 3: GitHub Pages (If You Insist)

**⚠️ Warning**: More complex for React apps, requires extra configuration.

### Step 1: Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these fields:

```json
{
  "homepage": "https://eryilmazrepair.tk",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Update vite.config.js

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/',  // Important for custom domain
  server: {
    port: 3000,
    open: true
  }
})
```

### Step 4: Create public/CNAME File

The CNAME file already exists with `eryilmazrepair.tk` - perfect!

### Step 5: Deploy

```bash
npm run deploy
```

### Step 6: Configure GitHub

1. Go to your GitHub repo > Settings > Pages
2. Source: Select **gh-pages** branch
3. Custom domain: Enter `eryilmazrepair.tk`
4. Check **Enforce HTTPS**

### Step 7: Configure DNS

Add these A records at Freenom:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: yourusername.github.io
```

---

## 📊 Comparison Table

| Feature | Vercel | Netlify | GitHub Pages |
|---------|--------|---------|--------------|
| **Ease of Setup** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **React/Vite Support** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Auto Deploy** | ✅ Yes | ✅ Yes | ⚠️ Manual |
| **HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto |
| **Env Variables** | ✅ Easy | ✅ Easy | ❌ No |
| **Build Time** | Fast | Fast | N/A |
| **Analytics** | ✅ Built-in | ✅ Built-in | ❌ No |
| **Best For** | Modern apps | All sites | Simple static |

---

## ⚡ Quick Start: My Recommendation

**For your business website, use Vercel:**

```bash
# 1. Commit your code
git add .
git commit -m "Ready for deployment"
git push

# 2. Go to vercel.com
# 3. Import from GitHub
# 4. Add VITE_GOOGLE_MAPS_API_KEY
# 5. Deploy!
```

Done in 5 minutes! 🎉

---

## 🔒 Security Checklist

After deployment, verify:

- ✅ HTTPS is enabled (look for padlock 🔒 in browser)
- ✅ Environment variables are set (Google Maps works)
- ✅ All pages load correctly
- ✅ Forms work (Contact form, Booking form)
- ✅ Mobile responsive (test on phone)
- ✅ Service areas page works

---

## 🛠️ Troubleshooting

### Problem: DNS not updating
**Solution**: DNS changes can take up to 24 hours. Check at [whatsmydns.net](https://www.whatsmydns.net)

### Problem: HTTPS not working
**Solution**: 
- Wait 24 hours after DNS is working
- Make sure you added both @ and www records
- Contact hosting support (Vercel/Netlify have great support)

### Problem: Google Maps not showing
**Solution**: Make sure environment variable is set in hosting dashboard

### Problem: 404 on page refresh
**Solution**: 
- **Vercel/Netlify**: Automatically handled ✅
- **GitHub Pages**: Create `public/404.html` and redirect to index

### Problem: Images not loading
**Solution**: Make sure images are in `public/images/` folder before building

---

## 📈 Post-Deployment Tasks

After your site is live:

1. **Test Everything**:
   - Visit all pages
   - Submit contact form (test)
   - Check mobile view
   - Test all navigation links

2. **SEO Setup**:
   - Add Google Analytics
   - Submit to Google Search Console
   - Create sitemap.xml

3. **Performance**:
   - Test at [PageSpeed Insights](https://pagespeed.web.dev)
   - Optimize images if needed

4. **Monitoring**:
   - Set up uptime monitoring (free at [UptimeRobot](https://uptimerobot.com))

---

## 💡 Pro Tips

1. **Use `www` subdomain**: More professional, add both @ and www records
2. **Enable Analytics**: Both Vercel and Netlify have free analytics
3. **Set up Redirects**: Redirect non-www to www (or vice versa)
4. **Use Lighthouse**: Test your site's performance regularly
5. **Keep API Keys Secret**: Never commit `.env` file!

---

## 🆘 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Freenom Support**: [support.freenom.com](https://support.freenom.com)

---

## 📋 Deployment Checklist

Before deploying, make sure:

- [ ] All content is updated (company info, services, etc.)
- [ ] Google Maps API key is ready
- [ ] Images are added to `public/images/`
- [ ] Git repository is up to date
- [ ] `.env` is in `.gitignore` (✅ already done)
- [ ] Website works locally (`npm run dev`)
- [ ] Build works (`npm run build`)

After deploying:

- [ ] HTTPS is enabled
- [ ] Custom domain is connected
- [ ] All pages load correctly
- [ ] Forms are working
- [ ] Google Maps shows correctly
- [ ] Mobile view looks good
- [ ] Contact information is correct

---

**🎉 Ready to Deploy!**

Choose Vercel or Netlify, follow the steps, and your website will be live in minutes!


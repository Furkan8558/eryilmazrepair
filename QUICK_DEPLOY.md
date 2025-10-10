# ⚡ Quick Deploy Guide

## 🚀 Deploy in 5 Minutes

### Prerequisites
- [ ] Code is working locally (`npm run dev`)
- [ ] Google Maps API key ready
- [ ] Git repository exists

---

## Option A: Vercel (Easiest) ⭐

### 1️⃣ Push to GitHub (if not already)
```bash
git add .
git commit -m "Ready for deployment"
git push
```

### 2️⃣ Deploy
1. Visit [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Select your repository
4. Add environment variable:
   - **Name**: `VITE_GOOGLE_MAPS_API_KEY`
   - **Value**: Your API key
5. Click **Deploy**

### 3️⃣ Connect Domain
1. After deployment, go to **Settings** > **Domains**
2. Add: `eryilmazrepair.tk`
3. Copy the DNS records shown

### 4️⃣ Update DNS at Freenom
1. Go to [my.freenom.com](https://my.freenom.com)
2. Manage your domain
3. Add Vercel's DNS records
4. Wait 10-30 minutes

### ✅ Done! Your site is live with HTTPS!

---

## Option B: Netlify

### 1️⃣ Deploy
1. Visit [app.netlify.com/start](https://app.netlify.com/start)
2. Connect to GitHub
3. Select repository
4. Build settings (auto-detected):
   - Build: `npm run build`
   - Publish: `dist`
5. Add environment variable:
   - **Key**: `VITE_GOOGLE_MAPS_API_KEY`
   - **Value**: Your API key
6. Click **Deploy**

### 2️⃣ Connect Domain
1. Go to **Domain settings**
2. Add custom domain: `eryilmazrepair.tk`
3. Follow DNS instructions

### ✅ Done!

---

## 🎯 What You Get

- ✅ **Live website** at eryilmazrepair.tk
- ✅ **Free HTTPS** (secure padlock 🔒)
- ✅ **Global CDN** (fast worldwide)
- ✅ **Auto-deployment** (push to GitHub = auto update)
- ✅ **Environment variables** (Google Maps works)

---

## 🔍 Verify Deployment

After deployment, check:

1. **Visit your site**: https://eryilmazrepair.tk
2. **Check HTTPS**: Look for 🔒 padlock
3. **Test pages**: Click through all pages
4. **Test map**: Go to Contact page - map should show
5. **Test mobile**: Open on phone
6. **Test forms**: Try booking/contact forms

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Domain not working | Wait 24 hours for DNS propagation |
| Map not showing | Check env variable in dashboard |
| 404 on refresh | vercel.json/netlify.toml should fix this |
| Build fails | Run `npm run build` locally first |

---

## 📱 After Going Live

### Immediate
- [ ] Test all pages
- [ ] Share with friends/family
- [ ] Test on mobile devices

### Within 1 Week  
- [ ] Add Google Analytics
- [ ] Submit to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Add social media links

### Ongoing
- [ ] Update content regularly
- [ ] Add real customer reviews
- [ ] Create blog posts
- [ ] Monitor performance

---

## 💡 Pro Tips

1. **Both @ and www**: Add both versions of your domain
2. **Redirect**: Set www to redirect to non-www (or vice versa)
3. **Preview**: Both platforms give you preview URLs for testing
4. **Rollback**: Easy to rollback if something breaks
5. **Analytics**: Enable built-in analytics in dashboard

---

**Need detailed instructions?** See `DEPLOYMENT_GUIDE.md`

**Having issues?** Check the troubleshooting section

---

🎉 **That's it! Your website will be live in minutes!**


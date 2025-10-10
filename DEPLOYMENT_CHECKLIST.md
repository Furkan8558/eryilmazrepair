# ✅ Deployment Checklist

Use this checklist to ensure everything is ready before deploying.

---

## 📋 Pre-Deployment Checklist

### Code Ready
- [x] Website builds successfully (`npm run build`)
- [x] No console errors locally (`npm run dev`)
- [x] All pages load correctly
- [x] Mobile responsive design works
- [x] React Router navigation works
- [x] Forms display correctly

### Configuration Files ✅
- [x] `vercel.json` - Vercel configuration
- [x] `netlify.toml` - Netlify configuration
- [x] `CNAME` - Domain configuration (eryilmazrepair.tk)
- [x] `.gitignore` - Protects .env file
- [x] `public/` folder created
- [x] `public/CNAME` - Domain file in public folder

### Content to Customize
- [ ] Update `src/data/companyInfo.js` with your details
- [ ] Update `src/data/services.js` with your services
- [ ] Update `src/data/testimonials.js` with real reviews
- [ ] Add your logo to `public/images/logo.png`
- [ ] Add service photos to `public/images/`

### Google Maps Setup
- [ ] Have Google Maps API key ready
- [ ] Maps Embed API enabled in Google Cloud
- [ ] API key restricted (optional but recommended)

### Git Repository
- [ ] Code committed to Git
- [ ] Repository pushed to GitHub
- [ ] Repository is public or accessible

---

## 🚀 Deployment Steps

### Option A: Vercel (Recommended) ⭐

#### Step 1: Prepare
```bash
# Make sure everything is committed
git add .
git commit -m "Ready for production deployment"
git push origin main
```

#### Step 2: Deploy
- [ ] Go to [vercel.com/new](https://vercel.com/new)
- [ ] Sign in with GitHub
- [ ] Import your repository
- [ ] Configure:
  - Framework: Vite (auto-detected)
  - Build command: `npm run build`
  - Output directory: `dist`
- [ ] Add environment variable:
  - Name: `VITE_GOOGLE_MAPS_API_KEY`
  - Value: [Your API Key]
- [ ] Click "Deploy"
- [ ] Wait 2-3 minutes ⏱️

#### Step 3: Verify Deployment
- [ ] Visit the generated vercel.app URL
- [ ] Check all pages load
- [ ] Verify Google Maps shows on Contact page
- [ ] Test forms
- [ ] Check mobile view

#### Step 4: Connect Custom Domain
- [ ] In Vercel dashboard, go to Settings > Domains
- [ ] Add domain: `eryilmazrepair.tk`
- [ ] Add domain: `www.eryilmazrepair.tk`
- [ ] Copy the DNS records shown

#### Step 5: Configure DNS at Freenom
- [ ] Go to [my.freenom.com](https://my.freenom.com)
- [ ] Services > My Domains > Manage Domain
- [ ] Click "Manage Freenom DNS"
- [ ] Add A record:
  - Type: `A`
  - Name: `@`
  - Target: `76.76.19.19`
  - TTL: `3600`
- [ ] Add CNAME record:
  - Type: `CNAME`
  - Name: `www`
  - Target: `cname.vercel-dns.com`
  - TTL: `3600`
- [ ] Save changes

#### Step 6: Wait and Verify
- [ ] Wait 10-30 minutes for DNS propagation
- [ ] Visit https://eryilmazrepair.tk
- [ ] Verify HTTPS is active (🔒 padlock)
- [ ] Test all functionality

---

### Option B: Netlify

#### Step 1: Prepare
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Deploy
- [ ] Go to [app.netlify.com/start](https://app.netlify.com/start)
- [ ] Connect to GitHub
- [ ] Select repository
- [ ] Build settings (auto-detected):
  - Build command: `npm run build`
  - Publish directory: `dist`
- [ ] Add environment variable:
  - Key: `VITE_GOOGLE_MAPS_API_KEY`
  - Value: [Your API Key]
- [ ] Click "Deploy site"

#### Step 3: Connect Domain
- [ ] Go to Domain settings
- [ ] Add custom domain: `eryilmazrepair.tk`
- [ ] Follow DNS instructions shown

#### Step 4: Configure DNS
- [ ] Add A record at Freenom:
  - Type: `A`
  - Name: `@`
  - Target: `75.2.60.5`
- [ ] Add CNAME:
  - Type: `CNAME`
  - Name: `www`
  - Target: `[your-site].netlify.app`

#### Step 5: Enable HTTPS
- [ ] In Netlify: Domain Settings > HTTPS
- [ ] Enable "Force HTTPS"
- [ ] Wait for certificate provisioning

---

## 🔍 Post-Deployment Verification

### Immediate Checks (< 5 minutes)
- [ ] Site loads at your domain
- [ ] HTTPS is enabled (look for 🔒)
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Google Maps displays
- [ ] Contact form displays
- [ ] Booking form displays
- [ ] Service cards show correctly
- [ ] Testimonials display
- [ ] Footer links work

### Mobile Testing (< 10 minutes)
- [ ] Open on phone
- [ ] Test hamburger menu
- [ ] Check all pages on mobile
- [ ] Verify forms work on mobile
- [ ] Check map on mobile
- [ ] Test phone number click-to-call

### Performance Testing
- [ ] Test at [PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Performance score > 80
- [ ] Mobile score > 80
- [ ] No critical errors
- [ ] Load time < 3 seconds

### SEO Checks
- [ ] Title tags present
- [ ] Meta descriptions present
- [ ] Images have alt text
- [ ] No broken links
- [ ] Sitemap accessible (if created)

---

## 🎯 First Week Tasks

### Setup & Integration
- [ ] Add Google Analytics
  - Create GA4 property
  - Add tracking code
  - Verify tracking works
- [ ] Submit to Google Search Console
  - Verify domain ownership
  - Submit sitemap
  - Check for errors
- [ ] Set up Google Business Profile
  - Claim business
  - Add photos
  - Add hours & services
- [ ] Connect social media
  - Add social links in footer
  - Share website on socials

### Content Updates
- [ ] Add real customer testimonials
- [ ] Upload company logo
- [ ] Add service photos
- [ ] Write first blog post
- [ ] Update FAQ with real questions

### Testing & Monitoring
- [ ] Set up UptimeRobot (free monitoring)
- [ ] Test from different devices
- [ ] Get feedback from family/friends
- [ ] Fix any reported issues
- [ ] Check analytics daily

---

## 📊 Success Metrics

After deployment, you should see:
- ✅ Website loads in < 2 seconds
- ✅ 100% uptime
- ✅ HTTPS enabled
- ✅ Mobile responsive
- ✅ All features working
- ✅ Forms submitting (when integrated)
- ✅ Google Maps displaying
- ✅ Good Lighthouse scores

---

## 🆘 Troubleshooting Common Issues

### Issue: Domain not resolving
**Check:**
- [ ] DNS records are correct
- [ ] Wait 24-48 hours for propagation
- [ ] Use [whatsmydns.net](https://whatsmydns.net) to check
- [ ] Clear browser cache

**Solution:** DNS takes time. If still not working after 48 hours, check DNS records.

### Issue: HTTPS not working
**Check:**
- [ ] Domain is fully propagated
- [ ] Certificate provisioning complete
- [ ] "Force HTTPS" is enabled

**Solution:** Wait 24 hours after DNS works, then enable HTTPS in dashboard.

### Issue: Google Maps not showing
**Check:**
- [ ] Environment variable is set
- [ ] API key is correct
- [ ] Maps Embed API is enabled
- [ ] Check browser console for errors

**Solution:** Verify env variable in hosting dashboard, test API key.

### Issue: 404 on page refresh
**Check:**
- [ ] vercel.json is committed (Vercel)
- [ ] netlify.toml is committed (Netlify)
- [ ] Rewrites are configured

**Solution:** These files should handle it. Verify they're in your repository.

### Issue: Build fails
**Check:**
- [ ] `npm run build` works locally
- [ ] All dependencies in package.json
- [ ] No console errors
- [ ] Environment variables set

**Solution:** Run build locally, fix errors, then redeploy.

---

## 💡 Pro Tips

### Performance
1. Optimize images before uploading (< 200KB each)
2. Use WebP format for better compression
3. Enable caching (already configured)
4. Monitor with Lighthouse regularly
5. Use lazy loading for images

### SEO
1. Add meta descriptions to all pages
2. Use semantic HTML
3. Add schema markup for local business
4. Create and submit sitemap
5. Build backlinks from directories

### Security
1. Never commit .env file
2. Restrict API keys in Google Cloud
3. Enable 2FA on all accounts
4. Regular security audits
5. Keep dependencies updated

### Maintenance
1. Update content regularly
2. Add blog posts monthly
3. Monitor uptime
4. Check analytics weekly
5. Respond to form submissions promptly

---

## 📚 Additional Resources

### Documentation
- [ ] Read `QUICK_DEPLOY.md` for overview
- [ ] Review `DEPLOYMENT_GUIDE.md` for details
- [ ] Check `GOOGLE_MAPS_SETUP.md` for maps
- [ ] Review `HOSTING_SUMMARY.md` for comparison

### External Links
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Freenom Support](https://my.freenom.com)
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)

---

## ✅ Final Pre-Launch Checklist

Before going live, confirm:
- [ ] All personal info updated
- [ ] Phone numbers correct
- [ ] Email addresses work
- [ ] Address is correct
- [ ] Business hours accurate
- [ ] Services list complete
- [ ] Prices up to date (if shown)
- [ ] All links tested
- [ ] Forms tested
- [ ] Mobile tested
- [ ] Multiple browsers tested
- [ ] Google Maps shows correct location

---

## 🎉 Launch Day!

When you're ready:
1. ✅ Complete all items above
2. ✅ Deploy to production
3. ✅ Verify everything works
4. ✅ Share with the world!

**Congratulations on launching your website! 🎊**

---

**Need help?** Refer to the detailed guides or check the troubleshooting sections.

**Ready to deploy?** Start with `QUICK_DEPLOY.md`!


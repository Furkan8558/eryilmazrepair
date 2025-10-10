# 🗺️ Google Maps Integration Setup Guide

## Quick Setup (3 Steps)

### Step 1: Enable Google Maps API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing one)
3. Enable the **Maps Embed API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Maps Embed API"
   - Click "Enable"

### Step 2: Get Your API Key

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy your API key (it will look like: `AIzaSyB...`)
4. **Optional but Recommended**: Click "Restrict Key"
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domain (e.g., `yourwebsite.com/*`, `localhost:3000/*`)
   - Under "API restrictions", select "Maps Embed API"
   - Click "Save"

### Step 3: Add API Key to Your Project

Create a file named `.env` in your project root (same folder as `package.json`):

```bash
VITE_GOOGLE_MAPS_API_KEY=AIzaSyB_your_actual_api_key_here
```

**Important**: Replace `AIzaSyB_your_actual_api_key_here` with your actual API key!

### Step 4: Restart Development Server

```bash
npm run dev
```

## ✅ Verification

Visit your Contact page at `http://localhost:3000/contact` and you should see the map!

---

## 🔐 Security Notes

- ✅ The `.env` file is already added to `.gitignore` (won't be committed to git)
- ✅ Never share your API key publicly
- ✅ Restrict your API key in Google Cloud Console to prevent unauthorized use
- ✅ For production, set the environment variable in your hosting platform (Vercel, Netlify, etc.)

## 🚀 Production Deployment

When deploying, add the environment variable to your hosting platform:

### Vercel
1. Go to Project Settings > Environment Variables
2. Add: `VITE_GOOGLE_MAPS_API_KEY` = `your_key_here`
3. Redeploy

### Netlify
1. Go to Site Settings > Build & Deploy > Environment
2. Add: `VITE_GOOGLE_MAPS_API_KEY` = `your_key_here`
3. Redeploy

---

## 🎨 Customization Options

### Change Map Height

In `src/pages/Contact.jsx`, find:
```jsx
<div className="rounded-lg h-64 overflow-hidden shadow-md">
```

Change `h-64` to:
- `h-48` (shorter)
- `h-80` (taller)
- `h-96` (very tall)

### Change Map Style

Add parameters to the iframe src:
```jsx
src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=...&zoom=15&maptype=roadmap`}
```

Parameters:
- `zoom=15` (10-20, higher = more zoomed in)
- `maptype=roadmap` or `satellite` or `hybrid`

---

## 🛠️ Troubleshooting

### Map shows "For development purposes only"
- You need to enable billing in Google Cloud Console
- Don't worry - Google provides $200/month free credit (plenty for small businesses)

### Map doesn't show
1. Check console for errors (F12 in browser)
2. Verify API key is correct in `.env` file
3. Make sure Maps Embed API is enabled in Google Cloud
4. Restart dev server after adding `.env`

### Environment variable not working
- Vite requires variables to start with `VITE_`
- Must restart dev server after changing `.env`
- Don't use quotes around the value in `.env`

---

## 💡 Alternative: Use Address Without API Key

If you don't want to set up API key right now, you can use a simpler approach:

```jsx
<iframe
  title="Location"
  src="https://www.google.com/maps?q=Soğanlı+mah.+7.+güngör+sok.+No:19/B+Osmangazi+Bursa&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
></iframe>
```

This uses the basic Google Maps embed without requiring an API key, but it's less customizable.

---

**Questions?** Check the [Google Maps Platform Documentation](https://developers.google.com/maps/documentation/embed)


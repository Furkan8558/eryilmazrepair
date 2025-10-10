# Public Assets Folder

This folder contains static assets that will be copied to the build output as-is.

## Current Files

- `CNAME` - Custom domain configuration for GitHub Pages
- `images/` - Company images, logos, service photos (add your images here)

## How to Add Images

1. Create subfolders as needed:
   - `images/logo.png` - Company logo
   - `images/services/` - Service-specific images
   - `images/team/` - Team member photos
   - `images/avatars/` - Customer testimonial avatars

2. Reference in code:
   ```jsx
   <img src="/images/logo.png" alt="Company Logo" />
   ```

3. Optimize images before adding:
   - Compress to reduce file size
   - Use WebP format when possible
   - Recommended max size: 200KB per image

## Notes

- Files in this folder are served from the root path
- Do not put React components here
- Vite will copy these files to `dist/` during build


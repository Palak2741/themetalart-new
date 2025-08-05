# 🚀 Hostinger Static Website Deployment Guide

## ✅ What's Ready

Your Next.js project has been successfully configured for **static hosting** on Hostinger with:

- ✅ **Static Export**: All pages converted to static HTML
- ✅ **Form Integration**: Contact forms configured for Formspree
- ✅ **Newsletter**: Newsletter signup configured for static hosting
- ✅ **Git Repository**: Local Git repo initialized with build files
- ✅ **Build Folder**: Complete static build in `/build` directory

## 📁 Build Contents

The `build/` folder contains:
- `index.html` - Homepage
- `about/index.html` - About page
- `contact/index.html` - Contact page
- `404.html` - 404 error page
- `_next/static/` - CSS, JS, and media files
- `sitemap.xml` - SEO sitemap
- `robots.txt` - SEO robots file

## 🔧 Setup Formspree (Required)

Before deploying, you need to set up form handling:

### 1. Contact Form Setup
1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form for "Contact"
4. Copy your form ID (e.g., `xrgjabrg`)
5. Update `app/contact/page.tsx`:
   ```javascript
   // Replace YOUR_FORM_ID with your actual form ID
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### 2. Newsletter Form Setup
1. Create another form in Formspree for "Newsletter"
2. Copy the newsletter form ID
3. Update `components/Footer.tsx`:
   ```javascript
   // Replace YOUR_NEWSLETTER_FORM_ID with your actual form ID
   const response = await fetch('https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID', {
   ```

## 🌐 Deploy to Hostinger

### Option 1: Git Repository (Recommended)

1. **Create GitHub Repository:**
   ```bash
   # Add your GitHub repo as remote
   git remote add origin https://github.com/yourusername/themetalart.git
   git push -u origin main
   ```

2. **On Hostinger:**
   - Go to hPanel → Git
   - Connect your GitHub repository
   - Set deployment branch to `main`
   - Set deployment directory to `build/`

### Option 2: Direct Upload

1. **Zip the build folder:**
   ```bash
   # In PowerShell
   Compress-Archive -Path build -DestinationPath themetalart-build.zip
   ```

2. **Upload to Hostinger:**
   - Go to hPanel → File Manager
   - Navigate to `public_html/`
   - Upload and extract `themetalart-build.zip`
   - Move all files from `build/` to `public_html/`

### Option 3: FTP Upload

1. **Use FTP client (FileZilla):**
   - Host: Your Hostinger FTP hostname
   - Username: Your Hostinger FTP username
   - Password: Your Hostinger FTP password
   - Upload all files from `build/` to `public_html/`

## 🔄 Update Process

### For Future Updates:

1. **Make changes to your code**
2. **Rebuild:**
   ```bash
   npm run build
   ```
3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```
4. **Hostinger will automatically deploy** (if using Git method)

## ⚠️ Important Notes

- **Formspree Setup**: You MUST set up Formspree before deploying
- **Domain Configuration**: Point your domain to the correct directory
- **SSL Certificate**: Enable SSL in Hostinger hPanel
- **Custom Domain**: Configure your domain in Hostinger DNS settings

## 🆘 Troubleshooting

### Forms Not Working?
- Check Formspree form IDs are correct
- Verify Formspree account is active
- Check browser console for errors

### Images Not Loading?
- Ensure all images are in `public/` folder
- Check file paths are correct

### 404 Errors?
- Verify all files are in `public_html/`
- Check `.htaccess` file if needed

## 📞 Support

If you need help:
1. Check Hostinger documentation
2. Verify Formspree setup
3. Check browser developer tools for errors

---

**Your static website is ready for deployment! 🎉** 
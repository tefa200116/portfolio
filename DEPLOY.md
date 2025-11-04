# 🚀 Deployment Guide - GitHub Pages

## Step-by-Step: Get Your Portfolio Online

### Part 1: Prepare Your Files ✅

1. **Customize your content** (see CUSTOMIZE.md)
   - Replace "Your Name" with your actual name
   - Update email address
   - Add your images to the `images/` folder
   - Update project descriptions

2. **Test locally**
   - Open `index.html` in your web browser
   - Click through all pages
   - Make sure everything looks good
   - Verify all images load correctly

### Part 2: Upload to GitHub 📤

#### Option A: Using GitHub Website (Easiest!)

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com
   - Click "Sign up"

2. **Create a new repository**
   - Click the "+" icon (top right) → "New repository"
   - Repository name: `portfolio` (or anything you like)
   - Description: "My creative portfolio website"
   - Make it **Public** ⚠️ (important for GitHub Pages!)
   - ❌ Don't check "Add a README file" (we already have one)
   - Click "Create repository"

3. **Upload your files**
   - On the repository page, click "uploading an existing file"
   - Open your `june_portfolio` folder in File Explorer
   - Select ALL files and folders (Ctrl+A)
   - Drag and drop into GitHub
   - Scroll down and click "Commit changes"
   - Wait for upload to complete

#### Option B: Using Git Command Line

```bash
# Navigate to your folder
cd C:/Users/minec/OneDrive/Desktop/june_portfolio

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio website"

# Rename branch to main
git branch -M main

# Connect to GitHub (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git push -u origin main
```

### Part 3: Enable GitHub Pages 🌐

1. **Go to Settings**
   - In your repository, click the "Settings" tab

2. **Find Pages**
   - In the left sidebar, scroll down and click "Pages"

3. **Configure Pages**
   - Under "Source", select **main** (branch)
   - Under folder, select **/ (root)**
   - Click **Save**

4. **Wait for deployment**
   - GitHub will show a message: "Your site is ready to be published"
   - Wait 1-2 minutes, then refresh the page
   - You'll see: "Your site is live at https://YOUR-USERNAME.github.io/portfolio/"

5. **Visit your site!**
   - Click the URL or copy it
   - Your portfolio is now live! 🎉

### Part 4: Share Your Portfolio 🎯

Your portfolio URL will be:
```
https://YOUR-USERNAME.github.io/portfolio/
```

Share this URL with:
- Potential clients
- On your resume
- In your email signature
- On LinkedIn
- On social media

---

## 🔄 Making Updates

After your site is live, to make changes:

1. Edit the files on your computer
2. Go back to your GitHub repository
3. Click "Add file" → "Upload files"
4. Upload the changed files (they'll replace the old ones)
5. Click "Commit changes"
6. Wait 1-2 minutes for GitHub Pages to rebuild
7. Refresh your site to see changes!

**Or using Git:**
```bash
git add .
git commit -m "Update portfolio content"
git push
```

---

## 🎨 Optional: Custom Domain

Want to use your own domain (like www.yourname.com)?

1. Buy a domain from GoDaddy, Namecheap, Google Domains, etc.
2. In GitHub Pages settings, enter your custom domain
3. Update your domain's DNS settings (GitHub provides instructions)
4. Wait 24-48 hours for DNS to propagate

---

## ❓ Troubleshooting

**Site not loading?**
- Make sure repository is set to Public
- Check that GitHub Pages is enabled in Settings → Pages
- Wait a few minutes and try again
- Clear your browser cache

**Images not showing?**
- Check file paths are correct (case-sensitive!)
- Make sure images are in the `images/` folder
- Verify images uploaded to GitHub

**404 Error?**
- Make sure you're using the correct URL
- Check that `index.html` is in the root folder
- Repository must be Public

**CSS not working?**
- The site uses Tailwind CSS via CDN (internet connection required)
- Check browser console for errors

---

## 📊 GitHub Pages Features

✅ Free hosting
✅ Automatic HTTPS
✅ Fast CDN
✅ Easy updates
✅ Professional URLs
✅ Custom domain support

---

## 🎉 You're All Set!

Your portfolio is now:
- ✅ Live on the internet
- ✅ Shareable via URL
- ✅ Professional and responsive
- ✅ Easy to update

**Next steps:**
1. Share your portfolio URL with prospects
2. Add the URL to your resume and LinkedIn
3. Update content regularly with new projects
4. Consider adding Google Analytics to track visitors

Good luck! 🚀


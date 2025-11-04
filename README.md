# Portfolio Website

A beautiful, modern portfolio website showcasing creative work in lettering, murals, and design.

## 🌐 Live Demo

Visit the live site: [Your Portfolio URL will be here after deployment]

## ✨ Features

- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, minimalist design with warm color palette
- **Three Pages**:
  - **Home**: Hero section, specializations, personal introduction
  - **Work**: Portfolio grid with project showcases
  - **About**: Personal bio, fun facts, contact information
- **Smooth Animations**: Fade-in effects and hover interactions
- **Accessibility**: Skip-to-content links, semantic HTML, high contrast

## 🎨 Customization Guide

### 1. Update Personal Information

#### In all files (index.html, work.html, about.html):

**Navigation Logo:**
- Find: `Portfolio`
- Replace with: Your name or brand name

**Email Address:**
- Find: `hello@yourportfolio.com`
- Replace with: Your actual email address

#### In index.html:
- Line 187: Replace `Your Name` with your actual name
- Line 190: Update the tagline/description

#### In about.html:
- Line 209: Replace `Your Name` with your actual name
- Line 213: Update your location and bio intro
- Lines 218-234: Customize your bio paragraphs with your story

### 2. Add Your Images

#### Portrait Photo (About Page):
1. Add your portrait photo to the `images/` folder
2. In `about.html`, find line 199-205 (the placeholder div)
3. Replace the entire placeholder div with:
```html
<img src="images/your-portrait.jpg" alt="Portrait of Your Name" class="w-full h-full object-cover">
```

#### Project Images (Work Page):
1. Add your project photos to the `images/` folder (recommended size: 600x450px or similar 4:3 ratio)
2. In `work.html`, find each project card (search for `https://via.placeholder.com`)
3. Replace the placeholder image URLs with your actual images:

```html
<!-- Before -->
<img src="https://via.placeholder.com/600x450/FF6B6B/FFFFFF?text=Lettering+Project"

<!-- After -->
<img src="images/project1.jpg"
```

4. Update project information:
   - Project titles
   - Client names and locations
   - Descriptions
   - Links (currently point to `#project-1`, etc.)

### 3. Customize Colors

The site uses a warm color palette. To change colors, edit the Tailwind config in each HTML file's `<script>` tag:

```javascript
colors: {
    coral: '#FF6B6B',        // Main accent color
    'soft-coral': '#FF8E8E',
    cream: '#FFF4E6',
    'pale-yellow': '#FFE5B4',
    'warm-white': '#FAF9F6',
    // ... add or modify colors here
}
```

### 4. Update Fun Facts (About Page)

In `about.html`, lines 268-310, customize the four fun fact cards with your own interests and personality!

## 📁 Folder Structure

```
june_portfolio/
├── index.html          # Homepage
├── work.html          # Portfolio/Work page
├── about.html         # About page
├── images/            # Your images folder (create this)
│   ├── portrait.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   └── ...
└── README.md          # This file
```

## 🚀 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name it: `portfolio` (or any name you prefer)
4. Make it **Public**
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL files from your `june_portfolio` folder
3. Add a commit message: "Initial portfolio upload"
4. Click "Commit changes"

**Option B: Using Git Command Line**
```bash
cd C:/Users/minec/OneDrive/Desktop/june_portfolio
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings**
2. Scroll down to **Pages** (in the left sidebar)
3. Under "Source", select **main** branch
4. Select **/ (root)** folder
5. Click **Save**
6. Wait 1-2 minutes, then refresh the page
7. Your site URL will appear: `https://YOUR-USERNAME.github.io/portfolio/`

## 📸 Before You Deploy - Image Checklist

- [ ] Create `images/` folder
- [ ] Add your portrait photo
- [ ] Add 9 project photos (or adjust the number of project cards)
- [ ] Update all image paths in HTML files
- [ ] Update all alt text for accessibility
- [ ] Test locally by opening index.html in your browser

## 🎯 Sharing Your Portfolio

Once deployed, share your URL with prospects:
```
https://YOUR-USERNAME.github.io/portfolio/
```

**Pro Tip**: You can also set up a custom domain name in GitHub Pages settings!

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Google Fonts (Playfair Display + Montserrat)

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📝 License

Feel free to use this portfolio template for your personal use!

---

**Need help?** If you encounter any issues, check that:
1. All file paths are correct (case-sensitive!)
2. Images are properly sized and optimized
3. Email links are updated with your actual email
4. The repository is set to Public for GitHub Pages

Good luck with your portfolio! 🎨✨


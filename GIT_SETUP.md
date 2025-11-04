# 🚀 Git Setup Guide - Quick & Easy

## Current Folder Structure ✅
Everything is already in one folder and ready for Git!

```
june_portfolio/              ← This is your main folder (run git init here)
├── index.html
├── work.html
├── about.html
├── images/                  ← Subfolder (Git tracks this automatically)
│   └── (your images go here)
├── README.md
├── START_HERE.md
├── CUSTOMIZE.md
├── DEPLOY.md
└── .gitignore              ← Already configured!
```

---

## 🎯 Method 1: Using Git Commands (Recommended)

### Step 1: Open Terminal/PowerShell in the folder
```bash
cd C:\Users\minec\OneDrive\Desktop\june_portfolio
```

### Step 2: Initialize Git
```bash
git init
```

### Step 3: Add all files
```bash
git add .
```

### Step 4: Create your first commit
```bash
git commit -m "Initial portfolio website"
```

### Step 5: Connect to GitHub

**First, create a new repository on GitHub:**
1. Go to https://github.com
2. Click "+" → "New repository"
3. Name: `portfolio` (or any name)
4. Make it **Public**
5. Don't add README (we have one)
6. Click "Create repository"

**Then run these commands (GitHub will show you these):**
```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 6: Enable GitHub Pages
1. Go to your repo Settings → Pages
2. Source: main branch, / (root)
3. Save
4. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

---

## 🎯 Method 2: GitHub Desktop (Easiest - No Commands!)

### Step 1: Download GitHub Desktop
- Download from: https://desktop.github.com
- Install and sign in with your GitHub account

### Step 2: Add your repository
1. Click "File" → "Add local repository"
2. Choose folder: `C:\Users\minec\OneDrive\Desktop\june_portfolio`
3. GitHub Desktop will say "This directory does not appear to be a Git repository"
4. Click "create a repository" or "Initialize Git Repository"

### Step 3: Make your first commit
1. All files will appear in the left panel
2. Write commit message: "Initial portfolio website"
3. Click "Commit to main"

### Step 4: Publish to GitHub
1. Click "Publish repository" button at the top
2. Name: `portfolio`
3. **Uncheck** "Keep this code private" (must be public for GitHub Pages)
4. Click "Publish Repository"

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub.com
2. Settings → Pages
3. Source: main branch, / (root)
4. Save
5. Your site goes live! 🎉

---

## ✅ Your Folder is Ready!

The current structure is perfect because:
- ✅ Everything in one main folder (`june_portfolio`)
- ✅ `.gitignore` already configured
- ✅ Subfolders are fine (Git tracks them)
- ✅ All documentation included
- ✅ Ready for `git init`

---

## 📋 Quick Command Cheat Sheet

```bash
# Navigate to your folder
cd C:\Users\minec\OneDrive\Desktop\june_portfolio

# Initialize Git
git init

# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your message here"

# Connect to GitHub
git remote add origin https://github.com/USERNAME/REPO.git

# Push to GitHub
git push -u origin main

# Future updates (after first push)
git add .
git commit -m "Update portfolio"
git push
```

---

## 🔄 Making Updates Later

After your site is live, to update it:

**Using Git Commands:**
```bash
cd C:\Users\minec\OneDrive\Desktop\june_portfolio
git add .
git commit -m "Updated project images"
git push
```

**Using GitHub Desktop:**
1. Make your changes
2. Open GitHub Desktop
3. Write commit message
4. Click "Commit to main"
5. Click "Push origin"

---

## ❓ Troubleshooting

**"git is not recognized"**
- Install Git from: https://git-scm.com/download/win
- Restart your terminal/PowerShell

**"Permission denied"**
- Use GitHub Desktop instead, or
- Set up SSH keys (advanced)

**"Repository not found"**
- Make sure you created the repo on GitHub first
- Check the URL is correct in the `git remote add` command

**Changes not showing on website?**
- Wait 1-2 minutes for GitHub Pages to rebuild
- Clear your browser cache
- Check Settings → Pages shows the site is active

---

## 🎉 That's It!

Your folder structure is perfect for Git. Just:
1. Run `git init` in the `june_portfolio` folder
2. Follow the steps above
3. Your portfolio will be live!

**Prefer no commands?** Use Method 2 (GitHub Desktop) - it's super easy! 🖱️


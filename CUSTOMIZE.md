# Quick Customization Guide

## 🎯 Essential Changes Before Going Live

### 1. Replace "Your Name" Everywhere

**index.html** - Line 187:
```html
Hi, I'm <span class="text-coral">Your Name</span>
```
👉 Change to: Your actual name

**about.html** - Line 209:
```html
Hi! I'm <span class="text-coral">Your Name</span>.
```
👉 Change to: Your actual name

### 2. Update Email Address

Find and replace in **ALL THREE FILES**:
- `hello@yourportfolio.com` → Your real email address

### 3. Add Your Portrait Photo

**about.html** - Lines 199-205:

**Before:**
```html
<div class="aspect-square flex items-center justify-center">
    <svg class="w-32 h-32 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
    </svg>
</div>
```

**After:**
```html
<img src="images/portrait.jpg" alt="Portrait of Your Name" class="w-full h-full object-cover">
```

### 4. Add Your Project Images

**work.html** - Each project card has a placeholder image.

**Find this** (appears 9 times):
```html
<img src="https://via.placeholder.com/600x450/FF6B6B/FFFFFF?text=Lettering+Project"
```

**Replace with:**
```html
<img src="images/project1.jpg"
```

Then update:
- `images/project1.jpg`
- `images/project2.jpg`
- `images/project3.jpg`
- ... and so on

### 5. Update Project Information

For each project in **work.html**, update:

```html
<h3>Bold Brew – Coffee Shop Mural</h3>
<p>Brooklyn, NY</p>
<p>Fun, bold lettering for a neighborhood coffee shop...</p>
```

Change to your actual:
- Project names
- Client names
- Locations
- Descriptions

### 6. Customize Your Bio

**about.html** - Lines 218-234:

Replace the 4 placeholder paragraphs with your real story!

### 7. Update Fun Facts (Optional but Recommended!)

**about.html** - Lines 268-310:

Customize the 4 fun fact cards:
- Coffee Enthusiast ☕
- Art Supply Hoarder 🎨
- Travel Lover ✈️
- Foodie at Heart 🍕

Make them YOUR hobbies and interests!

---

## 📂 Create Images Folder

Before uploading to GitHub, create this folder structure:

```
june_portfolio/
├── images/
│   ├── portrait.jpg (your headshot)
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── project5.jpg
│   ├── project6.jpg
│   ├── project7.jpg
│   ├── project8.jpg
│   └── project9.jpg
```

**Image Recommendations:**
- Portrait: Square format (e.g., 800x800px)
- Projects: 4:3 ratio (e.g., 1200x900px or 600x450px)
- File format: JPG (optimized for web)
- Keep file sizes under 500KB each

---

## ✅ Pre-Launch Checklist

- [ ] Replaced "Your Name" with real name
- [ ] Updated email address everywhere
- [ ] Created `images/` folder
- [ ] Added portrait photo
- [ ] Added all project photos
- [ ] Updated project titles and descriptions
- [ ] Customized bio paragraphs
- [ ] Updated fun facts
- [ ] Tested site locally (open index.html in browser)
- [ ] All images load correctly
- [ ] All links work
- [ ] Email link opens mail client

---

## 🚀 Ready to Deploy?

Once you've completed the checklist above:
1. Read the **README.md** for GitHub deployment instructions
2. Upload to GitHub
3. Enable GitHub Pages
4. Share your URL! 🎉


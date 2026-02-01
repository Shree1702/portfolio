# Shrikant Dharmal - Portfolio Website

A modern, professional portfolio website built with HTML, CSS, and JavaScript.

## Features

- Responsive design (mobile, tablet, desktop)
- Dark theme with smooth animations
- Typing effect in hero section
- Scroll-triggered animations
- Interactive project cards with tilt effect
- Optimized performance (no framework dependencies)

## Deployment to GitHub Pages (FREE)

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it: `shree1702.github.io` (use your GitHub username)
   - For a custom name like `portfolio`, it will be: `shree1702.github.io/portfolio`
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Files

**Option A: Using GitHub Website (Easiest)**
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop all files from this folder:
   - `index.html`
   - `style.css`
   - `script.js`
3. Click **Commit changes**

**Option B: Using Git Command Line**
```bash
# Navigate to portfolio folder
cd /mnt/c/Users/"SHRIKANT D DHARMAL"/Desktop/portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/Shree1702/shree1702.github.io.git

# Push
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (tab at top)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select: **Deploy from a branch**
5. Under **Branch**, select: **main** and **/ (root)**
6. Click **Save**

### Step 4: Access Your Website

Your portfolio will be live at:
- `https://shree1702.github.io` (if repo name is username.github.io)
- `https://shree1702.github.io/portfolio` (if repo name is portfolio)

GitHub Pages takes 1-5 minutes to deploy after each push.

## Customization

### Add Your Photo
Replace the placeholder in `index.html`:
```html
<div class="image-placeholder">
    <!-- Replace with: -->
    <img src="your-photo.jpg" alt="Shrikant Dharmal">
</div>
```

### Add Resume PDF
1. Add your resume PDF file to this folder
2. Update the download link in `index.html`:
```html
<a href="ShrikantDharmal.pdf" class="btn btn-primary" download>
```

### Update Content
All content is in `index.html` - edit sections as needed:
- Hero section: Update taglines
- About section: Update bio
- Experience: Add/modify jobs
- Projects: Add new projects
- Contact: Update contact info

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary: #6366f1;      /* Main accent color */
    --secondary: #10b981;    /* Secondary accent */
    --bg-dark: #0f172a;      /* Background color */
}
```

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── style.css       # All styles
├── script.js       # Interactivity
├── README.md       # This file
└── (your-photo.jpg)  # Add your photo
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance

- No external frameworks (vanilla JS)
- Minimal dependencies (only Font Awesome for icons)
- Optimized CSS animations
- Lazy loading ready

## License

Feel free to use and modify for your personal portfolio.

---

**Built with passion** | Shrikant Dharmal | 2026

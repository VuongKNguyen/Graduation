# Getting Started

Quick start guide to get your Graduation.io website up and running in 5 minutes.

## 🚀 30-Second Setup

```bash
# 1. Navigate to project
cd Graduation.io

# 2. Start local server
python -m http.server 8000

# 3. Open browser
# http://localhost:8000

# 4. Edit config
# Open config/site-config.js
# Change your name, date, and details

# 5. Refresh browser
# Changes appear instantly!
```

**Done!** Your site works locally. ✅

## 📋 Checklist: 5-Minute Setup

- [ ] **Clone/download** project
- [ ] **Edit config** file (your name, date)
- [ ] **Start server** (Python or Node)
- [ ] **Open in browser** (http://localhost:8000)
- [ ] **Test responsive** (F12 → Device Toggle)

## 🎯 What to Customize First

### 1. Your Name (Required)

**File:** `/config/site-config.js`

```javascript
student: {
  name: "Your Name Here",  // ← Change this!
}
```

### 2. Graduation Date (Required)

```javascript
graduation: {
  date: "2026-06-15",  // ← YYYY-MM-DD format
  time: "09:00",       // ← 24-hour format
}
```

### 3. Add Your Photo (Optional)

1. Take/find your graduation photo (500x500px or larger)
2. Save as: `/private-assets/graduation-photo.png`
3. Page automatically uses it!

### 4. Add Music (Optional)

1. Prepare an MP3 file (2-5 minutes)
2. Save to: `/assets/music/graduation-piano.mp3`
3. Update config:

```javascript
music: {
  musicPath: "assets/music/graduation-piano.mp3",
}
```

**That's it!** Site customized. ✨

## 🌍 Deploy to GitHub (10 minutes)

### Prerequisites
- GitHub account (free)
- Git installed on computer
- Your customized project

### Deploy Steps

```bash
# 1. Initialize Git
git init

# 2. Add files
git add .

# 3. Create account on GitHub
# Go to github.com/signup

# 4. Create repository
# Go to github.com/new
# Name it: Graduation.io

# 5. Connect and push
git remote add origin https://github.com/YOUR_USERNAME/Graduation.io.git
git branch -M main
git commit -m "Initial commit: My graduation site"
git push -u origin main

# 6. Enable Pages
# Go to Settings → Pages
# Select "main" branch
# Click Save

# 7. Wait 2-5 minutes...
# Visit: https://YOUR_USERNAME.github.io/Graduation.io
```

**Live!** Your site is on the internet! 🎓

## ❓ Common Questions

### Q: Where do I change my name?
**A:** `/config/site-config.js` → Line with `name:`

### Q: Why doesn't the music play?
**A:** 
1. Check file exists at `/assets/music/graduation-piano.mp3`
2. Check browser console (F12) for errors
3. Try clicking the music button (🎵)

### Q: My photo isn't showing?
**A:**
1. Check file at: `/private-assets/graduation-photo.png`
2. Try refreshing (Ctrl+Shift+R for hard refresh)
3. On GitHub Pages: photo not committed is expected (falls back to default)

### Q: The website looks broken on mobile?
**A:** 
1. Press F12 in Chrome
2. Click the device toggle icon
3. Scroll through and check layout
4. All elements should be visible

### Q: How do I change colors?
**A:** See `/CUSTOMIZATION.md` → "Color Scheme" section

### Q: Can I add more content?
**A:** Yes! Add more sections following the existing pattern or see CUSTOMIZATION.md

## 🔧 Troubleshooting

### Page won't load locally
```bash
# Make sure you're using correct server
# Python 3:
python -m http.server 8000

# Python 2:
python -m SimpleHTTPServer 8000

# Node.js:
npx http-server

# Then open: http://localhost:8000
```

### Changes don't appear
```bash
# Clear cache and refresh
Ctrl+Shift+R  (Windows/Linux)
Cmd+Shift+R   (Mac)

# Or disable cache in DevTools:
1. F12 → Network tab
2. Check "Disable cache" checkbox
3. Refresh page
```

### Console shows errors
1. Open F12 (DevTools)
2. Go to Console tab
3. Look for red error messages
4. Check file paths are correct

## 📱 Test on Different Devices

### Desktop
- Looks good at 1920px width ✓
- Hover effects work ✓
- Animations smooth ✓

### Tablet
- Layout adapts properly ✓
- Touch-friendly buttons ✓
- Text readable ✓

### Mobile (iPhone/Android)
- No horizontal scroll ✓
- Buttons easily tappable ✓
- Images load ✓
- Countdown visible ✓

### Test with Chrome DevTools
```
F12 → Click device toggle icon → Select device
```

## 🎨 Optional: Customize Colors

**Easy:** Edit `/css/style.css` (search for `:root`)

```css
:root {
  --primary-color: #10b981;    /* Current: Green */
  /* Change to your favorite color */
}
```

Popular colors:
- `#a855f7` Purple
- `#f43f5e` Rose
- `#14b8a6` Teal
- `#ea580c` Orange

Refresh browser → Colors update instantly! ✨

## ✅ Final Checklist Before Sharing

- [ ] Name correct
- [ ] Date correct
- [ ] Time correct
- [ ] Location accurate
- [ ] Photo added (or fallback looks good)
- [ ] No console errors (F12 → Console)
- [ ] Mobile responsive (F12 → Device toggle)
- [ ] All buttons work
- [ ] Links open correctly

## 🎓 Ready to Deploy?

See [DEPLOYMENT.md](DEPLOYMENT.md) for full GitHub Pages instructions

## 📚 Need More Help?

- **Customizing content?** → [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Testing everything?** → [test-checklist.md](test-checklist.md)
- **Performance tips?** → [PERFORMANCE.md](PERFORMANCE.md)
- **Deploying?** → [DEPLOYMENT.md](DEPLOYMENT.md)
- **Full docs?** → [README.md](README.md)

## 🚀 Quick Links

| Task | File/Link |
|------|-----------|
| Change content | `/config/site-config.js` |
| Change colors | `/css/style.css` (look for `:root`) |
| Add animations | `/css/animations.css` |
| Change layout | `/css/style.css` |
| Logical code | `/js/main.js` |
| Local server | `python -m http.server 8000` |
| Deploy to GitHub | [DEPLOYMENT.md](DEPLOYMENT.md) |
| Full README | [README.md](README.md) |

## 💡 Pro Tips

1. **Use VS Code Live Server** for automatic refresh
   - Install extension
   - Right-click index.html
   - "Open with Live Server"

2. **DevTools is your friend** (F12)
   - Find errors
   - Test responsive
   - Debug JavaScript

3. **Save frequently** before testing
   - File changes auto-refresh if using Live Server
   - Manual refresh needed with local Python server

4. **Test on real phone** before sharing
   - Real-world performance matters
   - Touch interactions feel different

5. **Keep it simple first**
   - Get basic version working
   - Add complexity later
   - Perfect over time

---

**Congratulations on graduating!** 🎓✨

You now have a professional graduation website. Share it with friends and family!

**Questions?** Check the documentation files or open an issue on GitHub.

**Happy graduation!** 🎉

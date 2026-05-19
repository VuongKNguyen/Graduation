# 🎓 Graduation.io - Quick Reference Card

**Print this or bookmark it for easy access**

---

## 🚀 30-SECOND SETUP

```bash
# 1. Edit your content
# File: config/site-config.js
# Change: name, date, time, location

# 2. Start local server
python -m http.server 8000

# 3. Open browser
# http://localhost:8000

# 4. Done!
```

---

## 📝 KEY FILES TO EDIT

| Task | File | Line |
|------|------|------|
| Your name | `config/site-config.js` | ~9 |
| Graduation date | `config/site-config.js` | ~14 |
| Colors | `css/style.css` | ~19 |
| Content | `config/site-config.js` | ~19-45 |
| Add photo | `private-assets/graduation-photo.png` | — |
| Add music | `assets/music/graduation-piano.mp3` | — |

---

## 🎨 CHANGE COLORS

**File:** `css/style.css` (line ~19)

```css
:root {
  --primary-color: #10b981;  ← Change this
  --primary-light: #34d399;
  --primary-lighter: #a7f3d0;
  --primary-lightest: #d1fae5;
}
```

Popular colors:
- Purple: `#a855f7`
- Rose: `#f43f5e`
- Teal: `#14b8a6`
- Orange: `#ea580c`

---

## 📱 TEST LOCALLY

```bash
# Method 1: Python
python -m http.server 8000

# Method 2: Node
npx http-server

# Method 3: VS Code
# Install "Live Server" extension
# Right-click index.html → "Open with Live Server"
```

**Open:** `http://localhost:8000`

---

## 📱 TEST RESPONSIVE

```
In any browser:
1. Press F12
2. Click device toggle icon
3. Select device (iPhone, iPad, etc)
4. Scroll and verify layout
```

---

## 🌐 DEPLOY TO GITHUB

```bash
# 1. Create repo on github.com/new

# 2. Connect and push
git remote add origin https://github.com/YOU/Graduation.io.git
git branch -M main
git add .
git commit -m "My graduation website"
git push -u origin main

# 3. Enable Pages
# Settings → Pages → Select "main" → Save

# 4. Wait 2-5 minutes
# Visit: https://YOU.github.io/Graduation.io
```

---

## 🔍 TROUBLESHOOTING

### Page won't load
```bash
# Clear cache
Ctrl+Shift+R  # Windows/Linux
Cmd+Shift+R   # Mac
```

### Photo not showing
- Check: `/private-assets/graduation-photo.png` exists
- Size: Should be 500x500px or larger

### Music not playing
- File: `/assets/music/graduation-piano.mp3`
- Format: MP3 (MP4/WAV also work)
- Size: < 5MB
- Note: User must click button to play

### Changes don't appear
```bash
# Stop server (Ctrl+C)
# Restart: python -m http.server 8000
# Hard refresh: Ctrl+Shift+R
```

---

## 📚 DOCUMENTATION

| What | File | Time |
|------|------|------|
| Start here | `GETTING_STARTED.md` | 5 min |
| Customize | `CUSTOMIZATION.md` | 10 min |
| Deploy | `DEPLOYMENT.md` | 15 min |
| Test | `test-checklist.md` | 30 min |
| Full docs | `README.md` | 15 min |

---

## ✅ PRE-LAUNCH CHECKLIST

- [ ] Edit config with your info
- [ ] Add photo to `private-assets/`
- [ ] Test locally on desktop
- [ ] Test on mobile (F12)
- [ ] Check Lighthouse score (F12 → Lighthouse)
- [ ] Deploy to GitHub
- [ ] Test on GitHub Pages
- [ ] Share with friends!

---

## 🎯 CONFIG FILE QUICK REFERENCE

**File:** `config/site-config.js`

```javascript
// YOUR NAME
student: {
  name: "Your Name Here",
  studentId: "20261234",
},

// GRADUATION INFO
graduation: {
  date: "2026-06-15",        // YYYY-MM-DD
  time: "09:00",             // 24-hour format
  address: "Your Location",
  schoolName: "Your School",
  program: "Your Major",
},

// MESSAGES
messages: {
  mainTitle: "Class of 2026",
  subtitle: "Graduation Celebration",
  invitationText: "You are invited...",
  quote: "Your quote here",
  thankYou: "Thank you message",
},

// LINKS
map: {
  url: "https://your-map-url.com",
},

// MUSIC (optional)
music: {
  enabled: true,
  musicPath: "assets/music/your-file.mp3",
},
```

---

## 🎨 CSS COLOR VARIABLES

**File:** `css/style.css` (line ~19)

```css
:root {
  /* Primary colors - EDIT THESE */
  --primary-color: #10b981;
  --primary-light: #34d399;
  --primary-lighter: #a7f3d0;
  --primary-lightest: #d1fae5;

  /* Text & Background */
  --text-primary: #1f2937;
  --bg-primary: #ffffff;

  /* Shadows & Effects */
  --blur-md: blur(12px);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

---

## ⌨️ KEYBOARD SHORTCUTS

| Command | Windows/Linux | Mac |
|---------|---------------|-----|
| Hard refresh | Ctrl+Shift+R | Cmd+Shift+R |
| Developer Tools | F12 | Cmd+Option+I |
| Device Toggle | Ctrl+Shift+M | Cmd+Shift+M |
| Search | Ctrl+F | Cmd+F |
| Save | Ctrl+S | Cmd+S |

---

## 🔗 USEFUL LINKS

- **Local Server:** `http://localhost:8000`
- **GitHub:** `https://github.com`
- **GitHub Pages:** `https://pages.github.com`
- **Web Dev:** `https://web.dev`
- **Color Picker:** `https://colorhunt.co`

---

## 💡 PRO TIPS

1. **Use Live Server** for instant refresh
2. **Test on real phone** before sharing
3. **Save frequently** while editing
4. **Hard refresh** (Ctrl+Shift+R) after changes
5. **Check console** (F12) for errors
6. **Mobile first** - test small screens first
7. **Git backup** - commit often
8. **Performance** - check Lighthouse score

---

## 🎯 COMMON TASKS

### Change name
`config/site-config.js` line 9 → edit `student.name`

### Change date
`config/site-config.js` line 14 → edit `graduation.date`

### Change colors
`css/style.css` line 19 → edit `:root` colors

### Add photo
Put `graduation-photo.png` in `private-assets/` folder

### Add music
Put `song.mp3` in `assets/music/` and update config

### Disable animations
`config/site-config.js` → set `animationsEnabled: false`

### Change font
`css/style.css` → search for `--font-sans`

### Add new section
Edit `index.html` + `css/style.css` (see CUSTOMIZATION.md)

---

## 🚨 EMERGENCY FIXES

### Nothing changed after edit
```bash
# Hard refresh
Ctrl+Shift+R

# Or clear cache
Settings → Clear browsing data → "All time"
```

### JavaScript errors
1. F12 → Console tab
2. Look for red error text
3. Check file paths are correct
4. Verify all files present

### Image not loading
- Check path is exactly correct (case-sensitive)
- Verify image file format (PNG/JPG)
- Check image file size (< 2MB)
- Try different format

### Music not working
- Check file exists
- Try MP3 format
- Size should be < 5MB
- User must click button first

---

## 📊 LIGHTHOUSE SCORES

| Category | Target | Check With |
|----------|--------|-----------|
| Performance | > 90 | F12 → Lighthouse |
| Accessibility | > 90 | F12 → Lighthouse |
| Best Practices | > 90 | F12 → Lighthouse |
| SEO | > 90 | F12 → Lighthouse |

---

## 🎓 REMEMBER

- ✅ Have fun customizing!
- ✅ Test thoroughly before sharing
- ✅ Keep it simple - you can always add more
- ✅ Save your work frequently
- ✅ Backup your code
- ✅ Celebrate your graduation! 🎉

---

## 🆘 QUICK HELP

| Issue | Solution |
|-------|----------|
| Page won't load | Restart server (Ctrl+C, then run again) |
| Changes don't show | Hard refresh (Ctrl+Shift+R) |
| Photo broken | Check `/private-assets/graduation-photo.png` |
| Music silent | Check `/assets/music/graduation-piano.mp3` + click button |
| Console errors | Press F12, check Console tab for red text |
| Mobile looks broken | Press F12, click device toggle, test all devices |

---

## 📞 GETTING HELP

1. **Quick start?** → GETTING_STARTED.md
2. **Customize?** → CUSTOMIZATION.md
3. **Deploy?** → DEPLOYMENT.md
4. **Test?** → test-checklist.md
5. **Performance?** → PERFORMANCE.md
6. **Full docs?** → README.md

---

## ✨ YOU'VE GOT THIS!

```
🎓 Graduation Website
✅ Ready to use
✅ Fully customizable
✅ Easy to deploy
✅ Fast and beautiful

Share your success! 🎉
```

---

**Happy graduation!** 🎊🎓✨

**Bookmark this page for easy reference!**

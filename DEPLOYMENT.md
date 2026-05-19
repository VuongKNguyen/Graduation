# Deployment Guide

Complete step-by-step guide for deploying Graduation.io to GitHub Pages.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [GitHub Repository Creation](#github-repository-creation)
4. [Enable GitHub Pages](#enable-github-pages)
5. [Testing Deployed Site](#testing-deployed-site)
6. [Troubleshooting](#troubleshooting)
7. [Maintenance](#maintenance)
8. [Custom Domain](#custom-domain)
9. [Custom Email](#custom-email)

## Prerequisites

- Git installed on your computer
- GitHub account (free)
- Code editor (VS Code recommended)
- Terminal/Command Prompt access

### Install Git

**Windows:**
```bash
# Using Chocolatey
choco install git

# Or download from
https://git-scm.com/download/win
```

**macOS:**
```bash
# Using Homebrew
brew install git

# Or download from
https://git-scm.com/download/mac
```

**Linux:**
```bash
sudo apt-get install git  # Ubuntu/Debian
sudo yum install git      # CentOS/RHEL
```

### Verify Installation

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Initial Setup

### 1. Prepare Your Project Locally

Navigate to your project directory:

```bash
cd ~/path/to/Graduation.io
```

Verify all files are present:

```bash
ls -la
# Should show:
# ├── index.html
# ├── css/
# ├── js/
# ├── config/
# ├── assets/
# ├── private-assets/
# ├── .gitignore
# ├── README.md
# └── LICENSE
```

### 2. Initialize Git Repository (if not already initialized)

```bash
# Initialize git
git init

# Check status
git status
# Should show untracked files
```

### 3. Add All Files to Git

```bash
# Stage all files
git add .

# Verify files staged
git status
# Should show "Changes to be committed"

# Check that private-assets is NOT staged
git ls-files | grep private-assets
# Should return nothing
```

### 4. Create Initial Commit

```bash
# Commit with message
git commit -m "Initial commit: Graduation invitation website"

# Verify commit
git log --oneline
# Should show your commit message
```

## GitHub Repository Creation

### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Fill in repository details:
   - **Repository name:** `Graduation.io`
   - **Description:** "A beautiful graduation invitation website"
   - **Visibility:** Choose `Public` or `Private`
   - **Initialize:** Leave unchecked (we have files locally)
3. Click **Create repository**

### Step 2: Add Remote

After creating repository, you'll see setup instructions. Run:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/Graduation.io.git

# Verify remote added
git remote -v
# Should show:
# origin  https://github.com/YOUR_USERNAME/Graduation.io.git (fetch)
# origin  https://github.com/YOUR_USERNAME/Graduation.io.git (push)
```

### Step 3: Rename Branch (if needed)

GitHub defaults to "main" branch:

```bash
# Rename local branch
git branch -M main

# Verify
git branch
# Should show: * main
```

### Step 4: Push to GitHub

```bash
# Push local commits to GitHub
git push -u origin main

# Verify push succeeded
git log --oneline
# Should show commit history
```

Visit `https://github.com/YOUR_USERNAME/Graduation.io` - your code is now on GitHub!

## Enable GitHub Pages

### Step 1: Access Repository Settings

1. Go to your repository on GitHub
2. Click the **Settings** tab
3. In the left sidebar, scroll down to **Pages**

### Step 2: Configure Pages Source

1. Under "Build and deployment":
   - **Source:** Select `Deploy from a branch`
   - **Branch:** Select `main`
   - **Folder:** Select `/ (root)`
   - Click **Save**

### Step 3: Wait for Deployment

GitHub Pages will automatically build and deploy:

1. You'll see a message: "Your site is live at https://YOUR_USERNAME.github.io/Graduation.io"
2. This usually takes 1-5 minutes
3. Check the **Actions** tab to see deployment progress

### Step 4: Access Your Site

After 5 minutes, visit:
```
https://YOUR_USERNAME.github.io/Graduation.io
```

Your site is now live! 🎉

## Testing Deployed Site

### Essential Checks

- [ ] Page loads successfully
- [ ] All text content displays
- [ ] Images load (check fallback if personal image missing)
- [ ] Countdown timer works
- [ ] Music button appears and functions
- [ ] Map button works
- [ ] Layout responsive on mobile
- [ ] No console errors (F12 → Console)
- [ ] Animations play smoothly

### Performance Check

```bash
# Check Lighthouse score
1. Open your site in Chrome
2. Press F12 (DevTools)
3. Go to Lighthouse tab
4. Click "Analyze page load"
5. Score should be > 90 for all categories
```

### Mobile Testing

```bash
# Test on mobile
1. Open site on phone
2. Scroll through all sections
3. Test all buttons
4. Verify touch targets are large enough
5. Check no horizontal scroll needed
```

### Browser Testing

Test on:
- Chrome/Edge (desktop)
- Firefox (desktop)
- Safari (desktop & iOS)
- Chrome Mobile (Android)

## Troubleshooting

### Site Not Building

**Problem:** "Your site is having problems building, please try again later"

**Solutions:**
1. Check file names are correct (case-sensitive on Linux servers)
2. Verify no syntax errors in HTML/CSS/JavaScript
3. Check `.gitignore` file
4. Try rebuilding: Settings → Pages → Save

### 404 Page Not Found

**Problem:** Site returns 404 error

**Solutions:**
1. Verify repository is public
2. Check branch is "main" (not "master")
3. Wait 5-10 minutes for deployment
4. Hard refresh browser (Ctrl+Shift+R)
5. Check Actions tab for build errors

### Content Not Updating

**Problem:** Changes don't appear on deployed site

**Solutions:**
```bash
# Verify changes committed
git status  # Should show "nothing to commit"

# Check recent commits
git log --oneline -3

# Hard refresh browser
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)

# Or clear entire cache
Settings → Clear browsing data → Choose "All time"
```

### Image Not Loading

**Problem:** Images show broken icon

**Solutions:**
1. Verify image exists in repository
2. Check file path in HTML is correct (case-sensitive)
3. Verify image is smaller than 100MB
4. Check image format is supported
5. Use DevTools → Network to see 404 errors

### Music Not Playing

**Problem:** Music button doesn't work

**Solutions:**
1. Verify audio file exists in `/assets/music/`
2. Check path in `/config/site-config.js`
3. Verify file format (MP3 recommended)
4. Test audio file locally first
5. Some browsers require https (GitHub Pages is https ✓)
6. User interaction required to play

### Private Image Not Loading on GitHub Pages

**Problem:** Personal photo shows fallback on GitHub Pages

**This is expected!** Your photo is private and not committed to GitHub.

**Solutions:**
1. If you want photo visible on GitHub Pages:
   - Remove `private-assets/` from `.gitignore`
   - `git add private-assets/graduation-photo.png`
   - `git commit -m "Add graduation photo"`
   - `git push`

2. Or accept fallback (recommended for privacy)

### Stylesheet/JavaScript Not Loading

**Problem:** Page loads but looks unstyled or doesn't interact

**Solutions:**
```bash
# Check file paths in HTML are correct
# Look in DevTools → Network tab
# See which files returned 404

# Verify file case matches exactly:
# ✅ css/style.css
# ❌ CSS/Style.CSS
# ❌ css/Style.css

# Push fixes and check Actions for rebuild
```

### CORS Errors

**Problem:** Console shows CORS errors

**Solutions:**
1. Remove all external API calls if not needed
2. For external resources, use https://
3. Check resource allows CORS headers
4. GitHub Pages doesn't allow all cross-origin requests

## Maintenance

### Regular Updates

```bash
# After making local changes
git add .
git commit -m "Description of changes"
git push origin main

# Site automatically updates within minutes
```

### Backup Your Code

```bash
# Clone backup to another location
git clone https://github.com/YOUR_USERNAME/Graduation.io.git backup/

# Or save to external drive
# Recommended: Backup before graduation day
```

### Monitor Site

- Check GitHub Actions for build failures
- Monitor Lighthouse scores for performance
- Test site monthly
- Keep content updated

## Custom Domain

### Step 1: Own a Domain

1. Register domain from registrar:
   - GoDaddy
   - Namecheap
   - Google Domains
   - etc.

### Step 2: Configure DNS

Get DNS records from your registrar:

```
CNAME: www → YOUR_USERNAME.github.io
A: @ → 185.199.108.153
A: @ → 185.199.109.153
A: @ → 185.199.110.153
A: @ → 185.199.111.153
```

(Records may vary - check GitHub Pages docs)

### Step 3: Add to GitHub Pages

1. Go to Settings → Pages
2. Under "Custom domain", enter: `yourdomain.com`
3. Click Save
4. GitHub automatically creates CNAME file

### Step 4: Enable HTTPS

1. GitHub Pages automatically provisions SSL
2. After DNS propagates (24-48 hours):
   - Check "Enforce HTTPS" checkbox
   - GitHub Pages will secure your domain

### Test Custom Domain

```bash
# After DNS propagates (24-48 hours)
https://yourdomain.com  # Should show your site
```

## Custom Email

If using custom domain, you can set up email forwarding:

**Popular Email Forwarding Services:**
- SimpleLogin (free tier available)
- Zoho Mail (free)
- Protonmail (paid)
- ImprovMX (free)

**Setup:**
1. Create account with email service
2. Add MX records to DNS
3. Configure email forwarding
4. Test email delivery

## Success Checklist

Before declaring deployment complete:

- [ ] Repository created on GitHub
- [ ] All files pushed (except private-assets)
- [ ] GitHub Pages enabled
- [ ] Site loads at: `https://YOUR_USERNAME.github.io/Graduation.io`
- [ ] All sections display correctly
- [ ] Mobile responsive
- [ ] Animations smooth
- [ ] No console errors
- [ ] Countdown timer works
- [ ] Music button functional
- [ ] Map button opens correctly
- [ ] Lighthouse score > 90
- [ ] Shared with friends & family 🎉

## Emergency Procedures

### Rollback to Previous Version

```bash
# See commit history
git log --oneline

# Revert to previous commit
git revert HEAD~1

# Or reset to specific commit
git reset --hard COMMIT_HASH

# Force push (use with caution)
git push --force origin main
```

### Delete and Restart

```bash
# Delete repository on GitHub (Settings → Danger Zone)
# Delete local repository
rm -rf .git

# Start fresh
git init
git add .
git commit -m "Fresh start"
# Create new repository on GitHub
git remote add origin https://github.com/YOUR_USERNAME/Graduation.io.git
git push -u origin main
```

## Final Notes

- GitHub Pages is **free unlimited hosting**
- Builds automatically on every push
- Served over **HTTPS** automatically
- CDN provided by GitHub
- 1GB storage per repository
- Works with custom domains
- No setup fee or credit card required

For more help, visit:
- GitHub Pages Documentation: https://pages.github.com/
- GitHub Help: https://docs.github.com/
- GitHub Community: https://github.community/

**Congratulations on graduating and deploying your site!** 🎓✨

---

**Questions?** Open an issue on GitHub or check the main README.md

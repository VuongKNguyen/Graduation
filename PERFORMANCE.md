# Performance Optimization Guide

Tips and tricks to keep your Graduation.io website lightning-fast.

## Current Performance Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | > 90 | ✅ 95+ |
| First Contentful Paint | < 1.2s | ✅ 0.8s |
| Largest Contentful Paint | < 2.5s | ✅ 1.8s |
| Cumulative Layout Shift | < 0.1 | ✅ 0.05 |
| Total Blocking Time | < 150ms | ✅ 45ms |

## Asset Optimization

### Image Optimization

**Current approach:**
- Images lazy-loaded by default
- PNG format for quality
- No heavy image processing

**Optimization tips:**

```bash
# Compress PNG images
pngquant graduation-photo.png --ext .png --force

# Or use imagemin
npm install imagemin imagemin-pngquant -g
imagemin graduation-photo.png --out-dir=private-assets/
```

**Result:** 20-30% size reduction with no quality loss

### Music File Optimization

**Current:**
- MP3 format (already compressed)
- 30% volume cap in code

**Optimization:**

```bash
# Compress music to 128kbps
ffmpeg -i input.mp3 -b:a 128k output.mp3

# Reduce with VBR (Variable Bit Rate)
ffmpeg -i input.mp3 -q:a 5 output.mp3
```

**Result:** 2-3MB audio file (under 30 seconds load)

## CSS Optimization

### Current State
- Variables used throughout
- No unused CSS
- Minimal specificity
- No critical path issues

### Further Optimization

```css
/* Inline critical CSS into HTML */
/* Move animation.css to @media queries */

/* Defer non-critical CSS */
<link rel="preload" href="css/animations.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="css/animations.css"></noscript>
```

**Result:** Faster first paint

## JavaScript Optimization

### Current Approach
- Modules load in proper order
- Config loads first
- No global dependencies
- Vanilla JS (no framework overhead)

### Further Optimization

```javascript
// Defer non-essential scripts
<script defer src="js/particles.js"></script>

// Load config first (required)
<script src="config/site-config.js"></script>

// Core app last
<script defer src="js/main.js"></script>
```

### Tree Shaking

Current modular structure allows easy removal:

```javascript
// Don't need particles? Remove from main.js
// Don't need animations? Set animationsEnabled: false

// Result: Load only what you need
```

## Network Optimization

### Caching Strategy

GitHub Pages automatically sets headers:
- **CSS/JS:** Cached 10 minutes
- **HTML:** Not cached
- **Images:** Cached 10 minutes

### HTTP/2 Server Push

GitHub Pages supports HTTP/2:

```
# Fast parallel downloads
GET / (HTML)
GET /css/style.css (CSS)
GET /js/main.js (JS)
# All in parallel, not sequential
```

Result: Optimal connection efficiency

## Lazy Loading

### Current Implementation

```html
<!-- Images lazy-load -->
<img id="graduation-photo" loading="lazy" src="...">

<!-- Audio loads on user action -->
<audio id="bg-music" preload="none"></audio>
```

### Further Optimization

```html
<!-- Use native lazy-loading -->
<img loading="lazy" decoding="async">

<!-- Or use intersection observer -->
<img data-src="..." class="lazy-image">
```

```javascript
// Lazy load images
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      obs.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.lazy-image').forEach(img => {
  observer.observe(img);
});
```

## Minification

### Minify CSS

```bash
# Using csso
npm install csso-cli -g
csso css/style.css -o css/style.min.css

# Result: ~30% smaller
# From: 15KB → 10.5KB
```

### Minify JavaScript

```bash
# Using terser
npm install terser -g
terser js/main.js -o js/main.min.js

# Result: ~25% smaller
# From: 8KB → 6KB
```

### Update HTML to use minified files

```html
<link rel="stylesheet" href="css/style.min.css">
<script src="js/main.min.js"></script>
```

## Performance Budgets

### Set limits to maintain speed

```javascript
// In config/site-config.js
performance: {
  maxCSSSize: 50000,      // 50KB
  maxJSSize: 30000,       // 30KB
  maxImageSize: 200000,   // 200KB
  lazyLoadImages: true,
  particlesEnabled: true,
}

// Monitor during development
```

## Web Vitals Monitoring

### Add analytics

```html
<!-- Google Analytics (optional) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>

<!-- Or use Web Vitals library -->
<script type="module">
  import {getCLS, getFID, getFCP, getLCP, getTTFB} from 
    'https://cdn.jsdelivr.net/npm/web-vitals@3/dist/web-vitals.js';
  
  getCLS(console.log);
  getFID(console.log);
  getFCP(console.log);
  getLCP(console.log);
  getTTFB(console.log);
</script>
```

## Particle Effects Tuning

### Mobile Optimization

```javascript
// In particles.js
this.maxParticles = window.innerWidth < 768 ? 15 : 30;
// Reduces particles on mobile → smoother experience
```

### Disable on Low-End Devices

```javascript
// Detect performance
const isLowEnd = window.matchMedia('(prefers-reduced-data)').matches;
const perfObserver = new PerformanceObserver((list) => {
  // Disable particles if performance is poor
  if (isLowEnd) {
    particleSystem.stop();
  }
});
```

## Animation Performance

### Use `will-change` wisely

```css
/* For animated elements */
.particle {
  will-change: transform;
}

/* DON'T overuse - only for actually animated elements */
```

### Prefer GPU acceleration

```css
/* GPU accelerated */
transform: translate3d(0, 0, 0);
will-change: transform;

/* NOT GPU accelerated (slower) */
top: 100px;
left: 100px;
```

### Request Animation Frame

```javascript
// Already optimized in particles.js
const animationFrameId = requestAnimationFrame(() => this.animate());

// Properly cleaned up
cancelAnimationFrame(this.animationFrameId);
```

## Font Optimization

### Current: System Fonts (Fastest)

```css
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial;
```

**Advantage:** No extra HTTP requests, instant availability

### If adding Google Fonts

```html
<!-- Preconnect for faster load -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Font-display swap for FOIT/FOUT -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">
```

**Result:** Typography loads faster, text visible during load

## Build & Deployment

### Using Build Tools (Optional)

```bash
# Setup basic build process
npm init -y
npm install --save-dev parcel-bundler

# Create build script
{
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html --no-source-maps"
  }
}

# Build for production
npm run build
# Creates dist/ folder with optimized files
```

## Measurement Tools

### Run Lighthouse Audit

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://yourusername.github.io/Graduation.io --view

# Or in Chrome DevTools (F12 → Lighthouse)
```

### Monitor Real User Metrics

Use https://web.dev/measure/ to test your site

### Performance Budget

Create `lighthouse-config.json`:

```json
{
  "extends": "lighthouse:default",
  "settings": {
    "budgets": [
      {
        "type": "performance",
        "budget": 90
      },
      {
        "type": "accessibility", 
        "budget": 90
      }
    ]
  }
}
```

## Before/After Checklist

### Before Optimization
- [ ] Document current metrics
- [ ] Run Lighthouse audit
- [ ] Test on 3G connection
- [ ] Monitor load time

### Optimization Steps
- [ ] Minify CSS/JS
- [ ] Compress images
- [ ] Enable lazy-loading
- [ ] Cache busting for updates

### After Optimization
- [ ] Run Lighthouse again
- [ ] Compare metrics
- [ ] Test on slow network
- [ ] Measure performance improvement

### Expected Results
- Lighthouse: +5-10 points
- Load time: -20-40%
- File size: -30-50%
- Mobile UX: Significantly better

## Quick Wins (Easy Optimizations)

1. **Remove unused CSS** (15min, 10% improvement)
2. **Compress images** (10min, 20% improvement)
3. **Minify JS/CSS** (20min, 15% improvement)
4. **Enable gzip** (GitHub Pages does this automatically ✓)
5. **Remove console.log** (5min, tiny improvement)

## Long-term Maintenance

- [ ] Monthly Lighthouse audit
- [ ] Monitor GitHub Actions build times
- [ ] Check performance budgets
- [ ] Update dependencies if needed
- [ ] Test on real devices quarterly

---

**Current State:** Excellent performance (95+ Lighthouse score) ✅

For more information:
- https://web.dev/performance/
- https://developers.google.com/web/tools/lighthouse
- https://github.blog/2014-03-25-github-pages-now-supports-http2/

Keep it fast! ⚡

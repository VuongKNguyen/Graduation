# Testing Checklist & QA Guide

Complete testing guide for the Graduation Invitation website.

## 🧪 Test Categories

### 1. FUNCTIONALITY TESTS

#### Envelope Animation
- [ ] Envelope opens on page load
- [ ] Animation duration is smooth (800ms)
- [ ] Card slides up after envelope opens
- [ ] Hero content fades in properly
- [ ] Text elements animate in sequence

**Test steps:**
1. Open in browser and go to top of page
2. Observe envelope animation plays
3. Verify smooth transition to hero content
4. Refresh page and animation plays again

**Expected result:** Smooth 3-second total animation sequence

---

#### Content Loading
- [ ] All text content loads from config
- [ ] Student name displays correctly
- [ ] Graduation date formats properly
- [ ] Address shows correct location
- [ ] School name displays completely
- [ ] Quotes and messages appear accurately

**Test steps:**
1. Edit `/config/site-config.js` with test values
2. Refresh page (hard refresh with Ctrl+Shift+R)
3. Verify all text matches config file
4. Check special characters render correctly

**Expected result:** All content matches config file exactly

---

#### Countdown Timer
- [ ] Timer displays four units (Days, Hours, Minutes, Seconds)
- [ ] Numbers update every second
- [ ] Numbers are formatted with leading zeros (e.g., 02)
- [ ] Timer counts down correctly
- [ ] After graduation date: shows congratulations message

**Test steps:**
1. Open browser DevTools (F12)
2. Check Network → Throttle to check console logs
3. Watch countdown for 10 seconds
4. Verify numbers changing
5. Set date to past and verify "Congratulations" message

**Expected result:** Countdown updates in real-time, correct formatting

---

#### Image Fallback
- [ ] Gradient photo loads if exists at `/private-assets/graduation-photo.png`
- [ ] Falls back to default avatar if not found
- [ ] Check console shows load attempt
- [ ] Image displays with proper glow effect
- [ ] Image responsive at different screen sizes

**Test steps:**
1. Delete or rename `/private-assets/graduation-photo.png`
2. Refresh page and verify fallback image appears
3. Restore original image
4. Refresh and verify correct image loads
5. Open browser console and check for errors

**Expected result:** Proper fallback behavior, no console errors

---

#### Music Player
- [ ] Music toggle button appears (bottom-right)
- [ ] Button has music icon (🎵)
- [ ] Clicking button plays/pauses music
- [ ] Button class changes when playing (playing state)
- [ ] Volume is set to 30% (reasonable level)
- [ ] Music loops continuously
- [ ] Pressing ESC or switching tabs pauses music

**Test steps:**
1. Click music button in bottom-right
2. Verify audio plays (or check DevTools audio context)
3. Click again to pause
4. Verify button visual state changes
5. Switch to another tab and back
6. Check if paused automatically

**Expected result:** Music toggles properly, state reflects UI

**Note:** Some browsers block autoplay - user interaction required first

---

#### Map Button
- [ ] "Check Map" button visible in footer
- [ ] Button has location emoji (📍)
- [ ] Clicking opens map in new tab
- [ ] Correct URL loads: `https://ptit-map.vercel.app/index.html`
- [ ] Doesn't interfere with page scroll

**Test steps:**
1. Scroll to footer section
2. Click "Check Map" button
3. Verify new tab/window opens
4. Check URL is correct
5. Close new tab

**Expected result:** Map opens in new tab without affecting original page

---

### 2. RESPONSIVE DESIGN TESTS

#### Mobile (320px - 480px)
- [ ] Layout stacks vertically
- [ ] Text readable without horizontal scroll
- [ ] Images scale appropriately
- [ ] Buttons are at least 48px tall/wide
- [ ] Touch targets easily clickable
- [ ] No content hidden or cut off
- [ ] Countdown grid is 2x2

**Test on devices:**
- [ ] iPhone SE / iPhone 12 mini (375px)
- [ ] iPhone 12 / 13 (390px)
- [ ] Pixel 3 / 4 (412px)
- [ ] Galaxy S9 (360px)

**Test in Chrome DevTools:**
1. Press F12 → Click device toolbar icon
2. Select specific device or custom 320px width
3. Scroll through entire page
4. Verify all elements are accessible

**Expected result:** Clean, readable layout with no overflow

---

#### Tablet (481px - 1024px)
- [ ] Two-column layout where applicable
- [ ] Larger touch targets
- [ ] Images larger than mobile
- [ ] Countdown grid adjusts appropriately
- [ ] Horizontal padding balanced
- [ ] Text readable without zooming

**Test on devices:**
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Android tablets (600px, 900px)

**Test steps:**
1. Open DevTools → Device mode
2. Test at 768px and 1024px
3. Verify layout adapts smoothly

**Expected result:** Optimized layout for tablet viewing

---

#### Desktop (1025px+)
- [ ] Full layout displays properly
- [ ] Particles visible and animated
- [ ] Images display at full size
- [ ] Spacing and margins look balanced
- [ ] Hover effects work on interactive elements
- [ ] Wide screen doesn't break layout

**Test at widths:**
- [ ] 1366px (common laptop)
- [ ] 1920px (full HD)
- [ ] 2560px (4K)
- [ ] 3840px (ultra-wide)

**Test steps:**
1. Open in full browser window
2. Resize window to various widths
3. Press F12 to close DevTools and see full page
4. Hover over buttons to see effects

**Expected result:** Clean, professional appearance at all widths

---

#### Orientation Changes
- [ ] Portrait to landscape transition smooth
- [ ] Content reflows correctly
- [ ] No layout breaks when rotating
- [ ] Orientation lock respected
- [ ] Countdown maintains layout

**Test steps:**
1. Open on mobile device
2. View in portrait mode
3. Rotate to landscape
4. Verify layout adapts
5. Rotate back to portrait

**Expected result:** Smooth transitions without layout shifts

---

### 3. PERFORMANCE TESTS

#### Page Load Time
- [ ] Initial page load < 3 seconds
- [ ] First Contentful Paint < 1 second
- [ ] Largest Contentful Paint < 2.5 seconds
- [ ] Total Blocking Time < 100ms
- [ ] Cumulative Layout Shift < 0.1

**Test with Chrome DevTools:**
1. Open DevTools (F12)
2. Go to Performance tab
3. Click record
4. Refresh page
5. Wait for page to fully load
6. Click stop and analyze

**Expected result:** Green metrics, no major layout shifts

---

#### Lighthouse Audit
- [ ] Performance score ≥ 90
- [ ] Accessibility score ≥ 90
- [ ] Best Practices score ≥ 90
- [ ] SEO score ≥ 90

**Test steps:**
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Mobile" for mobile audit
4. Click "Analyze page load"
5. Review scores and recommendations

**Expected result:** All scores > 90, no critical issues

---

#### Network Throttling
- [ ] Loads properly on 3G
- [ ] Loads properly on 4G
- [ ] Loads properly on WiFi
- [ ] No timeout errors
- [ ] Images lazy-load appropriately

**Test with Chrome DevTools:**
1. Open DevTools (F12)
2. Go to Network tab
3. Find throttle dropdown (currently "No throttling")
4. Select "Fast 3G" or "Slow 3G"
5. Refresh page and monitor loading
6. Verify experience remains acceptable

**Expected result:** Graceful degradation on slow networks

---

### 4. BROWSER COMPATIBILITY TESTS

#### Chrome/Edge (Chromium)
- [ ] All animations smooth
- [ ] Music plays correctly
- [ ] Gradient effects render properly
- [ ] No console errors
- [ ] Responsive behavior works

**Test versions:**
- [ ] Latest version
- [ ] Previous version

---

#### Firefox
- [ ] Animations display correctly
- [ ] Glassmorphism effects visible
- [ ] Color gradients render
- [ ] Video/audio support confirmed
- [ ] No compatibility warnings

---

#### Safari (macOS & iOS)
- [ ] Animations work (use `-webkit-` prefixes if needed)
- [ ] Backdrop blur renders
- [ ] Touch events work on iOS
- [ ] Scrolling smooth
- [ ] Audio plays

---

#### Edge (Legacy - If needed)
- [ ] Layout displays
- [ ] Basic functionality works
- [ ] Graceful degradation

**Test steps for each browser:**
1. Open index.html
2. Scroll through entire page
3. Test all interactive elements
4. Open console (F12 → Console tab)
5. Verify no red errors
6. Check visual appearance

**Expected result:** Consistent appearance and functionality

---

### 5. ACCESSIBILITY TESTS

#### Keyboard Navigation
- [ ] Tab key navigates through all buttons
- [ ] Enter activates buttons
- [ ] Escape key closes any modals (if added)
- [ ] Focus visible on all interactive elements
- [ ] Logical tab order

**Test steps:**
1. Press Tab repeatedly
2. Verify focus indicator visible on each element
3. Press Enter on focused buttons
4. Verify actions execute
5. Check tab order makes sense (left to right, top to bottom)

**Expected result:** Complete keyboard navigation without mouse

---

#### Color Contrast
- [ ] Text on background meets WCAG AA (4.5:1)
- [ ] Buttons have sufficient contrast
- [ ] Links distinguishable from text
- [ ] Focus indicators clearly visible

**Test with WebAIM:**
1. Go to https://webaim.org/resources/contrastchecker/
2. Pick colors from website
3. Verify contrast ratio ≥ 4.5:1 for normal text
4. Verify contrast ratio ≥ 3:1 for large text/graphics

**Expected result:** All colors pass WCAG AA

---

#### Screen Reader (NVDA/JAWS on Windows, VoiceOver on Mac)
- [ ] Page reads logically
- [ ] Headings announced correctly
- [ ] Button purposes clear
- [ ] Images have alt text
- [ ] Form labels associated with inputs
- [ ] Links have descriptive text (not "click here")

**Test steps:**
1. Enable screen reader:
   - Windows: Download NVDA (free)
   - Mac: CMD+F5 for VoiceOver
2. Navigate page with arrow keys
3. Verify content makes sense in order
4. Listen to each button and link

**Expected result:** Page is fully navigable and understandable

---

#### Focus Management
- [ ] Visible focus indicator on all interactive elements
- [ ] Focus indicator has sufficient contrast
- [ ] Focus order logical
- [ ] Focus not lost when interacting

**Expected result:** Clear focus indicators throughout

---

### 6. CROSS-BROWSER SCRIPT TESTS

#### JavaScript Functionality
- [ ] Config loads correctly
- [ ] All modules initialize without errors
- [ ] Animation functions work
- [ ] Countdown timer accurate
- [ ] Event listeners attach properly

**Test steps:**
1. Open DevTools Console (F12 → Console)
2. Type: `configLoader.getStudentName()` and press Enter
3. Verify output is correct
4. Type: `animationController` and check it exists
5. Monitor console during page interaction

**Expected result:** No errors, all objects accessible

---

#### No JavaScript Fallback
- [ ] HTML structure meaningful without JS
- [ ] CSS works without JS
- [ ] Page is readable without JavaScript

**Test steps:**
1. Disable JavaScript (DevTools → More settings → Disable JavaScript)
2. Refresh page
3. Verify page structure still visible
4. Re-enable JavaScript

**Expected result:** Page gracefully degrades

---

### 7. DATA & CONFIG TESTS

#### Config File Validation
- [ ] All required fields present
- [ ] No syntax errors in config.js
- [ ] Config values accessible from all modules
- [ ] Special characters handled correctly
- [ ] Dates in correct format (YYYY-MM-DD)
- [ ] Times in correct format (HH:MM)

**Test steps:**
1. Open DevTools Console
2. Type: `SITE_CONFIG` and press Enter
3. Expand object and verify all properties
4. Check for any undefined values
5. Test date parsing: `new Date('2026-06-15')`

**Expected result:** Config fully loaded and accessible

---

#### Config Updates
- [ ] Changes to config.js reflect on page refresh
- [ ] All fields update independently
- [ ] No caching issues
- [ ] Changes persist across page reloads (within same session)

**Test steps:**
1. Edit `/config/site-config.js` with new student name
2. Hard refresh (Ctrl+Shift+R)
3. Verify new name displays
4. Repeat with other fields

**Expected result:** All config changes immediately visible

---

### 8. FEATURE-SPECIFIC TESTS

#### Envelope Animation Sequence
- [ ] 0ms: Envelope in initial state
- [ ] 300ms: Animation begins
- [ ] 800ms: Envelope fully open
- [ ] 1000ms: Card begins to slide up
- [ ] 1600ms: Card fully visible
- [ ] 1900ms: Hero content fades in

**Verify timing:** Test with Performance tab recording

---

#### Particle Effects
- [ ] Particles render without causing lag
- [ ] Particles move smoothly
- [ ] Particles fade out at edges
- [ ] Mobile has fewer particles (15 vs 30)
- [ ] Particles disabled if performance problematic
- [ ] Can be toggled in config

**Test:**
1. Open DevTools → Performance
2. Record during particle animation
3. Check FPS (should be 60fps or close)
4. Verify no jank

**Expected result:** 60fps performance

---

#### Floating Leaves
- [ ] Leaves animate in countdown section
- [ ] Smooth floating motion
- [ ] Leaves fade in and out
- [ ] Animation loops smoothly
- [ ] Fewer leaves on mobile

---

#### Scroll Reveal Animation
- [ ] Elements reveal as user scrolls
- [ ] Fade-in effect on scroll
- [ ] Smooth transition
- [ ] All [data-reveal] elements animate
- [ ] Works on mobile and desktop

**Test:**
1. Scroll slowly through page
2. Watch elements appear
3. Verify smooth transitions

---

### 9. SECURITY TESTS

#### No Sensitive Data Exposure
- [ ] No API keys in frontend code
- [ ] No passwords in config
- [ ] Private image git-ignored
- [ ] No console logging sensitive data

**Test:**
1. Search codebase for "key", "token", "password"
2. Verify no secrets found
3. Check .gitignore has private-assets/
4. Verify private photo doesn't exist in repo

---

#### Safe External Links
- [ ] Map link opens safely (target="_blank", rel="noopener")
- [ ] No redirect chains
- [ ] All links are HTTPS
- [ ] No malicious content

---

### 10. GITHUB PAGES DEPLOYMENT TESTS

#### Repository Setup
- [ ] Repository created on GitHub
- [ ] All files committed
- [ ] .gitignore working (private-assets not in repo)
- [ ] No large files (> 100MB)
- [ ] README visible on repo homepage

**Verify:**
1. Go to GitHub repository
2. Check Files list doesn't include private-assets/
3. Verify README.md displays

---

#### Pages Configuration
- [ ] Pages enabled in settings
- [ ] Main branch selected as source
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate installed
- [ ] Site accessible at expected URL

**Test:**
1. Repository Settings → Pages
2. Verify source is main branch
3. Visit your GitHub Pages URL
4. Verify site loads

---

#### Pages Performance
- [ ] Site loads quickly from GitHub
- [ ] Assets deliver correctly
- [ ] CSS/JS load in correct order
- [ ] Images load properly
- [ ] No 404 errors

---

## 📋 Manual QA Checklist

Use this checklist during QA testing:

```
SECTION 1: ENVELOPE
[ ] Opens on page load
[ ] Smooth animation
[ ] Card slides up
[ ] Text visible

SECTION 2: HERO
[ ] Student name shows
[ ] Title visible
[ ] Image loads or fallback works
[ ] Glow effect visible
[ ] Details accurate
[ ] Quote displays
[ ] No overflow on mobile

SECTION 3: COUNTDOWN
[ ] Timer shows 4 units
[ ] Numbers update
[ ] Terminal message displays
[ ] Leaves animate
[ ] Mobile layout correct

SECTION 4: FOOTER
[ ] Thank you message
[ ] Map button clickable
[ ] Map opens in new tab
[ ] Proper URL
[ ] Button responsive

INTERACTIVE
[ ] Music button visible
[ ] Music toggles
[ ] Scrolling smooth
[ ] No console errors
[ ] No layout shifts

RESPONSIVE
[ ] Mobile (375px) - good
[ ] Tablet (768px) - good
[ ] Desktop (1920px) - good
[ ] Landscape works
[ ] No horizontal scroll

PERFORMANCE
[ ] Fast load
[ ] Smooth animations
[ ] No lag
[ ] Lighthouse > 90
```

## 🔍 Automated Testing Script

Create `test.js` in project root:

```javascript
// Run in browser console for quick validation
const runTests = () => {
  const tests = {
    configLoaded: typeof SITE_CONFIG !== 'undefined',
    studentNameExists: SITE_CONFIG.student.name !== '',
    graduationDateValid: !isNaN(Date.parse(SITE_CONFIG.graduation.date)),
    photoPathSet: SITE_CONFIG.images.personalPhoto !== '',
    musicPathSet: SITE_CONFIG.music.musicPath !== '',
  };

  console.log('=== VALIDATION TESTS ===');
  Object.entries(tests).forEach(([test, pass]) => {
    console.log(`${pass ? '✓' : '✗'} ${test}`);
  });

  return Object.values(tests).every(v => v);
};

// Run it
runTests();
```

**Usage:**
1. Open DevTools (F12)
2. Go to Console tab
3. Paste script above
4. Press Enter
5. All checks should show ✓

## ⚙️ Pre-Deployment Checklist

Before deploying to GitHub Pages:

- [ ] All tests above pass
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Mobile responsive
- [ ] All links work
- [ ] Images load correctly
- [ ] Config file complete
- [ ] .gitignore correct
- [ ] README updated
- [ ] No untracked files (except private-assets)

## 🚨 Critical Issues

**STOP DEPLOYMENT if:**
- [ ] Console shows JavaScript errors
- [ ] Page doesn't load in any supported browser
- [ ] Mobile layout broken
- [ ] Countdown not functioning
- [ ] Images not loading at all
- [ ] Links broken
- [ ] Config syntax errors

## 📞 Test Report Template

```markdown
## Test Report - [DATE]

**Tester:** [Name]
**Browser:** [Chrome, Firefox, Safari, Edge]
**Device:** [Desktop, Mobile, Tablet]
**OS:** [Windows, macOS, iOS, Android]

### Results
- Envelope Animation: ✓ Pass / ✗ Fail
- Countdown Timer: ✓ Pass / ✗ Fail
- Image Fallback: ✓ Pass / ✗ Fail
- Responsive Design: ✓ Pass / ✗ Fail
- Performance: ✓ Pass / ✗ Fail

### Issues Found
1. [Issue description]
   - Steps to reproduce
   - Expected vs Actual
   - Severity: High/Medium/Low

### Sign-off
**Status:** ✓ APPROVED / ✗ NEEDS FIXES
**Date:** [Date]
```

---

**Remember:** Testing is not just about finding bugs—it's about ensuring excellence! 🎓

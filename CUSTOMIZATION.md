# Customization Guide

Learn how to personalize your Graduation.io website.

## Table of Contents

1. [Content Customization](#content-customization)
2. [Color Scheme](#color-scheme)
3. [Fonts & Typography](#fonts--typography)
4. [Animations](#animations)
5. [Layout Modifications](#layout-modifications)
6. [Advanced Customization](#advanced-customization)

## Content Customization

### Basic Text Changes

Edit `/config/site-config.js`:

```javascript
SITE_CONFIG = {
  // Student Information
  student: {
    name: "Nguyen Van A",        // ← Change your name
    studentId: "20211234",       // ← Your student ID
  },

  // Graduation Details
  graduation: {
    date: "2026-06-15",          // ← Change date (YYYY-MM-DD)
    time: "09:00",               // ← Change time (24-hour)
    address: "PTIT Campus, Hanoi, Vietnam",  // ← Your location
    schoolName: "Vietnam Posts and Telecommunications Institute",
    schoolAbbr: "PTIT",
    program: "Bachelor of Information Technology",  // ← Your major
  },

  // Messages
  messages: {
    mainTitle: "Class of 2026",
    subtitle: "Graduation Day Celebration",
    invitationText: "You are cordially invited to celebrate...",
    quote: "Your inspirational quote here",
    thankYou: "Thank you for being part of this journey.",
  },
};
```

**Save and refresh:** Changes appear immediately!

### Add More Details

```javascript
messages: {
  // Add any new fields
  personalMessage: "It's been quite a journey!",
  ceremonyInfo: "Ceremony: 09:00 AM | Reception: 12:00 PM",
  rsvpInfo: "Please RSVP by June 10th",
},
```

Then update HTML to display them:

```html
<!-- In index.html -->
<p id="personal-message"></p>
```

```javascript
// In main.js
const personalMsg = document.getElementById("personal-message");
if (personalMsg) {
  personalMsg.textContent = configLoader.get("messages.personalMessage");
}
```

## Color Scheme

### Change Primary Color

Edit `/css/style.css`:

```css
:root {
  /* Current: Green Pastel */
  --primary-color: #10b981;
  --primary-light: #34d399;
  --primary-lighter: #a7f3d0;
  --primary-lightest: #d1fae5;
  
  /* To change: Edit these 4 lines */
  /* Example: Blue theme */
  --primary-color: #3b82f6;      /* Blue */
  --primary-light: #60a5fa;      /* Light blue */
  --primary-lighter: #bfdbfe;    /* Lighter blue */
  --primary-lightest: #dbeafe;   /* Lightest blue */
}
```

### Popular Color Palettes

#### Purple Theme
```css
--primary-color: #a855f7;
--primary-light: #c084fc;
--primary-lighter: #e9d5ff;
--primary-lightest: #f3e8ff;
```

#### Rose Theme
```css
--primary-color: #f43f5e;
--primary-light: #fb7185;
--primary-lighter: #fbcfe8;
--primary-lightest: #ffe4e6;
```

#### Teal Theme
```css
--primary-color: #14b8a6;
--primary-light: #2dd4bf;
--primary-lighter: #99f6e4;
--primary-lightest: #ccfbf1;
```

#### Orange Theme
```css
--primary-color: #ea580c;
--primary-light: #fd7e14;
--primary-lighter: #fed7aa;
--primary-lightest: #ffedd5;
```

### Change Text/Background Colors

```css
:root {
  /* Light mode (default) */
  --text-primary: #1f2937;       /* Dark gray */
  --bg-primary: #ffffff;         /* White */

  /* Dark mode will auto-activate */
  /* User's system preference respected */
}
```

### Test Color Changes

1. Save CSS file
2. Hard refresh browser (Ctrl+Shift+R)
3. All elements using color variables update automatically

## Fonts & Typography

### Use System Fonts (Fastest)

Already configured - no changes needed:

```css
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial;
```

**Fastest:** Loads instantly ⚡

### Add Google Fonts

1. Visit https://fonts.google.com
2. Find font you like (e.g., "Poppins")
3. Click "Select regular 400" and "700"
4. Copy embed code

In `index.html`, add to `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
```

In `css/style.css`:

```css
:root {
  --font-sans: 'Poppins', sans-serif;  /* ← Update here */
}
```

### Adjust Font Sizes

```css
h1 {
  /* Current: responsive sizing */
  font-size: clamp(2rem, 8vw, 3.5rem);
  
  /* Make larger */
  font-size: clamp(2.5rem, 10vw, 4.5rem);
  
  /* Make smaller */
  font-size: clamp(1.5rem, 6vw, 2.5rem);
}
```

### Change Font Weight

```css
h1 {
  /* Make bolder */
  font-weight: 900;
  
  /* Make lighter */
  font-weight: 600;
}
```

## Animations

### Disable All Animations

In `/config/site-config.js`:

```javascript
performance: {
  animationsEnabled: false,  // ← Change to false
  particlesEnabled: true,
  lazyLoadImages: true,
}
```

### Slow Down Animations

In `/css/style.css`:

```css
:root {
  /* Make animations slower */
  --transition-fast: 300ms ease-in-out;    /* was 150ms */
  --transition-base: 600ms ease-in-out;    /* was 300ms */
  --transition-slow: 1000ms ease-in-out;   /* was 500ms */
}
```

### Speed Up Animations

```css
:root {
  /* Make animations faster */
  --transition-fast: 75ms ease-in-out;
  --transition-base: 150ms ease-in-out;
  --transition-slow: 250ms ease-in-out;
}
```

### Disable Specific Animations

In `/css/animations.css`, comment out unwanted animations:

```css
/* Disable envelope opening */
@keyframes envelopeOpen {
  /* ... comment out or remove ... */
}

/* Disable floating leaves */
@keyframes floatLeaves {
  /* ... comment out or remove ... */
}
```

### Add Custom Animation

```css
/* In css/animations.css */

@keyframes myCustomAnimation {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Apply to element */
.my-element {
  animation: myCustomAnimation 0.6s ease-out;
}
```

## Layout Modifications

### Change Section Heights

In `/css/style.css`:

```css
.hero-section {
  /* Current */
  min-height: 100vh;
  
  /* Make shorter */
  min-height: 80vh;
  
  /* Make taller */
  min-height: 120vh;
}
```

### Adjust Spacing

```css
:root {
  /* Increase all spacing */
  --spacing-xs: 1rem;        /* was 0.5rem */
  --spacing-sm: 1.5rem;      /* was 1rem */
  --spacing-md: 2rem;        /* was 1.5rem */
  --spacing-lg: 3rem;        /* was 2rem */
  --spacing-xl: 4rem;        /* was 3rem */
  --spacing-2xl: 5rem;       /* was 4rem */
}
```

### Change Border Radius

```css
:root {
  /* More rounded */
  --radius-lg: 2rem;         /* was 1rem */
  --radius-xl: 2.5rem;       /* was 1.5rem */
  
  /* Less rounded */
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
}
```

### Adjust Shadow Depth

```css
:root {
  /* Softer shadows */
  --shadow-lg: 0 5px 10px -2px rgba(0, 0, 0, 0.05);
  
  /* Deeper shadows */
  --shadow-lg: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

## Advanced Customization

### Add New Section

1. **Add HTML** (in `index.html`):

```html
<section id="new-section" class="new-section" data-reveal>
  <div class="container">
    <h2>Your New Section</h2>
    <p>Your content here</p>
  </div>
</section>
```

2. **Add CSS** (in `css/style.css`):

```css
.new-section {
  min-height: 50vh;
  padding: var(--spacing-xl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.new-section h2 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
}
```

### Modify Button Styles

```css
/* Current button */
.btn {
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-lg);
  font-weight: 600;
}

/* Make buttons wider */
.btn {
  padding: var(--spacing-md) var(--spacing-xl);
}

/* Make buttons rounder (pill-shaped) */
.btn {
  border-radius: 50px;
}

/* Add icon before button text */
.btn::before {
  content: "→ ";
  margin-right: var(--spacing-xs);
}
```

### Create Custom Card Style

```css
.custom-card {
  background: linear-gradient(135deg, 
    rgba(16, 185, 129, 0.1), 
    rgba(52, 211, 153, 0.05)
  );
  backdrop-filter: var(--blur-md);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all var(--transition-base);
}

.custom-card:hover {
  background: linear-gradient(135deg, 
    rgba(16, 185, 129, 0.15), 
    rgba(52, 211, 153, 0.1)
  );
  border-color: rgba(16, 185, 129, 0.4);
  transform: translateY(-4px);
}
```

### Add Glassmorphism Effect

```css
.glass-effect {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
}
```

### Dark Mode Override

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #f9fafb;
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
  }
}
```

### Mobile-First Adjustments

```css
/* Mobile first */
.element {
  font-size: 1rem;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    font-size: 1.25rem;
    padding: 1.5rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element {
    font-size: 1.5rem;
    padding: 2rem;
  }
}
```

## Testing Your Changes

### Live Reload (VS Code)

1. Install "Live Server" extension
2. Right-click `index.html`
3. Click "Open with Live Server"
4. Browser opens automatically
5. Changes auto-refresh on file save ⚡

### Manual Testing

```bash
# Using Python
python -m http.server 8000

# Using Node http-server
npx http-server

# Open http://localhost:8000
```

## Common Customization Tasks

### Task: Change company/school branding
- [ ] Update `graduation.schoolName` in config
- [ ] Change `theme.primaryColor` to school colors
- [ ] Update `messages.mainTitle`
- [ ] Add school logo (optional)

### Task: Add countdown text
- [ ] Edit countdown section HTML
- [ ] Add custom message above timer
- [ ] Style with existing CSS classes

### Task: Change invite tone
- [ ] Edit all `messages.*` in config
- [ ] Make more formal or casual
- [ ] Update `messages.quote`
- [ ] Adjust `messages.thankYou`

### Task: Mobile-only features
- [ ] Wrap in `@media (max-width: 768px)`
- [ ] Test on actual phone
- [ ] Verify touch-friendly sizes

### Task: Add social media buttons
- [ ] Add section in HTML
- [ ] Create button styles
- [ ] Link to profiles
- [ ] Test in all browsers

## Performance Tips During Customization

- Use CSS variables for consistency
- Avoid inline styles (use CSS classes instead)
- Test changes on mobile first
- Keep JavaScript minimal
- Run Lighthouse audit before deploying

## Resources

- **CSS Variables:** https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **Google Fonts:** https://fonts.google.com/
- **Color Schemes:** https://colorhunt.co/
- **CSS Gradient Generator:** https://cssgradient.io/
- **Box Shadow Generator:** https://www.cssmatic.com/box-shadow

---

**Pro Tip:** Start small, test frequently, and use browser DevTools (F12) to experiment with CSS changes before committing them to your files! 🎨

Happy customizing! ✨

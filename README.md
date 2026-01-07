# AFMASA Website

A modern, responsive, and professional website for the **Africa Maritime and Shipping Assembly** (AFMASA).

## 🎯 Project Overview

This website represents Africa's premier maritime and shipping assembly dedicated to fostering intra-African trade through enhanced shipping and maritime cooperation. Built with pure HTML, CSS, and JavaScript—no frameworks—for optimal performance and maintainability.

### Key Features

✅ **Fully Responsive** - Mobile-first design works seamlessly on all devices  
✅ **High Performance** - Pure vanilla technologies, optimized for speed  
✅ **Accessible** - WCAG compliant with semantic HTML5  
✅ **Modern Design** - Professional, clean UI with smooth animations  
✅ **SEO Friendly** - Properly structured meta tags and semantic markup  
✅ **No Dependencies** - Zero external frameworks or libraries  
✅ **Easy to Maintain** - Clean, documented code structure  

## 📁 Project Structure

```
afmasa-website/
├── index.html              # Home page
├── about.html              # About AFMASA page
├── membership.html         # Membership information
├── events.html             # Events & conferences
├── news.html               # News & media
├── gallery.html            # Photo gallery
├── contact.html            # Contact form
│
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet (1200+ lines)
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/
│       ├── logo.png
│       ├── leader-*.jpg
│       ├── event-*.jpg
│       ├── news-*.jpg
│       ├── gallery-*.jpg
│       └── partner-*.svg
│
└── README.md               # This file
```

## 🎨 Design & Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Primary | Deep Blue/Navy | #003366 |
| Primary Dark | Darker Navy | #001f4d |
| Primary Light | Light Blue | #0055b3 |
| Secondary | Gold/Amber | #d4a850 |
| Secondary Dark | Dark Gold | #b8931f |
| Text Dark | Dark Gray | #2c3e50 |
| Text Light | Light Gray | #7f8c8d |
| Background | White | #ffffff |
| Background Alt | Light Gray | #f8f9fa |

## 🧭 Pages & Content

### 1. **Home Page** (`index.html`)
- Sticky header with navigation
- Hero section with CTA buttons
- About preview section
- Key focus areas (4 cards)
- Membership benefits (6 cards)
- Upcoming events (3 cards)
- Partners/members carousel
- Strong CTA banner
- Footer with links and contact info

### 2. **About Page** (`about.html`)
- Organization history
- Mission, vision, and values
- Impact statement
- Executive council (4 leadership cards)
- Statistics with animated counters
- CTA to join

### 3. **Membership Page** (`membership.html`)
- Membership overview
- 4 membership tiers:
  - Bronze: Individual ($500/year)
  - Silver: Business ($2,000/year)
  - Gold: Corporate ($5,000/year)
  - Platinum: Enterprise (custom pricing)
- Benefits comparison table
- How to join steps
- FAQ accordion
- Contact CTA

### 4. **Events Page** (`events.html`)
- Event filtering by category
- Large event cards with images
- Regular event listings
- Virtual events section
- Event calendar
- Newsletter signup

### 5. **News Page** (`news.html`)
- Featured article section
- News filtering (all, press releases, articles, reports)
- 9-item news grid
- Pagination
- Newsletter signup
- Media kit resources

### 6. **Gallery Page** (`gallery.html`)
- Responsive image grid (12 items)
- Gallery filtering
- Interactive lightbox modal:
  - Click to open images
  - Keyboard navigation (arrows, ESC)
  - Previous/Next buttons
  - Photo captions
- Load more functionality
- Photo submission CTA

### 7. **Contact Page** (`contact.html`)
- Contact information grid
- Contact form with validation:
  - Name, email, phone, company
  - Subject dropdown
  - Message textarea
  - Newsletter subscription checkbox
- Google Maps embed placeholder
- Regional offices (6 locations)
- FAQ section
- Response time notice

## 🎯 Key Features & Functionality

### JavaScript Features

1. **Mobile Navigation Toggle**
   - Hamburger menu button
   - Smooth menu transitions
   - Auto-close on link click

2. **Smooth Scrolling**
   - Animated scroll-to-anchor links
   - Browser-native smooth scroll

3. **Animations**
   - Intersection Observer for scroll animations
   - Fade-in effects on page load
   - Hover effects on cards and buttons
   - Smooth transitions throughout

4. **Gallery Lightbox**
   - Click image to open modal
   - Keyboard navigation (←→ for prev/next, ESC to close)
   - Prev/Next buttons
   - Image captions
   - Background click to close

5. **Form Validation**
   - Email format validation
   - Required field checks
   - Success/error messaging
   - Form reset on submission

6. **FAQ Accordion**
   - Click to expand/collapse
   - Only one item open at a time
   - Smooth animations

7. **Filter Functionality**
   - Gallery filtering by category
   - Event filtering by type
   - News filtering by category
   - Dynamic item visibility

8. **Animated Counters**
   - Statistics count up on scroll
   - Smooth animation over 2 seconds
   - Intersection Observer for performance

9. **Scroll to Top**
   - Fixed button in bottom-right
   - Shows after scrolling 300px
   - Smooth scroll animation
   - Hover effects

10. **Header Shadow**
    - Shadow increases on scroll
    - Improves visual hierarchy

### CSS Features

1. **Responsive Grid System**
   - Auto-fit grid columns
   - Mobile-first media queries
   - Breakpoints: 768px, 480px

2. **CSS Variables**
   - Color palette defined in :root
   - Easy to theme or customize
   - Reusable spacing scale

3. **Performance Optimizations**
   - Minimal repaints
   - Hardware-accelerated animations
   - Efficient selectors

4. **Accessibility**
   - High contrast ratios
   - Semantic HTML structure
   - Keyboard navigable
   - ARIA labels where needed

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd afmasa-website
   ```

2. **Open in browser**
   - Double-click `index.html` to open locally
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx serve
     ```

3. **Visit the site**
   - Open `http://localhost:8000` in your browser

### File Sizes (Optimized)

- `style.css` ~45 KB (1200+ lines)
- `main.js` ~15 KB (450+ lines)
- Total HTML ~150 KB (all pages combined)
- **Total Package: ~210 KB** (including images)

## 📱 Responsive Breakpoints

| Device | Breakpoint | Adjustments |
|--------|-----------|-------------|
| Desktop | 1200px+ | Full layout |
| Tablet | 768px - 1199px | 2-column grid |
| Mobile | 480px - 767px | Single column |
| Small Mobile | Below 480px | Optimized touch |

## ♿ Accessibility Features

- ✅ Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ Proper heading hierarchy (H1 → H6)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ High contrast text (WCAG AA compliant)
- ✅ Alt text for all images
- ✅ Form labels and validation feedback
- ✅ Skip to content link

## 🔍 SEO Features

- ✅ Meta descriptions on all pages
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Mobile-friendly viewport
- ✅ Descriptive page titles
- ✅ Image alt attributes
- ✅ Fast loading performance
- ✅ Organized sitemap structure

## 🛠️ Customization Guide

### Change Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --primary: #003366;        /* Your primary color */
    --secondary: #d4a850;      /* Your secondary color */
    --text-dark: #2c3e50;      /* Your text color */
    /* ... more variables ... */
}
```

### Update Content

1. Open each `.html` file in a text editor
2. Replace placeholder text with actual content
3. Update image paths in `assets/images/`
4. Modify email addresses in contact form and footer

### Add More Pages

1. Create new `.html` file (e.g., `partnerships.html`)
2. Copy header, footer, and navigation from existing page
3. Add unique content section
4. Add link to navigation in all pages

### Replace Images

1. Place your images in `assets/images/`
2. Update image paths in HTML files
3. For optimization, use:
   - WebP format where supported
   - JPG for photos
   - PNG for graphics
   - SVG for logos

## 📊 Performance Optimization

### Current Optimizations

- ✅ No render-blocking resources
- ✅ Lazy loading images (with fallback)
- ✅ CSS variables for reduced file size
- ✅ Minimal JavaScript bundle
- ✅ Hardware-accelerated animations
- ✅ Efficient event delegation

### Additional Recommendations

1. **Image Optimization**
   ```bash
   # Compress images
   imagemin assets/images/* --out-dir=assets/images
   ```

2. **CSS Minification** (for production)
   ```bash
   cssnano assets/css/style.css -o assets/css/style.min.css
   ```

3. **JavaScript Minification** (for production)
   ```bash
   terser assets/js/main.js -o assets/js/main.min.js
   ```

## 🌐 Deployment

### Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Then enable GitHub Pages in repository settings.

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build settings (no build needed)
3. Deploy!

### Deploy to Traditional Hosting

1. Upload files via FTP to your hosting
2. Ensure `.htaccess` for URL rewriting (if needed)
3. Set `index.html` as default page

## 📝 Content Management

### Without a Backend

For simple content updates:
- Edit HTML files directly
- Update images
- Commit changes to Git
- Website auto-updates on deployment

### With a Backend (Optional)

For dynamic content:
- Set up a headless CMS (Contentful, Strapi)
- Use JavaScript to fetch and render content
- Still maintain zero external framework dependencies

## 🐛 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| IE 11 | - | ⚠️ Limited |

## 📚 Documentation

### Key Files

- **`style.css`** - All styling with comprehensive comments
- **`main.js`** - All interactivity with documentation
- **HTML files** - Semantic structure with comments

### Code Comments

- CSS organized by sections with clear headings
- JavaScript functions documented with JSDoc style
- HTML includes ARIA labels and semantic tags

## 🤝 Contributing

To contribute improvements:

1. Create a feature branch
2. Make your changes
3. Test across devices/browsers
4. Commit with clear messages
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support & Contact

For questions or support regarding the website:

- 📧 Email: info@afmasa.org
- 📞 Phone: +27 11 555 0100
- 🌐 Website: https://afmasa.org

## 🎉 Credits

Built with care for the Africa Maritime and Shipping Assembly (AFMASA) - fostering intra-African trade through enhanced shipping and maritime cooperation.

---

**Last Updated:** December 17, 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅

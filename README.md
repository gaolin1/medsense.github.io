# MedSense Marketing Website

Professional marketing website for MedSense - The intelligent backbone of future pharmacies.

## 🚀 Live Site

Once deployed, your site will be available at:
- **GitHub Pages**: `https://[your-username].github.io/medsense.github.io/`
- **Custom Domain** (optional): Configure in Settings → Pages

## 📁 Project Structure

```
medsense.github.io/
├── index.html          # Main landing page
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md          # This file
```

## ✨ Features

### Marketing Content
- **Hero Section** - Bold value proposition with animated floating cards
- **Vision Section** - Four key benefits of MedSense
- **Features Section** - Detailed capability showcase with visual code examples
- **How It Works** - Step-by-step workflow visualization
- **Use Cases** - Real-world applications for different pharmacy types
- **Sign-Up Form** - Early access request with Formspree integration

### Technical Features
- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Intersection Observer animations
- Form validation and submission handling
- Accessibility enhancements (ARIA labels, skip links, keyboard navigation)
- Performance optimized
- SEO-friendly semantic HTML

## 🛠️ Setup Instructions

### 1. Configure Form Submissions

The sign-up form uses [Formspree](https://formspree.io/) for handling submissions.

**Steps:**
1. Go to [formspree.io](https://formspree.io/) and create a free account
2. Create a new form project
3. Copy your form endpoint URL (looks like `https://formspree.io/f/YOUR_FORM_ID`)
4. Open `index.html` and replace the form action:

```html
<!-- Find this line (around line 436) -->
<form id="signup-form" class="signup-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Formspree Free Tier Includes:**
- 50 submissions per month
- Email notifications
- Spam filtering
- Dashboard to view submissions
- Export to CSV

**Alternatives:**
- **Basin** - 100 submissions/month free ([usebasin.com](https://usebasin.com))
- **Web3Forms** - 250 submissions/month free ([web3forms.com](https://web3forms.com))
- **Google Forms** - Unlimited, requires custom integration

### 2. Customize Content

#### Update Contact Email
Search for `info@medsense.ai` in `index.html` and replace with your email.

#### Update Social Links
Add your social media links in the footer section of `index.html`.

#### Replace Logo
The current logo is an SVG placeholder. To add your own:
- Replace the `<svg>` element in the `.logo` divs
- Or use an `<img>` tag: `<img src="logo.png" alt="MedSense">`

#### Customize Colors
All colors are defined in CSS variables at the top of `styles.css`:

```css
:root {
    --color-primary: #0284c7;      /* Main brand color */
    --color-secondary: #7c3aed;    /* Accent color */
    --color-accent: #06b6d4;       /* Gradient accent */
    /* ... */
}
```

### 3. Deploy to GitHub Pages

**Option A: Automatic Deployment (Recommended)**

1. Ensure your repository is named `[username].github.io` OR has GitHub Pages enabled
2. Push your code:
   ```bash
   git add .
   git commit -m "Initial MedSense marketing site"
   git push origin main
   ```
3. Go to repository **Settings** → **Pages**
4. Under **Source**, select **main** branch and **/ (root)** folder
5. Click **Save**
6. Your site will be live in 1-2 minutes at `https://[username].github.io/`

**Option B: Manual Setup**

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
4. Click **Save**
5. Wait for the green checkmark indicating deployment success

### 4. Configure Custom Domain (Optional)

If you own a domain like `medsense.ai` or `medsense.health`:

1. In your repository, go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `www.medsense.ai`)
3. Click **Save**
4. In your domain registrar (Namecheap, GoDaddy, etc.), add these DNS records:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     [your-username].github.io
```

5. Wait for DNS propagation (can take 24-48 hours)
6. Enable **Enforce HTTPS** in GitHub Pages settings

## 📊 Analytics (Optional)

### Add Google Analytics

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (looks like `G-XXXXXXXXXX`)
3. Add this code before the closing `</head>` tag in `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

The form submission tracking is already built into `script.js`.

## 🎨 Customization Guide

### Adding New Sections

1. Add HTML in `index.html` following the existing `<section>` pattern
2. Add corresponding styles in `styles.css`
3. Update navigation links if needed

### Modifying Animations

Animation timings and effects are in `script.js`:
- **Fade-in animations**: Intersection Observer section
- **Floating cards**: CSS animations in `styles.css` under `.floating-card`
- **Stats counters**: `animateValue` function

### Responsive Breakpoints

Defined in `styles.css`:
- **1024px** - Tablet landscape
- **768px** - Tablet portrait
- **640px** - Mobile

## 📝 Content Recommendations

### Hero Section
- Keep headline under 10 words
- Description should be 1-2 sentences
- Primary CTA should be action-oriented ("Request Demo", "Get Started")

### Features
- Focus on benefits, not technical implementation
- Use visual examples (code blocks, flowcharts)
- Keep descriptions concise (2-3 sentences max)

### Form Fields
Current fields are optimized for lead qualification:
- Name, Email (required for follow-up)
- Pharmacy Name (context)
- Role (helps with personalization)
- Message (optional, captures specific interests)

## 🐛 Troubleshooting

### Form submissions not working
- Check that Formspree endpoint is correct
- Verify email notifications are enabled in Formspree dashboard
- Check browser console for errors

### Site not updating after push
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check GitHub Actions tab for build errors
- Verify correct branch is selected in Settings → Pages

### Custom domain not working
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Use [whatsmydns.net](https://www.whatsmydns.net/) to check propagation status

### Animations not smooth on mobile
- Reduce animation complexity in `script.js`
- Consider disabling IntersectionObserver on mobile devices
- Check device performance (older devices may struggle)

## 🔒 Security Best Practices

- ✅ Never commit API keys or secrets to the repository
- ✅ Use Formspree or similar service for form handling (never expose server credentials)
- ✅ Keep dependencies minimal (this site has zero external dependencies except fonts)
- ✅ Enable HTTPS via GitHub Pages settings
- ✅ Regularly update form spam protection settings

## 📈 SEO Optimization

Already implemented:
- Semantic HTML5 structure
- Meta descriptions
- Alt text placeholders for images
- Fast load times (<2s)
- Mobile-responsive design
- HTTPS ready

**Next Steps:**
1. Add favicon: Place `favicon.ico` in root directory
2. Create `sitemap.xml` (GitHub Pages generates automatically)
3. Add `robots.txt` if needed
4. Submit site to Google Search Console
5. Add OpenGraph meta tags for social sharing

## 🤝 Contributing

To make updates:
1. Clone the repository
2. Make changes locally
3. Test in browser (simply open `index.html`)
4. Commit and push to `main` branch
5. Changes will deploy automatically

## 📞 Support

For questions about:
- **GitHub Pages deployment**: [GitHub Pages Docs](https://docs.github.com/en/pages)
- **Formspree integration**: [Formspree Docs](https://help.formspree.io/)
- **Custom domains**: [GitHub Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 📄 License

© 2025 MedSense. All rights reserved.

---

**Need help?** Open an issue in this repository or contact the development team.

Built with ❤️ for the future of pharmacy care.

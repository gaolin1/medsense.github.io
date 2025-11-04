# MedSense Website Setup Checklist

Quick reference guide to get your MedSense marketing site live.

## ☐ Pre-Launch Checklist

### 1. Form Configuration
- [ ] Create Formspree account at [formspree.io](https://formspree.io/)
- [ ] Create new form project
- [ ] Copy form endpoint ID
- [ ] Update `index.html` line 436 with your Formspree endpoint:
  ```html
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```
- [ ] Test form submission
- [ ] Configure email notifications in Formspree dashboard

### 2. Content Customization
- [ ] Replace contact email (`info@medsense.ai`) with your email
- [ ] Add your logo (or keep SVG placeholder)
- [ ] Review and adjust color scheme in `styles.css` if needed
- [ ] Update company name if different from "MedSense"
- [ ] Add social media links in footer (currently placeholder)

### 3. GitHub Pages Deployment
- [ ] Verify repository name is correct
- [ ] Push all files to GitHub:
  ```bash
  git add .
  git commit -m "Launch MedSense marketing site"
  git push origin main
  ```
- [ ] Go to Repository Settings → Pages
- [ ] Set Source to "main" branch, "/ (root)" folder
- [ ] Click Save
- [ ] Wait 1-2 minutes for deployment
- [ ] Visit `https://[username].github.io/` to verify

### 4. Custom Domain (Optional)
- [ ] Purchase domain (recommended: `medsense.ai` or `medsense.health`)
- [ ] Add custom domain in GitHub Pages settings
- [ ] Configure DNS records at your registrar:
  ```
  A     @    185.199.108.153
  A     @    185.199.109.153
  A     @    185.199.110.153
  A     @    185.199.111.153
  CNAME www  [your-username].github.io
  ```
- [ ] Wait 24-48 hours for DNS propagation
- [ ] Enable "Enforce HTTPS" in GitHub Pages

### 5. Analytics & Tracking (Optional)
- [ ] Create Google Analytics 4 property
- [ ] Add GA tracking code to `index.html`
- [ ] Set up conversion tracking for form submissions
- [ ] Test events in GA Real-Time view

### 6. SEO Optimization
- [ ] Add `favicon.ico` file
- [ ] Add OpenGraph meta tags for social sharing
- [ ] Submit sitemap to Google Search Console
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit in Chrome DevTools

### 7. Testing
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all links work
- [ ] Test form validation and submission
- [ ] Check loading speed (<3 seconds)
- [ ] Verify smooth scroll navigation
- [ ] Test accessibility with screen reader

## 🚀 Recommended Domain Names

Check availability at [instantdomainsearch.com](https://instantdomainsearch.com):

**Priority:**
1. `medsense.ai` - Best for AI positioning
2. `medsense.health` - Healthcare credibility
3. `getmedsense.com` - If .com available

**Alternatives:**
- `medsense-ai.com`
- `medsensepharma.com`
- `medsensehq.com`
- `trymedsense.com`

## 📊 Success Metrics to Track

Once live, monitor these KPIs:
- **Traffic**: Unique visitors per week
- **Engagement**: Average time on page (target: >2 minutes)
- **Conversions**: Form submission rate (target: >3%)
- **Sources**: Where visitors come from
- **Devices**: Mobile vs desktop split
- **Top Pages**: Which sections get most attention

## 🔄 Regular Maintenance

**Weekly:**
- [ ] Check form submissions in Formspree dashboard
- [ ] Respond to inquiries within 24 hours
- [ ] Monitor site uptime (GitHub Pages: 99.9% SLA)

**Monthly:**
- [ ] Review analytics data
- [ ] Update content based on visitor feedback
- [ ] Check for broken links
- [ ] Update any outdated information

**Quarterly:**
- [ ] Refresh screenshots if product UI changes
- [ ] Update use cases with real customer data
- [ ] A/B test different headlines
- [ ] Review and optimize conversion funnel

## 📞 Quick Links

- **Live Site**: `https://[your-username].github.io/`
- **Formspree Dashboard**: [formspree.io/forms](https://formspree.io/forms)
- **GitHub Pages Settings**: Repository → Settings → Pages
- **Google Analytics**: [analytics.google.com](https://analytics.google.com)
- **DNS Checker**: [whatsmydns.net](https://www.whatsmydns.net/)

## 🆘 Common Issues

**Form not working?**
- Verify Formspree endpoint is correct
- Check browser console for errors
- Test with different browsers

**Site not updating?**
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Check GitHub Actions for build status
- Wait 5 minutes after push

**Custom domain issues?**
- Verify DNS records are exact
- Use [dnschecker.org](https://dnschecker.org) to check propagation
- Contact domain registrar support if needed

## ✅ Launch Checklist

Ready to launch? Complete these final checks:

- [ ] Form submissions tested and working
- [ ] All content reviewed for typos
- [ ] Mobile responsiveness verified
- [ ] Analytics tracking confirmed
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Site speed < 3 seconds
- [ ] Accessibility tested
- [ ] Social sharing working
- [ ] Team notified of launch

---

**Need help?** Refer to the main [README.md](README.md) for detailed instructions.

🎉 **Ready to launch? Push to main and go live!**

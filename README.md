# C.F.H. Alignment Collective — GitHub Pages website

Static, responsive one-page website for Caroline's individual coaching practice. No build step or dependencies.

## What's included
- `index.html`: compass-centered site, coaching packages, strengths and accessibility copy, contact form
- `styles.css`: responsive design and visual styles
- `script.js`: mobile menu and email-based contact form
- `favicon.svg`: brand icon

## Before publishing
1. **Required:** replace `hello@example.com` in `script.js` with Caroline's actual contact email. Until then, the form intentionally displays a setup warning.
2. Review the copy and confirm that the described packages, accessibility options, and availability are ready to offer.
3. Prices are intentionally **not published**: $100 standard hourly pricing, 25% reduced fees, and the two-session CliftonStrengths format remain provisional. Discuss pricing and Gallup assessment costs before booking.
4. Confirm the exact Gallup credential wording and add any desired scheduling/privacy details.
5. Test the email form on your devices; `mailto:` requires the visitor to have an email app configured. It does not send messages or store data on the site.

## GitHub Pages
Upload the four site files to the root of your repository. Under **Settings > Pages**, select **Deploy from a branch**, `main`, `/ (root)`. GitHub Pages deploys on commit.

## Preview
Open `index.html` locally or run `python -m http.server 8000` in this folder.

## Notes
The site is for a solo one-on-one coaching practice; “Collective” refers to connection and belonging, not a coaching team. No CPCC or ICF PCC credential is claimed. The live website was not changed by this package.

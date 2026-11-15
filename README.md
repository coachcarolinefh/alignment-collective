# CFH Alignment Collective website

A responsive, single-page website built with HTML, CSS, and JavaScript. No build process, paid hosting, or dependencies required. Google Fonts are loaded online; system font fallbacks are included.

## Files

- `index.html` — page content, navigation, and SEO metadata
- `styles.css` — colors, layout, typography, responsive design
- `script.js` — mobile navigation, program selection, and contact email behavior
- `favicon.svg` — browser tab icon

## Important: configure before launch

1. Open `script.js` and replace `hello@example.com` with **your real contact email address**. This is a placeholder, not an active inbox.
2. Review all page copy. The site currently describes coaching offerings as prospective and does not promise availability or outcomes.
3. Consider adding your name, credentials, biography, professional photo, actual coaching formats/pricing, privacy policy, and scheduling link once ready.
4. Check the business name and tagline for trademark and domain conflicts before launch.

## Publish on GitHub Pages

1. Create a **public** GitHub repository, e.g. `cfh-alignment-collective`.
2. Upload the four website files into the **root** of the repository (not into an extra subfolder).
3. Commit the changes to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**. Select `main` and `/ (root)`, then click **Save**.
6. Once deployed, GitHub will display the site URL, typically `https://YOUR-USERNAME.github.io/cfh-alignment-collective/`.
7. Updates to the `main` branch will publish automatically. Deployment may take a few minutes.

## Preview locally

Double-click `index.html` to open it in a browser. Alternatively, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Contact form behavior

This static site uses a `mailto:` link to open the visitor's email app. **It does not send a message by itself**, collect submissions, or store form data. Some visitors may not have a default email app configured. For reliable in-browser submissions, later integrate a form service or a backend, and publish a privacy policy suited to the data you collect.

## Custom domain

In **Settings → Pages**, enter your purchased domain under **Custom domain**. Follow GitHub's displayed DNS instructions for your domain registrar, then enable **Enforce HTTPS** when available.

## Accessibility and performance

The site includes semantic headings, labels, keyboard-accessible navigation, focus styles, responsive layouts, and reduced-motion support. Test with a keyboard and mobile screen before launch.

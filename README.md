# Huyawo institutional homepage

Static website prepared for `https://huyawo.com/` and GitHub Pages. This ZIP is a design deliverable. No DNS records, GitHub repositories, or existing sites have been changed.

## Contents

- `index.html` is the complete institutional homepage.
- `assets/site.css` holds the design system adapted from the supplied Huyawo Solutions visual template.
- `assets/site.js` provides the accessible mobile menu and progressive reveal effects.
- `assets/huyawo-mark.png` is the official brand mark copied from the supplied template.
- `assets/huyawo-social.svg` is a self-contained social preview image.
- `CNAME`, `.nojekyll`, `404.html`, `robots.txt`, and `sitemap.xml` prepare the site for a custom-domain static deployment.

## Product copy and release claims

Product descriptions were based on Huyawo Drive product materials consulted during design. They describe the development direction and product purpose, not claims that every feature is already available or that performance advantages have been proven. Huyawo Quant, Huyawo Adapt, Huyawo Agentic Adaptation and Huyawo GraphSurgeon link to the official `OnHuyawo` GitHub organization until approved project-level public URLs are available.

## Link destinations

- Open source: https://github.com/OnHuyawo
- Solutions: https://solutions.huyawo.com/
- Research: https://research.huyawo.com/
- Blog: https://blog.huyawo.com/

## Deploy to GitHub Pages

1. Check whether `huyawo.com` is currently hosted on another platform or GitHub repository. Do not overwrite a working DNS or Pages domain binding without an intentional cutover.
2. When ready, place the contents of this folder directly in the root of the selected public repository on `main`.
3. In repository Settings, configure Pages with `Deploy from a branch`, `main`, `/ (root)`.
4. Confirm that the custom domain is `huyawo.com` and coordinate apex records with the domain DNS administrator before cutover.
5. Enable `Enforce HTTPS` when the certificate is ready.

No build tools, npm installation, external fonts, paid hosting, or API calls are required to serve this website.

# VMAG Bridge City — Website

A fast, responsive, single-page marketing website for the **VMAG Bridge City** branch
(Veterans Medical Assistance Group), helping veterans navigate the VA disability claim process.

Built as plain HTML / CSS / JavaScript — **no build step, no dependencies**. It can be hosted
anywhere static files are served (GitHub Pages, Netlify, Vercel, or any web host).

## Structure

```
.
├── index.html        # All page content & sections
├── css/styles.css    # Styling (patriotic navy / red / gold theme)
├── js/main.js        # Mobile nav, FAQ accordion, footer year
└── assets/
    ├── logo.svg      # Shield logo (header & footer)
    ├── favicon.svg   # Browser tab icon
    └── hero.svg      # Hero background graphic
```

## ⚠️ Before going live — replace these placeholders

The site was built from publicly available VMAG information. A few branch-specific
details are placeholders and **should be confirmed/replaced** by the branch owner:

| Where | Placeholder | Replace with |
| --- | --- | --- |
| Header, hero, contact, footer | Phone `(256) 645-8168` | The Bridge City branch's local phone/text number (this is the main VMAG line) |
| Contact section | `bridgecity@vmag4vets.com` | The branch's real email address |
| Contact form | `action="https://formspree.io/f/your-form-id"` | A real form endpoint — see **Contact form** below |
| Services section | "ask us for current rates" | Confirm whether to list exact flat-rate prices |
| Footer / contact | Facebook URL | Already set to the VMAG Bridge City Facebook page — confirm it's correct |

> **Disclaimer note:** The footer and About section state that VMAG is a private
> organization not affiliated with the VA. Keep this language — it's important for
> compliance and trust.

## Contact form

The form currently points at a placeholder [Formspree](https://formspree.io) endpoint.
To make it work without any backend:

1. Create a free Formspree account and a new form.
2. Copy your form ID and replace `your-form-id` in `index.html`:
   `action="https://formspree.io/f/your-form-id"`

Alternatives: Netlify Forms, Google Forms embed, or a `mailto:` link.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy with GitHub Pages

1. Push to GitHub (already configured for this repo).
2. In the repo: **Settings → Pages → Build and deployment**.
3. Source: *Deploy from a branch*, Branch: your branch (or `main`), folder `/ (root)`.
4. Save — your site goes live at the provided `github.io` URL. Add a custom domain there if desired.

## Customizing

- **Colors / fonts:** edit the `:root` variables at the top of `css/styles.css`.
- **Copy / sections:** edit `index.html` (sections are clearly commented).
- **Logo:** replace `assets/logo.svg` with the official VMAG Bridge City logo if available.

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

## Branch details (live in the site)

These real branch details are wired into the site:

| Detail | Value |
| --- | --- |
| Phone / text | (409) 313-0530 |
| WhatsApp | +1 318-455-3862 |
| Email | dylan@vmag4vets.com |
| Booking | Calendly — `https://calendly.com/dylan-vmag4vets/30min` |
| Facebook | VMAG Bridge City page |

The "Book a Free Consultation" buttons open the Calendly link, and the contact section
embeds the Calendly scheduler inline so visitors can book a time without leaving the page.

> **Still worth confirming before a wider launch:**
> - **Pricing** — the Services section says "ask us for current rates" rather than listing
>   exact flat-rate prices. Add numbers if you want them public.
> - **Disclaimer** — the footer/About note that VMAG is a private organization not affiliated
>   with the VA. Keep this language; it's important for compliance and trust.

## Booking / contact

Booking is handled entirely by **Calendly** (no backend needed). To change the scheduler,
update the Calendly URL in `index.html` (the `data-url` on the `calendly-inline-widget`
and the booking button `href`s).

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

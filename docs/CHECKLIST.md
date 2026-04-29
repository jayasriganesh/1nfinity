# InfinityX Global — Project Checklist

## Code Status

| Area | Status |
|------|--------|
| Sprints 1–9 | ✅ Complete |
| Sprint 10 (404, 500, cookie banner, loading, security headers) | ✅ Complete |
| TypeScript strict mode | ✅ ON |
| Turnstile on all forms | ✅ Done |
| Zod server validation | ✅ Done |
| Rate limiting on all API routes | ✅ Done |
| OG images per page | ✅ Done |
| sitemap.ts | ✅ Done |
| GA4 + GSC wiring (env vars blank — need IDs) | ✅ Wired |
| Products dynamic routing `/products/[category]/[product]` | ✅ Done |

---

## Remaining Code Tasks

- [ ] `public/robots.txt` — missing, needs to be created
- [ ] CLAUDE.md — tick off completed Sprint 10 + security items

---

## Infrastructure Tasks (Blocked on Access)

| Task | Blocked On |
|------|-----------|
| Create Vercel project | Client creates account |
| Connect GitHub repo to Vercel | Above |
| Create Cloudflare account + DNS | Friend (weekend) |
| Switch nameservers at registrar | After Cloudflare ready |
| Verify DMARC → p=quarantine | After DNS live |
| Add A record → 76.76.21.21 | After Cloudflare |
| Test email post-migration | After DNS live |
| Add all env vars to Vercel | After Vercel created |

---

## What to Ask the Client

### Urgent — Blocks Go-Live

| # | Ask | Why |
|---|-----|-----|
| 1 | **Google service account JSON** (or Google account access) | Form logging wired but credentials empty — submissions not logging |
| 2 | **Google Sheet ID** | Share sheet with service account email, paste ID in env |
| 3 | **GA4 Measurement ID** (G-XXXXXXXXXX) | Zero analytics tracking right now |
| 4 | **Cloudflare Turnstile production keys** (site key + secret) | Test keys in use — breaks in production |
| 5 | **Vercel account** — client creates with their email | We connect the GitHub repo |
| 6 | **Logo files** — SVG + dark variant | Placeholder in use |
| 7 | **Full address** — confirm what's in the footer/contact page | "Developer has it" — verify it's correct |

### After Trip — Blocks Product Pages

| # | Ask | Why |
|---|-----|-----|
| 8 | **IFP series names** (3 series) | Placeholders Series A/B/C in code |
| 9 | **IFP sizes + model numbers** | Spec sheets are blank |
| 10 | **Product images** (IFP, Kiosks, CCTV) | All Unsplash placeholders |
| 11 | **CCTV product details** — at least 2 products | Generic placeholder pages |
| 12 | **GST number** (Laxman sir) | Showing placeholder in footer/about |
| 13 | **Testimonials** — 3 to 5 (name, company, designation, quote) | Not on site yet |
| 14 | **Privacy policy approval** | Auto-generated text — client should sign off |
| 15 | **Brochure PDF decision** | Change order pending |

### Optional / TBD

| # | Ask | Why |
|---|-----|-----|
| 16 | **WhatsApp Business number** | TBD after trip — change order |
| 17 | **GSC verification click** | Client must click Verify in Google Search Console (meta tag already in code) |

---

## Go-Live Readiness

```
CODE         ████████████████████  95%  ← nearly done
CONTENT      ████████░░░░░░░░░░░░  40%  ← waiting on client
INFRA        ████░░░░░░░░░░░░░░░░  20%  ← waiting on access
```

**Minimum to go live:** Items 1–7 above + Cloudflare + Vercel setup + env vars in Vercel

**Can ship after go-live:** Real product specs/images · CCTV detail pages · Testimonials · WhatsApp button

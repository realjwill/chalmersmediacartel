# Chalmers Media Cartel — Project Context

## Purpose

This site's primary audience is event organizers checking whether Chalmers Media Cartel is a legitimate, credential-ready media crew before granting press passes. It is not a marketing or SEO play — don't optimize for search traffic or conversions here. See `GOALS.md` for what "done" means and `PLAN.md` for the active punch list.

## Accuracy rule (important)

Never add, infer, or "fill in" a credential, insurance claim, client name, or experience stat that the client hasn't confirmed. This page gets checked by people deciding whether to credential the client for real events — an invented or wrong claim is a liability, not just a content gap. If a section is missing real content, leave it as-is and add it to `PLAN.md`'s "needed from client" list rather than guessing.

## Stack

Flat static site, no build process, no framework. Two pages now, split by job:
- `index.html` — the portfolio/marketing page: hero, portfolio, services, about, contact (hash-anchor navigation: `#home`, `#portfolio`, `#services`, `#about`, `#contact`)
- `credentials.html` — the dedicated verification page: press kit download, who we cover, coverage experience, standards/insurance, and a direct-contact block. Kept deliberately plain (no animated hero) so it reads as an official reference document, not a sales page. This is the page meant to be linked from a press credential application.
- `main.js` — vanilla JS shared by both pages: mobile nav toggle, portfolio category filtering, contact form validation. Selectors are guarded (`if (el)` / empty `forEach`), so it's safe to include on a page that doesn't have all the elements.
- `styles.css` — custom CSS, no Tailwind/Bootstrap, shared by both pages
- `docs/` — press kit and media verification PDFs, linked from `credentials.html` and the header's persistent "Press Kit" button
- Deployed to Vercel from `github.com/realjwill/chalmersmediacartel` (`main` branch); no `vercel.json` needed for a static multi-page site like this

To preview locally, just open `index.html` or `credentials.html` directly in a browser — no dev server required.

## Conventions

- Adding a portfolio item: add a new `.portfolio-item` block in the portfolio section of `index.html` with the right `data-category` (`sports`, `music`, or `travel`) so the existing filter buttons in `main.js` pick it up.
- The contact form currently validates client-side and shows a fake success message but discards the data (`main.js`, end of the submit handler, marked with a `TODO`). Don't wire this up without checking `PLAN.md` first — it's an intentionally deferred phase, not an oversight.
- Social links: only link to profiles that are real and live. A dead `href="#"` icon looks worse on a verification page than no icon at all.
- Nav links are page-aware, not templated: each HTML file's header has its own copy of the nav with correct relative paths (`index.html#section` from `credentials.html`, bare `#section` from `index.html`). If you add a third page, update the nav in both existing files too — there's no shared partial.

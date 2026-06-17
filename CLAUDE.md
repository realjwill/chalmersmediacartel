# Chalmers Media Cartel — Project Context

## Purpose

This site's primary audience is event organizers checking whether Chalmers Media Cartel is a legitimate, credential-ready media crew before granting press passes. It is not a marketing or SEO play — don't optimize for search traffic or conversions here. See `GOALS.md` for what "done" means and `PLAN.md` for the active punch list.

## Accuracy rule (important)

Never add, infer, or "fill in" a credential, insurance claim, client name, or experience stat that the client hasn't confirmed. This page gets checked by people deciding whether to credential the client for real events — an invented or wrong claim is a liability, not just a content gap. If a section is missing real content, leave it as-is and add it to `PLAN.md`'s "needed from client" list rather than guessing.

## Stack

Flat static site, no build process, no framework:
- `index.html` — the entire single-page site (hash-anchor navigation: `#home`, `#portfolio`, `#services`, `#press`, `#about`, `#contact`)
- `main.js` — vanilla JS: mobile nav toggle, portfolio category filtering, contact form validation
- `styles.css` — custom CSS, no Tailwind/Bootstrap
- `docs/` — press kit and media verification PDFs, linked from the Press & Credentials section
- Deployed to Vercel from `github.com/realjwill/chalmersmediacartel` (`main` branch); no `vercel.json` needed for a static site like this

To preview locally, just open `index.html` in a browser — no dev server required.

## Conventions

- Adding a portfolio item: add a new `.portfolio-item` block in the portfolio section of `index.html` with the right `data-category` (`sports`, `music`, or `travel`) so the existing filter buttons in `main.js` pick it up.
- The contact form currently validates client-side and shows a fake success message but discards the data (`main.js`, end of the submit handler, marked with a `TODO`). Don't wire this up without checking `PLAN.md` first — it's an intentionally deferred phase, not an oversight.
- Social links: only link to profiles that are real and live. A dead `href="#"` icon looks worse on a verification page than no icon at all.

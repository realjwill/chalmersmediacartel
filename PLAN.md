# Plan

## Done

- Fixed press kit download link to point at `docs/ChalmersMedia_PressKit.pdf` (was pointing at a missing `press-kit.pdf`)
- Removed dead YouTube/TikTok icons from the contact section and footer (both were `href="#"`) — Instagram and Facebook links were already real and were left in place

## Needed from client before these sections can be finished

- **Portfolio** — real photos/videos for the 6 placeholder slots (sports/music/travel categories), to replace the empty `.placeholder` divs in the portfolio section
- **Who We Cover / Coverage Experience** — real client, league, and event names to replace the bracketed placeholders (`index.html`, "Who We Cover" and "Coverage Experience" lists)
- **Insurance** — real carrier name and coverage details for the "Liability insurance carried for assignments" line, or a decision to drop that line until it's real
- **Years of experience** — a real number for the Highlights section (currently `[X]+ combined years`)
- **YouTube/TikTok** — real profile URLs, if/when they exist, so those icons can be added back

Until each of these is provided, leave the corresponding text/section as-is rather than inventing a placeholder-sounding number or name — a wrong or invented claim on a verification page is worse than an honest gap.

## Deferred

- Contact form backend (currently shows a fake success message and discards the data — see `main.js`'s submit handler). Wire this up once the content above is finalized. Decide then between simple email forwarding (Formspree/Resend) or Supabase.

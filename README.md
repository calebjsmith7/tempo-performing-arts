# Tempo School of Performing Arts

One-page site for Tempo School of Performing Arts (Castle Rock, CO), rebuilt from
the original Weebly site with Next.js and exported as static HTML for Firebase Hosting.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content

All copy, dates, links, instructors, gallery photos and newsletters live in
[`app/content.ts`](app/content.ts). Images are in `public/images`, newsletters in
`public/newsletters` (full size + `thumb-` version), the recital program in `public/docs`.

## Build & deploy (Firebase static hosting)

`next.config.ts` uses `output: "export"`, so `npm run build` writes a static site to `out/`.
`firebase.json` serves `out/` with clean URLs and long-lived caching for hashed assets.

```bash
npm i -g firebase-tools
firebase login
firebase use --add          # pick your Firebase project (creates .firebaserc)
npm run deploy              # build + firebase deploy --only hosting
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://tempocastlerock.web.app`) at build time so
social-share preview images resolve to absolute URLs.

## Notes

- Cache Components / PPR are disabled: they need a server and can't be used with static export.
- The project lives on an exFAT drive, where macOS writes `._*` files that corrupt Turbopack's
  cache. `predev`/`prebuild` scripts delete them automatically (`npm run clean:appledouble`).

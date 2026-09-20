TRUTH × DARE - offline installable web app
==========================================
Files
  index.html      app shell
  style.css       styles
  app.js          game logic + prompts (210) + service-worker registration
  sw.js           service worker (precaches everything, works fully offline)
  manifest.json   web app manifest (install to home screen)
  icons/          app icons (any + maskable, apple-touch, favicon, svg)

Run / deploy
  GitHub Pages: upload ALL files to the repo root (or a /docs folder) and enable Pages.
  Open the site once with internet; after that it works with no connection.
  Install: Android Chrome -> menu -> "Install app"; iPhone Safari -> Share -> "Add to Home Screen".

Local test (service workers need http, not file://)
  python3 -m http.server 8000   then open http://localhost:8000

Updating: change VERSION at the top of sw.js so phones fetch the new files.
Fonts: uses your device's built-in serif/sans fonts so nothing is downloaded.

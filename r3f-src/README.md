# r3f-src

Source for the site's react-three-fiber / shadergradient accents (the hero orb
and the CTA gradient background). This is the only part of the GG EZ site that
needs a build step — everything else in the repo is plain HTML/CSS/JS.

Builds to `../assets/r3f/bundle.js`, loaded by the main site via
`<script type="module" src="assets/r3f/bundle.js">`.

## Rebuild after editing `src/main.jsx`

```bash
cd r3f-src
npm install
npx vite build --config vite.config.mjs
```

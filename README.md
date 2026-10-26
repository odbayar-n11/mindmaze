# MindMaze website

The three MindMaze designs as a Next.js (App Router) + TypeScript site:

| Route      | Page                                   |
| ---------- | -------------------------------------- |
| `/`        | Homepage                               |
| `/puzzles` | MindMaze puzzle site (3D burr puzzle)  |
| `/coding`  | Coding                                 |

In **Our approach** on the homepage, the **Puzzle** card opens `/puzzles` and the **Coding** card opens `/coding`.
On those two pages the MindMaze logo (and **Home** in the Coding menu) leads back to `/`.

## Run it

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

`npm run typecheck` runs the TypeScript compiler on its own.

## How it is built

```
app/
  layout.tsx          fonts (the same Google Fonts as the designs) + page transition
  page.tsx            /          -> components/home/HomePage
  puzzles/page.tsx    /puzzles   -> components/puzzles/PuzzlesPage
  coding/page.tsx     /coding    -> components/coding/CodingPage
  globals.css         base styles + transition panel
components/
  home/ coding/ puzzles/
    <Name>Page.tsx    behaviour: language toggle, animations, state
    <Name>View.tsx    the page layout, one component per section in ./sections
    sections/*.tsx    markup of each section (sizes, colours and spacing from the design)
    content.ts        all text in English and Mongolian, plus lists (nav, photos, team…)
    <name>.css        the design's stylesheet, scoped to that page (.page-home, …)
  coding/FilmReel.tsx "Projects we shaped": caption, arrows and dots around the film reel
  coding/reelScene.ts three.js: the loop of film the projects run along
  home/eye.ts         hero eye that blinks between the photo and the drawing
  home/map-data.ts    province outlines and student projects for the map
  puzzles/burr.ts     three.js: the six-piece wooden burr that assembles as you scroll
  transition/         page transition (+ a small three.js burr shown while it plays)
lib/
  lang.ts             EN / МН choice, kept when you move between pages
  motion.ts           sliding photo rows and the drifting photo column
  pageReady.ts        lets a page hold the transition until its 3D scene is ready
public/media/         every image from the designs
```

- **Editing text:** change `content.ts` of the page. Each string is `L('English', 'Монгол')`.
- **Styles** are copied from the designs unchanged and scoped per page, so the three pages never
  affect each other. Inline styles in the sections are the exact values from the design.
- **three.js** is pinned to r128, the same version the design uses, so the wood, light and colour of
  the 3D burr match exactly. It is only downloaded on the puzzle page and for the transition.

## Projects reel (Coding page)

The student projects in **Projects we shaped** run on a loop of 35 mm film, built after the
selected-work reel on shader.se. Its shape, camera, sprocket holes and timing were measured from a
screen recording of that site:

- The loop stays still while the film slides along it, one frame per step, on a damped spring
  (about 0.4 s). While it moves, fading ghost exposures trail behind, like a screen's afterglow.
- The far side of the loop shows through above the front, mirrored, and fades out toward the back.
- The title rolls over a drum: the old one drops away, the new one turns over the top into place.
- The arrows, the dots, the keyboard arrow keys, and dragging the film all move it.

To change the projects, edit `projects` in `components/coding/content.ts` (title, type and screen
image; any number works). The screens live in `public/media/projects/` and are cropped to the film
window from the top.

## Page transition

Clicking any link to another page starts the transition (`components/transition/PageTransition.tsx`):

1. A navy panel, edged with the site's Mongolian key band, sweeps up over the page while a small
   wooden burr assembles in the middle (three.js) above the MindMaze lettering and the page name.
2. The next page loads underneath. The puzzle page keeps the panel up until its 3D burr is ready.
3. The panel carries on upward and the new page rises into place.

Browser back / forward gets a short fade instead. With "reduce motion" switched on in the operating
system, the transition is a quick fade.

## Still to fill in

- The forms (homepage contact, Coding "Apply", puzzle-site "Register") are layout only. They need a
  backend or form service before they send anything.
- The event's date and venue on the puzzle site are still `[Date]` / `[Venue]` (`components/puzzles/content.ts`).
- The homepage contact email is still the placeholder `[hello@yourdomain.mn]` (`components/home/sections/Contact.tsx`).

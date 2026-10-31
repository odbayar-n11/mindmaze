# Coding 2: design reference for the /coding page

This folder holds the new design for the Coding page, made on the Claude design canvas.
Rebuild `app/coding` + `components/coding/` so the live page matches it.

## Files

| File | What it is |
| --- | --- |
| `Coding2.dc.html` | The design source: plain HTML with inline styles plus a small template layer (below). This is the source of truth for layout, sizes, colours and text. |
| `desktop-01.png` … `desktop-06.png` | The page at 1399 px wide, English, top to bottom. |
| `desktop-mn-01.png` … `desktop-mn-06.png` | The same page in Mongolian. |
| `mobile-01.png` … `mobile-07.png` | The page at 390 px wide (phone). |

## Reading `Coding2.dc.html`

- `{{t.someKey}}` is a piece of text. Both languages are in the `<script>` at the bottom:
  `someKey: L('English text', 'Mongolian text')`. Keep both; the page has an EN / МН switch.
- `{{accent}}` = `#E2574C` (MindMaze orange). `{{onAccent}}` = `#FFFFFF` (text on orange).
- `onClick="{{q0}}"` … `{{q4}}` toggle the five questions; `<sc-if value="{{o0}}">` is the answer shown while
  question 0 is open (question 0 starts open, opening one closes the others). `{{r0}}` rotates the plus icon 45°.
- `{{toggleSol}}` / `<sc-if value="{{showSol}}">` is the "Show a solution" toggle on the code card.
- `{{setEn}}` / `{{setMn}}` switch language; `{{enBg}}`, `{{mnBg}}` etc. colour the active language pill.
- `<helmet>` holds the font link and a few CSS rules (`.c2-pill:hover`, `.c2-q:hover`, `.c2-raise` on wide screens).

## Fonts (load with `next/font/google`)

- **Anton** for headings and big numbers. Anton has no Cyrillic letters, so headings use
  `'Anton', 'Oswald', sans-serif` with **Oswald 700** as the Cyrillic fallback (Mongolian).
- **Inter** (400/500/600/700) for body text and buttons.
- **JetBrains Mono** (400/500) for the code card.

## Images

Every `/_blob/<id>` in the design is already in this project as `public/media/<id>.<ext>`:

| In the design | In the project | Used for |
| --- | --- | --- |
| `/_blob/2a247f25ddc10df30a8d898e98a8509a` | `/media/2a247f25ddc10df30a8d898e98a8509a.png` | logo icon (shown white with `filter: brightness(0) invert(1)`) |
| `/_blob/e909eea4bc807598c43bcab5e40cfb0b` | `/media/e909eea4bc807598c43bcab5e40cfb0b.png` | logo word "MIND MAZE" |
| `/_blob/3c6a4baae0bcebef7966ed568cb0faaf` | `/media/3c6a4baae0bcebef7966ed568cb0faaf.jpg` | hero background photo (students and mentors) and one card in the photo fan |
| `/_blob/18dd08be500119697ebb9158121c8393` | `/media/18dd08be500119697ebb9158121c8393.jpg` | photo fan |
| `/_blob/359356f40941b4cd2d79db90b7e79a9d` | `/media/359356f40941b4cd2d79db90b7e79a9d.jpg` | photo fan |
| `/_blob/4920fa3d593153ad46faaadbf57d1f82` | `/media/4920fa3d593153ad46faaadbf57d1f82.jpg` | photo fan |
| `/_blob/ab5f6e7ac7b63e77e518f7f327913fb8` | `/media/ab5f6e7ac7b63e77e518f7f327913fb8.jpg` | "Puzzles in coding" side photo, photo fan |
| `/_blob/c1f4436b1b4fbc23d29aff680acb7a71` | `/media/c1f4436b1b4fbc23d29aff680acb7a71.jpg` | "Puzzles in coding" side photo, photo fan |
| `/_blob/e1b5d33424da198ad87d0349812712b1` | `/media/e1b5d33424da198ad87d0349812712b1.jpg` | photo fan |
| `/_blob/bba70e3e9ef32b82c2b1c1ee41e1f8ba` | `/media/bba70e3e9ef32b82c2b1c1ee41e1f8ba.webp` | still picture of the project film strip (see note) |

## Notes

- **Projects we shaped:** the design shows a still picture of the project film strip. This site already has the
  live 3D film reel (`components/coding/FilmReel.tsx`). Keep the live reel in that spot instead of the picture.
- **Why coding cards:** the three burr-puzzle icons are inline SVGs. Copy them as they are; their `fill` matches the
  card background (`#141414`, middle card `#1A1A1A`) to hide back lines.
- **Format cards:** "Summer in-person class" and "In your school (coming soon)" keep full colour; only their buttons
  are disabled (`disabled`, still orange, label "Closed" / "Хаагдсан"). "Online class" keeps a working "Apply now".
- **Phone number:** the design shows and dials (+976) 88971747.
- Keep the page responsive: compare with the `mobile-*.png` screenshots.

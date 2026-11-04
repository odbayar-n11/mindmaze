# Homepage: design reference for the home page (`/`)

This folder holds the new home page design ("Homepage (new) copy"), made on the Claude design canvas.
Rebuild `app/page.tsx` + `components/home/` so the live home page matches it.

## Files

| File | What it is |
| --- | --- |
| `Homepage.dc.html` | The design source: plain HTML with inline styles plus a small template layer (below). It is the source of truth for layout, colours, fonts and all text. |
| `desktop-01.png` … `desktop-06.png` | The page at 1399 px wide, English, top to bottom. |
| `desktop-mn-01.png` … `desktop-mn-06.png` | The same page in Mongolian. |
| `mobile-01.png` … `mobile-10.png` | The page at 390 px wide (phone), shot at 2x. |
| `media/` | Every image the page uses, named `<id>.<ext>`. Most are already in `public/media`; copy over any that are missing. New in this design: `8fa8835d5276d0ea3a096cd3449b5e75.png` (white ball puzzle), `b2c5f0f72ce272f4ec2d2e101b829979.png` (white star puzzle), `7d1022342537b1e970e3fa7de80d76dc.png` (code screenshot). |

## Reading `Homepage.dc.html`

- `/_blob/<id>` and `B('<id>')` are images. Use `/media/<id>.<ext>` from `public/media` (the files in `media/` here).
- `{{t.someKey}}` is a piece of text. Both languages are in the `<script>` at the bottom:
  `someKey: L('English text', 'Mongolian text')`. Keep both; the page has an EN / МН switch in the header.
- `<sc-for list="{{x}}" as="item">` repeats its content for each entry of the array `x` in that script;
  `<sc-if value="{{flag}}">` shows its content only when `flag` is true.
- `ref="{{setEyeEl}}"`, `{{setVTrack}}`, `{{setTrackD}}` hook up the small scripts at the bottom
  (blinking eye, vertical photo loop in Part 01, team carousel). The existing project already has these behaviours
  (`components/home/eye.ts` and the team/marquee code); reuse them.
- `<helmet>` holds the font link and the CSS rules (hover states, phone layout under 760 px, the card art).
- Ignore everything in `<helmet>` that starts with `.rug` or `.orn`: those rules are left over from experiments and draw nothing.

## Fonts (load with `next/font/google`)

- **Jost** (400–800): body text, nav, buttons, labels, and the titles/text inside the two Part 03 cards.
- **DM Serif Display**: section headings and the "MINDMAZE MONGOLIA" hero title.
- **Instrument Serif** (regular and italic): long paragraphs and the Part 02 quote.
- **Noto Sans Mongolian**: the vertical traditional-script lines in Part 01.

## Sections, top to bottom

1. **Hero (`#top`)**: full-width photo of children holding a wooden burr puzzle (`284380a184f156d726b6860d53c7763d`), 771 px tall on desktop.
   Header bar over the top with a dark fade behind it; soft dark wash on the left half; "MINDMAZE / MONGOLIA" in white DM Serif with a short orange line under it.
   On phones the header and title sit on a navy band and the photo goes below them.
2. **Part 01 · What we serve (`#why`)**: vertical traditional Mongolian script column, heading and text, and a vertical looping photo strip on the right.
3. **Part 02 · Why we started (`#story`)**: new section. Lead paragraph, then the quote (left) next to three short points: The spark, The gap, Our answer (right), then the animated eye
   (it blinks and switches between the photo and a drawing of a puzzle). The eye used to be in the hero; move it here.
4. **Part 03 · Our approach (`#our-programs`)**: two gradient cards (no photos) with rounded corners:
   - "Traditional puzzle lessons": red gradient, white puzzles (ball and star) in the bottom-right corner, running off the edges.
   - "Coding classes": dark navy gradient, the code screenshot in a tilted dark editor window (three window dots) in the bottom-right corner.
   - Each card: title, short text, "↗ Learn more" link to `#involved`. Cards lift slightly on hover. Card colours are in `progCards` in the script (`bg`, `glow`, `fg`, `sub`, `link`).
5. **Part 04 · Impact (`#impact`)**, **Part 05 · Team (`#team`)**, **Part 06 · Get involved (`#involved`)**, **Contact (`#contact`)**, **footer**: match the design and screenshots.

Header nav (in this order): Home, About, Our story, Approach, Impact, Team, Get involved, Contact; then EN/МН switch and "Log in".

## Fixed sizes to ignore

Some boxes got fixed pixel sizes from being dragged on the design canvas. Do **not** copy these; let the content size itself,
but keep the look of the desktop screenshots:

- `height: 6929px` on `<div class="rug">` (this wrapper can be a plain `<div>`)
- `height: 508px` on `#why`
- `width: 802px; height: 131px` on the Part 02 lead paragraph
- `height: 418px` on the Part 02 quote + beats row
- `width: 847px; height: 496px` on the eye wrapper (keep it centred, max 1040 px wide)
- `width: 401px; height: 54px` on the Part 03 heading
- `width: 1258px` on a wrapper in Part 04

The phone screenshots were taken with these removed.

## Notes

- Keep the page responsive: compare with the `mobile-*.png` screenshots.
- The images in `media/` are the exact files used in the design.

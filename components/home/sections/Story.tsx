import type { HomeVals } from '../HomePage';
import { PartLabel } from './PartLabel';

/** Part 02 · Why we started: lead, quote + three beats, then the blinking eye. */
export default function Story({ v }: { v: HomeVals }) {
  const { setEyeEl, storyBeats, t } = v;
  return (
    <section id="story" className="story">
      <div className="story-head">
        <PartLabel n="02" part={t.part} title={t.storyTitle} />
        <p className="story-lead">{t.storyLead}</p>
      </div>
      <div className="story-row">
        <blockquote className="story-quote">
          <p>“{t.storyQuote}”</p>
          <div className="story-by">— {t.storyQuoteBy}</div>
        </blockquote>
        <ol className="story-beats">
          {storyBeats.map((sb, i) => (
            <li key={i}>
              <span aria-hidden="true" style={{ background: sb.sq }} />
              <div>
                <h3>{sb.title}</h3>
                <p>{sb.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="story-eye">
        <svg
          ref={setEyeEl}
          viewBox="0 0 1000 530"
          role="img"
          aria-label="An engraved eye that blinks, with a watercolor wooden burr puzzle turning as its pupil"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            overflow: 'visible',
          }}
        >
          <defs>
            <clipPath id="eye-open">
              <path data-eye="clip" d="M90,320 Q500,-50.0 910,320 Q500,570.0 90,320 Z" />
            </clipPath>
            <filter id="eye-ink" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="1"
                seed="3"
                result="g"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="g"
                scale="1.6"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
          <g fill="none" stroke="#072039" strokeLinecap="round" filter="url(#eye-ink)">
            <path d="M70,310 Q500,-100 930,310" strokeWidth="1.60" opacity="0.55" />
            <path d="M64,304 Q500,-116 936,304" strokeWidth="1.50" opacity="0.50" />
            <path d="M58,298 Q500,-132 942,298" strokeWidth="1.40" opacity="0.45" />
            <path d="M52,293 Q500,-148 948,293" strokeWidth="1.30" opacity="0.40" />
            <path d="M46,287 Q500,-164 954,287" strokeWidth="1.20" opacity="0.35" />
            <path d="M40,282 Q500,-180 960,282" strokeWidth="1.10" opacity="0.30" />
            <path d="M34,276 Q500,-196 966,276" strokeWidth="1.00" opacity="0.25" />
            <path d="M28,270 Q500,-212 972,270" strokeWidth="0.90" opacity="0.20" />
            <path d="M22,265 Q500,-228 978,265" strokeWidth="0.80" opacity="0.15" />
            <path d="M110,326 Q500,614 890,326" strokeWidth="1.40" opacity="0.45" />
            <path d="M120,329 Q500,629 880,329" strokeWidth="1.28" opacity="0.39" />
            <path d="M130,332 Q500,644 870,332" strokeWidth="1.16" opacity="0.33" />
            <path d="M140,335 Q500,659 860,335" strokeWidth="1.04" opacity="0.27" />
            <path d="M150,338 Q500,674 850,338" strokeWidth="0.92" opacity="0.21" />
            <path d="M160,341 Q500,689 840,341" strokeWidth="0.80" opacity="0.15" />
            <path d="M70,300 l-22,-6" strokeWidth="1.2" opacity="0.5" />
            <path d="M66,306 l-24,-3" strokeWidth="1.2" opacity="0.5" />
            <path d="M62,312 l-26,0" strokeWidth="1.2" opacity="0.5" />
            <path d="M58,318 l-28,3" strokeWidth="1.2" opacity="0.5" />
            <path d="M54,324 l-30,6" strokeWidth="1.2" opacity="0.5" />
            <path d="M50,330 l-32,9" strokeWidth="1.2" opacity="0.5" />
            <path d="M46,336 l-34,12" strokeWidth="1.2" opacity="0.5" />
          </g>
          <g clipPath="url(#eye-open)">
            <g data-eye="draw">
              <rect x="60" y="0" width="880" height="640" fill="#F3EFE6" />
              <path
                d="M103,238 L67,420 M897,238 L930,420 M120,240 L82,418 M881,240 L913,418 M129,241 L94,416 M869,241 L903,416 M143,242 L113,414 M860,242 L892,414 M153,244 L117,412 M844,244 L881,412 M164,246 L127,410 M837,246 L868,410 M175,247 L139,408 M825,247 L861,408 M187,248 L150,406 M813,248 L844,406 M202,250 L170,404 M800,250 L833,404 M212,252 L177,402 M788,252 L819,402 M225,253 L189,400 M774,253 L811,400 M237,254 L205,398 M764,254 L794,398 M251,256 L220,396 M752,256 L787,396 M263,258 L233,394 M738,258 L769,394 M272,259 L234,392 M725,259 L756,392 M282,260 L247,390 M712,260 L746,390 M299,262 L267,388 M700,262 L736,388 M307,264 L276,386 M692,264 L726,386 M321,265 L290,384 M677,265 L714,384 M331,266 L294,382 M665,266 L696,382 M347,268 L310,380 M655,268 L688,380 M356,270 L324,378 M643,270 L675,378"
                fill="none"
                stroke="#34323A"
                strokeWidth="1.1"
                strokeLinecap="round"
                opacity="0.32"
              />
              <g data-eye="sprite">
                <image
                  href="/media/f4b8938412b792aa99d3403957faab10.webp"
                  x="353"
                  y="151"
                  width="294"
                  height="294"
                  aria-label="Watercolor wooden burr puzzle"
                />
              </g>
            </g>
            <path
              data-eye="shadow"
              d="M90,320 Q500,-50.0 910,320"
              fill="none"
              stroke="#0B1528"
              strokeWidth="26"
              opacity="0.35"
            />
          </g>
          <g filter="url(#eye-ink)">
            <path
              data-eye="upper"
              d="M90,320 Q500,-50.0 910,320"
              fill="none"
              stroke="#072039"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              data-eye="lower"
              d="M90,320 Q500,570.0 910,320"
              fill="none"
              stroke="#072039"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              data-eye="lash"
              d=""
              fill="none"
              stroke="#072039"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              data-eye="lowlash"
              d=""
              fill="none"
              stroke="#072039"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.8"
            />
          </g>
          <path d="M90,320 L60,316" stroke="#E2574C" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}

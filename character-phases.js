/**
 * character-phases.js
 * Sada 7 SVG ilustrací advokáta pro hru "Neznalost dobrých knih neomlouvá"
 *
 * Použití:
 *   import { PHASES } from './character-phases.js';
 *   document.getElementById('character').innerHTML = PHASES[mistakeCount];
 *
 * Nebo bez ES modulů:
 *   <script src="character-phases.js"></script>
 *   document.getElementById('character').innerHTML = PHASES[mistakeCount];
 *
 * PHASES[0] = výchozí stav (0 chyb)
 * PHASES[1] = rozcuchané vlasy (1 chyba)
 * PHASES[2] = rozvázaná kravata (2 chyby)
 * PHASES[3] = politý kávou (3 chyby)
 * PHASES[4] = rozsypaný spis, kelímek na zemi (4 chyby)
 * PHASES[5] = trenky + tetování WK 4ever (5 chyb)
 * PHASES[6] = razítko ZAMÍTNUTO (6 chyb = prohra)
 *
 * Poznámky:
 * - ViewBox fází 0–4: "0 0 240 380"
 * - ViewBox fází 5–6: "0 0 240 410"
 * - Pattern ID mají suffix -ph0 až -ph6 (unikátní napříč fázemi)
 * - Barvy: vínová #993556, modrá #185FA5, zelená kelímku #98c451
 */

const PHASES = [

/* ─────────────────────────────────────────────
   FÁZE 0 — Výchozí stav, sebevědomý advokát s kelímkem
   ───────────────────────────────────────────── */
`<svg viewBox="0 0 240 380" width="100%" role="img" aria-label="Advokát - výchozí stav" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatchV7-ph0" patternUnits="userSpaceOnUse" width="3" height="3" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="3" stroke="#1a1a1a" stroke-width="0.4" opacity="0.5"/>
    </pattern>
    <pattern id="hatchHairV7-ph0" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#1a1a1a" stroke-width="0.3" opacity="0.35"/>
    </pattern>
    <pattern id="suitTexV7-ph0" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#042C53" stroke-width="0.4" opacity="0.4"/>
    </pattern>
    <pattern id="pantsTexV7-ph0" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#0a0a0a" stroke-width="0.3" opacity="0.4"/>
    </pattern>
    <pattern id="stripeTexV7-ph0" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#185FA5" stroke-width="0.3" opacity="0.3"/>
    </pattern>
    <pattern id="leatherTexV7-ph0" patternUnits="userSpaceOnUse" width="3" height="3">
      <circle cx="1" cy="1" r="0.3" fill="#0a0a0a" opacity="0.5"/>
      <circle cx="2" cy="2.2" r="0.2" fill="#3a3a3a" opacity="0.4"/>
    </pattern>
  </defs>
  <ellipse cx="120" cy="365" rx="55" ry="4" fill="#1a1a1a" opacity="0.15"/>
  <path d="M 90 245 L 88 360 L 110 360 L 115 248 Z" fill="#2C2C2A"/>
  <path d="M 90 245 L 88 360 L 110 360 L 115 248 Z" fill="url(#pantsTexV7-ph0)"/>
  <path d="M 125 248 L 130 360 L 152 360 L 150 245 Z" fill="#2C2C2A"/>
  <path d="M 125 248 L 130 360 L 152 360 L 150 245 Z" fill="url(#pantsTexV7-ph0)"/>
  <line x1="120" y1="248" x2="120" y2="360" stroke="#0a0a0a" stroke-width="0.5" opacity="0.2"/>
  <ellipse cx="98" cy="362" rx="14" ry="4" fill="#0a0a0a"/>
  <ellipse cx="142" cy="362" rx="14" ry="4" fill="#0a0a0a"/>
  <path d="M 75 145 Q 68 165 62 200 L 56 240 Q 54 252 64 256 L 76 254 Q 78 220 82 195 Z" fill="#1a1a1a"/>
  <path d="M 75 145 Q 68 165 62 200 L 56 240 Q 54 252 64 256 L 76 254 Q 78 220 82 195 Z" fill="url(#hatchV7-ph0)" opacity="0.6"/>
  <path d="M 165 145 Q 172 165 178 200 L 184 240 Q 186 252 176 256 L 164 254 Q 162 220 158 195 Z" fill="#1a1a1a"/>
  <path d="M 165 145 Q 172 165 178 200 L 184 240 Q 186 252 176 256 L 164 254 Q 162 220 158 195 Z" fill="url(#hatchV7-ph0)" opacity="0.6"/>
  <path d="M 56 250 Q 53 258 58 266 L 70 264 L 76 256 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 184 250 Q 187 258 184 264 L 172 262 L 164 256 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 44 256 L 72 256 L 70 292 L 46 292 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 62 256 L 72 256 L 70 292 L 64 292 Z" fill="#E8DFCB" opacity="0.6"/>
  <rect x="45" y="268" width="26" height="10" fill="#98c451" stroke="#1a1a1a" stroke-width="0.4"/>
  <circle cx="58" cy="273" r="3.2" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.5"/>
  <circle cx="58" cy="273" r="2" fill="#98c451"/>
  <path d="M 42 252 L 74 252 L 72 256 L 44 256 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.6"/>
  <ellipse cx="52" cy="253.5" rx="3" ry="1" fill="#1a1a1a"/>
  <line x1="72" y1="256" x2="70" y2="292" stroke="#1a1a1a" stroke-width="0.4" opacity="0.5"/>
  <ellipse cx="58" cy="292" rx="11" ry="1" fill="#E8DFCB" stroke="#1a1a1a" stroke-width="0.4" opacity="0.7"/>
  <path d="M 54 260 Q 58 262 64 261 Q 68 263 70 261" fill="none" stroke="#1a1a1a" stroke-width="0.4" opacity="0.5"/>
  <path d="M 88 130 L 100 250 L 92 250 L 78 145 Q 75 138 88 130 Z" fill="#185FA5" stroke="#0C447C" stroke-width="0.5"/>
  <path d="M 88 130 L 100 250 L 92 250 L 78 145 Q 75 138 88 130 Z" fill="url(#suitTexV7-ph0)"/>
  <path d="M 152 130 L 140 250 L 148 250 L 162 145 Q 165 138 152 130 Z" fill="#185FA5" stroke="#0C447C" stroke-width="0.5"/>
  <path d="M 152 130 L 140 250 L 148 250 L 162 145 Q 165 138 152 130 Z" fill="url(#suitTexV7-ph0)"/>
  <path d="M 75 145 Q 70 160 70 180 L 75 240 Q 78 248 90 250 L 100 250 L 140 250 L 150 250 Q 162 248 165 240 L 170 180 Q 170 160 165 145 Q 155 130 140 128 L 100 128 Q 85 130 75 145 Z" fill="#1a1a1a"/>
  <path d="M 75 145 Q 70 160 70 180 L 75 240 Q 78 248 90 250 L 100 250 L 140 250 L 150 250 Q 162 248 165 240 L 170 180 Q 170 160 165 145 Q 155 130 140 128 L 100 128 Q 85 130 75 145 Z" fill="url(#hatchV7-ph0)" opacity="0.55"/>
  <path d="M 88 128 L 102 128 L 108 250 L 95 250 Z" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.5"/>
  <path d="M 88 128 L 102 128 L 108 250 L 95 250 Z" fill="url(#stripeTexV7-ph0)"/>
  <path d="M 152 128 L 138 128 L 132 250 L 145 250 Z" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.5"/>
  <path d="M 152 128 L 138 128 L 132 250 L 145 250 Z" fill="url(#stripeTexV7-ph0)"/>
  <path d="M 102 128 L 138 128 L 132 145 L 108 145 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.7"/>
  <path d="M 113 145 L 127 145 L 125 155 L 115 155 Z" fill="#F5F0E5" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 116 155 L 124 155 L 122 178 Q 120 182 118 178 Z" fill="#993556" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 116 155 L 124 155 L 123 158 L 117 158 Z" fill="#72243E"/>
  <path d="M 168 260 Q 168 252 174 250 Q 180 248 186 250 Q 192 252 192 260" fill="none" stroke="#0a0a0a" stroke-width="2.5" stroke-linecap="round"/>
  <rect x="148" y="262" width="64" height="42" rx="2" fill="#1a1a1a" stroke="#0a0a0a" stroke-width="0.8"/>
  <rect x="148" y="262" width="64" height="42" rx="2" fill="url(#leatherTexV7-ph0)" opacity="0.6"/>
  <line x1="148" y1="270" x2="212" y2="270" stroke="#0a0a0a" stroke-width="0.4"/>
  <line x1="148" y1="296" x2="212" y2="296" stroke="#0a0a0a" stroke-width="0.4"/>
  <line x1="166" y1="262" x2="166" y2="304" stroke="#0a0a0a" stroke-width="0.6"/>
  <line x1="194" y1="262" x2="194" y2="304" stroke="#0a0a0a" stroke-width="0.6"/>
  <circle cx="180" cy="283" r="1.2" fill="#5a5a5a"/>
  <path d="M 88 95 Q 86 115 92 125 Q 100 130 120 130 Q 140 130 148 125 Q 154 115 152 95 Q 150 75 140 65 Q 130 58 120 58 Q 110 58 100 65 Q 90 75 88 95 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="1"/>
  <path d="M 88 95 Q 86 105 90 115 L 92 105 Q 94 90 100 78 Q 110 65 120 62 Q 100 65 92 80 Q 88 88 88 95 Z" fill="#1a1a1a" opacity="0.12"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="url(#hatchHairV7-ph0)" opacity="0.4"/>
  <path d="M 96 105 Q 100 102 108 103 Q 113 104 115 107 L 113 109 Q 108 106 102 107 Q 98 108 96 105 Z" fill="#1a1a1a"/>
  <path d="M 125 107 Q 127 104 132 103 Q 140 102 144 105 Q 142 108 138 107 Q 132 106 127 109 Z" fill="#1a1a1a"/>
  <circle cx="105" cy="107" r="1.5" fill="#1a1a1a"/>
  <circle cx="135" cy="107" r="1.5" fill="#1a1a1a"/>
  <ellipse cx="105" cy="107" rx="7" ry="6" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <ellipse cx="135" cy="107" rx="7" ry="6" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="112" y1="107" x2="128" y2="107" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="98" y1="106" x2="92" y2="104" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="142" y1="106" x2="148" y2="104" stroke="#1a1a1a" stroke-width="1.2"/>
  <path d="M 117 115 Q 120 118 123 115 L 122 122 Q 120 124 118 122 Z" fill="#1a1a1a" opacity="0.6"/>
  <path d="M 110 130 Q 120 134 130 130 Q 128 133 120 134 Q 112 133 110 130 Z" fill="#1a1a1a"/>
</svg>`,

/* ─────────────────────────────────────────────
   FÁZE 1 — Rozcuchané vlasy
   ───────────────────────────────────────────── */
`<svg viewBox="0 0 240 380" width="100%" role="img" aria-label="Advokát - rozcuchané vlasy" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatchV7-ph1" patternUnits="userSpaceOnUse" width="3" height="3" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="3" stroke="#1a1a1a" stroke-width="0.4" opacity="0.5"/>
    </pattern>
    <pattern id="hatchHairV7-ph1" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#1a1a1a" stroke-width="0.3" opacity="0.35"/>
    </pattern>
    <pattern id="suitTexV7-ph1" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#042C53" stroke-width="0.4" opacity="0.4"/>
    </pattern>
    <pattern id="pantsTexV7-ph1" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#0a0a0a" stroke-width="0.3" opacity="0.4"/>
    </pattern>
    <pattern id="stripeTexV7-ph1" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#185FA5" stroke-width="0.3" opacity="0.3"/>
    </pattern>
    <pattern id="leatherTexV7-ph1" patternUnits="userSpaceOnUse" width="3" height="3">
      <circle cx="1" cy="1" r="0.3" fill="#0a0a0a" opacity="0.5"/>
      <circle cx="2" cy="2.2" r="0.2" fill="#3a3a3a" opacity="0.4"/>
    </pattern>
  </defs>
  <ellipse cx="120" cy="365" rx="55" ry="4" fill="#1a1a1a" opacity="0.15"/>
  <path d="M 90 245 L 88 360 L 110 360 L 115 248 Z" fill="#2C2C2A"/>
  <path d="M 90 245 L 88 360 L 110 360 L 115 248 Z" fill="url(#pantsTexV7-ph1)"/>
  <path d="M 125 248 L 130 360 L 152 360 L 150 245 Z" fill="#2C2C2A"/>
  <path d="M 125 248 L 130 360 L 152 360 L 150 245 Z" fill="url(#pantsTexV7-ph1)"/>
  <line x1="120" y1="248" x2="120" y2="360" stroke="#0a0a0a" stroke-width="0.5" opacity="0.2"/>
  <ellipse cx="98" cy="362" rx="14" ry="4" fill="#0a0a0a"/>
  <ellipse cx="142" cy="362" rx="14" ry="4" fill="#0a0a0a"/>
  <path d="M 75 145 Q 68 165 62 200 L 56 240 Q 54 252 64 256 L 76 254 Q 78 220 82 195 Z" fill="#1a1a1a"/>
  <path d="M 75 145 Q 68 165 62 200 L 56 240 Q 54 252 64 256 L 76 254 Q 78 220 82 195 Z" fill="url(#hatchV7-ph1)" opacity="0.6"/>
  <path d="M 165 145 Q 172 165 178 200 L 184 240 Q 186 252 176 256 L 164 254 Q 162 220 158 195 Z" fill="#1a1a1a"/>
  <path d="M 165 145 Q 172 165 178 200 L 184 240 Q 186 252 176 256 L 164 254 Q 162 220 158 195 Z" fill="url(#hatchV7-ph1)" opacity="0.6"/>
  <path d="M 56 250 Q 53 258 58 266 L 70 264 L 76 256 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 184 250 Q 187 258 184 264 L 172 262 L 164 256 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 44 256 L 72 256 L 70 292 L 46 292 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 62 256 L 72 256 L 70 292 L 64 292 Z" fill="#E8DFCB" opacity="0.6"/>
  <rect x="45" y="268" width="26" height="10" fill="#98c451" stroke="#1a1a1a" stroke-width="0.4"/>
  <circle cx="58" cy="273" r="3.2" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.5"/>
  <circle cx="58" cy="273" r="2" fill="#98c451"/>
  <path d="M 42 252 L 74 252 L 72 256 L 44 256 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.6"/>
  <ellipse cx="52" cy="253.5" rx="3" ry="1" fill="#1a1a1a"/>
  <line x1="72" y1="256" x2="70" y2="292" stroke="#1a1a1a" stroke-width="0.4" opacity="0.5"/>
  <ellipse cx="58" cy="292" rx="11" ry="1" fill="#E8DFCB" stroke="#1a1a1a" stroke-width="0.4" opacity="0.7"/>
  <path d="M 88 130 L 100 250 L 92 250 L 78 145 Q 75 138 88 130 Z" fill="#185FA5" stroke="#0C447C" stroke-width="0.5"/>
  <path d="M 88 130 L 100 250 L 92 250 L 78 145 Q 75 138 88 130 Z" fill="url(#suitTexV7-ph1)"/>
  <path d="M 152 130 L 140 250 L 148 250 L 162 145 Q 165 138 152 130 Z" fill="#185FA5" stroke="#0C447C" stroke-width="0.5"/>
  <path d="M 152 130 L 140 250 L 148 250 L 162 145 Q 165 138 152 130 Z" fill="url(#suitTexV7-ph1)"/>
  <path d="M 75 145 Q 70 160 70 180 L 75 240 Q 78 248 90 250 L 100 250 L 140 250 L 150 250 Q 162 248 165 240 L 170 180 Q 170 160 165 145 Q 155 130 140 128 L 100 128 Q 85 130 75 145 Z" fill="#1a1a1a"/>
  <path d="M 75 145 Q 70 160 70 180 L 75 240 Q 78 248 90 250 L 100 250 L 140 250 L 150 250 Q 162 248 165 240 L 170 180 Q 170 160 165 145 Q 155 130 140 128 L 100 128 Q 85 130 75 145 Z" fill="url(#hatchV7-ph1)" opacity="0.55"/>
  <path d="M 88 128 L 102 128 L 108 250 L 95 250 Z" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.5"/>
  <path d="M 88 128 L 102 128 L 108 250 L 95 250 Z" fill="url(#stripeTexV7-ph1)"/>
  <path d="M 152 128 L 138 128 L 132 250 L 145 250 Z" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.5"/>
  <path d="M 152 128 L 138 128 L 132 250 L 145 250 Z" fill="url(#stripeTexV7-ph1)"/>
  <path d="M 102 128 L 138 128 L 132 145 L 108 145 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.7"/>
  <path d="M 113 145 L 127 145 L 125 155 L 115 155 Z" fill="#F5F0E5" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 116 155 L 124 155 L 122 178 Q 120 182 118 178 Z" fill="#993556" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 116 155 L 124 155 L 123 158 L 117 158 Z" fill="#72243E"/>
  <path d="M 168 260 Q 168 252 174 250 Q 180 248 186 250 Q 192 252 192 260" fill="none" stroke="#0a0a0a" stroke-width="2.5" stroke-linecap="round"/>
  <rect x="148" y="262" width="64" height="42" rx="2" fill="#1a1a1a" stroke="#0a0a0a" stroke-width="0.8"/>
  <rect x="148" y="262" width="64" height="42" rx="2" fill="url(#leatherTexV7-ph1)" opacity="0.6"/>
  <line x1="148" y1="270" x2="212" y2="270" stroke="#0a0a0a" stroke-width="0.4"/>
  <line x1="148" y1="296" x2="212" y2="296" stroke="#0a0a0a" stroke-width="0.4"/>
  <line x1="166" y1="262" x2="166" y2="304" stroke="#0a0a0a" stroke-width="0.6"/>
  <line x1="194" y1="262" x2="194" y2="304" stroke="#0a0a0a" stroke-width="0.6"/>
  <circle cx="180" cy="283" r="1.2" fill="#5a5a5a"/>
  <path d="M 88 95 Q 86 115 92 125 Q 100 130 120 130 Q 140 130 148 125 Q 154 115 152 95 Q 150 75 140 65 Q 130 58 120 58 Q 110 58 100 65 Q 90 75 88 95 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="1"/>
  <path d="M 88 95 Q 86 105 90 115 L 92 105 Q 94 90 100 78 Q 110 65 120 62 Q 100 65 92 80 Q 88 88 88 95 Z" fill="#1a1a1a" opacity="0.12"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="url(#hatchHairV7-ph1)" opacity="0.4"/>
  <path d="M 91 76 Q 86 80 84 88 Q 87 82 91 80 Q 89 86 88 92 Q 92 84 93 80 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 153 76 Q 158 80 160 88 Q 157 82 153 80 Q 155 86 156 92 Q 152 84 151 80 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 108 70 Q 110 78 106 86 Q 105 92 102 96 Q 104 88 105 82 Q 103 90 100 94 Q 105 84 106 76 Q 107 72 108 70 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 128 68 Q 132 76 130 84 Q 127 88 124 90 Q 128 84 129 78 Q 130 72 128 68 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 118 54 Q 119 50 121 52 Q 122 56 121 60 Q 119 58 118 54 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.4"/>
  <line x1="100" y1="56" x2="98" y2="51" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="135" y1="55" x2="137" y2="50" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="146" y1="62" x2="150" y2="58" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="93" y1="64" x2="89" y2="60" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <path d="M 96 104 Q 100 101 108 102 Q 113 103 115 106 L 113 108 Q 108 105 102 106 Q 98 107 96 104 Z" fill="#1a1a1a"/>
  <path d="M 125 106 Q 127 103 132 102 Q 140 101 144 104 Q 142 107 138 106 Q 132 105 127 108 Z" fill="#1a1a1a"/>
  <circle cx="105" cy="107" r="1.5" fill="#1a1a1a"/>
  <circle cx="135" cy="107" r="1.5" fill="#1a1a1a"/>
  <ellipse cx="105" cy="107" rx="7" ry="6" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <ellipse cx="135" cy="107" rx="7" ry="6" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="112" y1="107" x2="128" y2="107" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="98" y1="106" x2="92" y2="104" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="142" y1="106" x2="148" y2="104" stroke="#1a1a1a" stroke-width="1.2"/>
  <path d="M 117 115 Q 120 118 123 115 L 122 122 Q 120 124 118 122 Z" fill="#1a1a1a" opacity="0.6"/>
  <path d="M 110 130 Q 120 133 130 130 Q 128 132 120 133 Q 112 132 110 130 Z" fill="#1a1a1a"/>
</svg>`,

/* ─────────────────────────────────────────────
   FÁZE 2 — Rozvázaná kravata
   ───────────────────────────────────────────── */
`<svg viewBox="0 0 240 380" width="100%" role="img" aria-label="Advokát - rozvázaná kravata" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatchV7-ph2" patternUnits="userSpaceOnUse" width="3" height="3" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="3" stroke="#1a1a1a" stroke-width="0.4" opacity="0.5"/>
    </pattern>
    <pattern id="hatchHairV7-ph2" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#1a1a1a" stroke-width="0.3" opacity="0.35"/>
    </pattern>
    <pattern id="suitTexV7-ph2" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#042C53" stroke-width="0.4" opacity="0.4"/>
    </pattern>
    <pattern id="pantsTexV7-ph2" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#0a0a0a" stroke-width="0.3" opacity="0.4"/>
    </pattern>
    <pattern id="stripeTexV7-ph2" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#185FA5" stroke-width="0.3" opacity="0.3"/>
    </pattern>
    <pattern id="leatherTexV7-ph2" patternUnits="userSpaceOnUse" width="3" height="3">
      <circle cx="1" cy="1" r="0.3" fill="#0a0a0a" opacity="0.5"/>
      <circle cx="2" cy="2.2" r="0.2" fill="#3a3a3a" opacity="0.4"/>
    </pattern>
  </defs>
  <ellipse cx="120" cy="365" rx="55" ry="4" fill="#1a1a1a" opacity="0.15"/>
  <path d="M 90 245 L 88 360 L 110 360 L 115 248 Z" fill="#2C2C2A"/>
  <path d="M 90 245 L 88 360 L 110 360 L 115 248 Z" fill="url(#pantsTexV7-ph2)"/>
  <path d="M 125 248 L 130 360 L 152 360 L 150 245 Z" fill="#2C2C2A"/>
  <path d="M 125 248 L 130 360 L 152 360 L 150 245 Z" fill="url(#pantsTexV7-ph2)"/>
  <line x1="120" y1="248" x2="120" y2="360" stroke="#0a0a0a" stroke-width="0.5" opacity="0.2"/>
  <ellipse cx="98" cy="362" rx="14" ry="4" fill="#0a0a0a"/>
  <ellipse cx="142" cy="362" rx="14" ry="4" fill="#0a0a0a"/>
  <path d="M 75 145 Q 68 165 62 200 L 56 240 Q 54 252 64 256 L 76 254 Q 78 220 82 195 Z" fill="#1a1a1a"/>
  <path d="M 75 145 Q 68 165 62 200 L 56 240 Q 54 252 64 256 L 76 254 Q 78 220 82 195 Z" fill="url(#hatchV7-ph2)" opacity="0.6"/>
  <path d="M 165 145 Q 172 165 178 200 L 184 240 Q 186 252 176 256 L 164 254 Q 162 220 158 195 Z" fill="#1a1a1a"/>
  <path d="M 165 145 Q 172 165 178 200 L 184 240 Q 186 252 176 256 L 164 254 Q 162 220 158 195 Z" fill="url(#hatchV7-ph2)" opacity="0.6"/>
  <path d="M 56 250 Q 53 258 56 264 L 68 262 L 76 254 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 184 250 Q 187 258 184 264 L 172 262 L 164 256 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 44 256 L 72 256 L 70 292 L 46 292 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 62 256 L 72 256 L 70 292 L 64 292 Z" fill="#E8DFCB" opacity="0.6"/>
  <rect x="45" y="268" width="26" height="10" fill="#98c451" stroke="#1a1a1a" stroke-width="0.4"/>
  <circle cx="58" cy="273" r="3.2" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.5"/>
  <circle cx="58" cy="273" r="2" fill="#98c451"/>
  <path d="M 42 252 L 74 252 L 72 256 L 44 256 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.6"/>
  <ellipse cx="52" cy="253.5" rx="3" ry="1" fill="#1a1a1a"/>
  <line x1="72" y1="256" x2="70" y2="292" stroke="#1a1a1a" stroke-width="0.4" opacity="0.5"/>
  <ellipse cx="58" cy="292" rx="11" ry="1" fill="#E8DFCB" stroke="#1a1a1a" stroke-width="0.4" opacity="0.7"/>
  <path d="M 88 130 L 100 250 L 92 250 L 78 145 Q 75 138 88 130 Z" fill="#185FA5" stroke="#0C447C" stroke-width="0.5"/>
  <path d="M 88 130 L 100 250 L 92 250 L 78 145 Q 75 138 88 130 Z" fill="url(#suitTexV7-ph2)"/>
  <path d="M 152 130 L 140 250 L 148 250 L 162 145 Q 165 138 152 130 Z" fill="#185FA5" stroke="#0C447C" stroke-width="0.5"/>
  <path d="M 152 130 L 140 250 L 148 250 L 162 145 Q 165 138 152 130 Z" fill="url(#suitTexV7-ph2)"/>
  <path d="M 75 145 Q 70 160 70 180 L 75 240 Q 78 248 90 250 L 100 250 L 140 250 L 150 250 Q 162 248 165 240 L 170 180 Q 170 160 165 145 Q 155 130 140 128 L 100 128 Q 85 130 75 145 Z" fill="#1a1a1a"/>
  <path d="M 75 145 Q 70 160 70 180 L 75 240 Q 78 248 90 250 L 100 250 L 140 250 L 150 250 Q 162 248 165 240 L 170 180 Q 170 160 165 145 Q 155 130 140 128 L 100 128 Q 85 130 75 145 Z" fill="url(#hatchV7-ph2)" opacity="0.55"/>
  <path d="M 88 128 L 102 128 L 108 250 L 95 250 Z" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.5"/>
  <path d="M 88 128 L 102 128 L 108 250 L 95 250 Z" fill="url(#stripeTexV7-ph2)"/>
  <path d="M 152 128 L 138 128 L 132 250 L 145 250 Z" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.5"/>
  <path d="M 152 128 L 138 128 L 132 250 L 145 250 Z" fill="url(#stripeTexV7-ph2)"/>
  <path d="M 102 128 L 110 144 L 115 148 L 120 152 L 125 148 L 130 144 L 138 128 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.7"/>
  <path d="M 102 128 L 110 144 L 113 147 L 108 130 Z" fill="#F0EBDB" stroke="#1a1a1a" stroke-width="0.4"/>
  <path d="M 138 128 L 130 144 L 127 147 L 132 130 Z" fill="#F0EBDB" stroke="#1a1a1a" stroke-width="0.4"/>
  <path d="M 119 154 L 132 156 L 130 167 L 121 165 Z" fill="#F5F0E5" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 119 154 L 132 156 L 132 159 L 119 157 Z" fill="#1a1a1a" opacity="0.15"/>
  <path d="M 122 167 Q 121 175 124 182 Q 127 192 125 205 Q 124 215 127 225 Q 128 230 130 232 Q 132 230 131 225 Q 130 215 132 205 Q 133 195 131 185 Q 130 178 129 167 Z" fill="#993556" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 122 167 Q 121 175 124 182 L 126 182 Q 125 175 126 167 Z" fill="#72243E"/>
  <path d="M 127 228 L 132 228 L 130 234 L 129 234 Z" fill="#72243E" stroke="#1a1a1a" stroke-width="0.4"/>
  <path d="M 117 167 Q 115 173 116 180 Q 117 188 115 195 L 113 198 Q 112 196 113 192 Q 114 184 113 175 Q 114 170 117 167 Z" fill="#993556" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 113 195 L 117 196 L 115 200 L 114 200 Z" fill="#72243E" stroke="#1a1a1a" stroke-width="0.4"/>
  <circle cx="120" cy="150" r="1" fill="#1a1a1a" opacity="0.3"/>
  <path d="M 168 260 Q 168 252 174 250 Q 180 248 186 250 Q 192 252 192 260" fill="none" stroke="#0a0a0a" stroke-width="2.5" stroke-linecap="round"/>
  <rect x="148" y="262" width="64" height="42" rx="2" fill="#1a1a1a" stroke="#0a0a0a" stroke-width="0.8"/>
  <rect x="148" y="262" width="64" height="42" rx="2" fill="url(#leatherTexV7-ph2)" opacity="0.6"/>
  <line x1="148" y1="270" x2="212" y2="270" stroke="#0a0a0a" stroke-width="0.4"/>
  <line x1="148" y1="296" x2="212" y2="296" stroke="#0a0a0a" stroke-width="0.4"/>
  <line x1="166" y1="262" x2="166" y2="304" stroke="#0a0a0a" stroke-width="0.6"/>
  <line x1="194" y1="262" x2="194" y2="304" stroke="#0a0a0a" stroke-width="0.6"/>
  <circle cx="180" cy="283" r="1.2" fill="#5a5a5a"/>
  <path d="M 88 95 Q 86 115 92 125 Q 100 130 120 130 Q 140 130 148 125 Q 154 115 152 95 Q 150 75 140 65 Q 130 58 120 58 Q 110 58 100 65 Q 90 75 88 95 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="1"/>
  <path d="M 88 95 Q 86 105 90 115 L 92 105 Q 94 90 100 78 Q 110 65 120 62 Q 100 65 92 80 Q 88 88 88 95 Z" fill="#1a1a1a" opacity="0.12"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="url(#hatchHairV7-ph2)" opacity="0.4"/>
  <path d="M 91 76 Q 86 80 84 88 Q 87 82 91 80 Q 89 86 88 92 Q 92 84 93 80 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 153 76 Q 158 80 160 88 Q 157 82 153 80 Q 155 86 156 92 Q 152 84 151 80 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 108 70 Q 110 78 106 86 Q 105 92 102 96 Q 104 88 105 82 Q 103 90 100 94 Q 105 84 106 76 Q 107 72 108 70 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 128 68 Q 132 76 130 84 Q 127 88 124 90 Q 128 84 129 78 Q 130 72 128 68 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 118 54 Q 119 50 121 52 Q 122 56 121 60 Q 119 58 118 54 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.4"/>
  <line x1="100" y1="56" x2="98" y2="51" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="135" y1="55" x2="137" y2="50" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="146" y1="62" x2="150" y2="58" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="93" y1="64" x2="89" y2="60" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <path d="M 96 105 Q 100 102 108 103 Q 113 104 115 107 L 113 109 Q 108 106 102 107 Q 98 108 96 105 Z" fill="#1a1a1a"/>
  <path d="M 125 107 Q 127 104 132 103 Q 140 102 144 105 Q 142 108 138 107 Q 132 106 127 109 Z" fill="#1a1a1a"/>
  <circle cx="105" cy="107" r="1.5" fill="#1a1a1a"/>
  <circle cx="135" cy="107" r="1.5" fill="#1a1a1a"/>
  <ellipse cx="105" cy="107" rx="7" ry="6" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <ellipse cx="135" cy="107" rx="7" ry="6" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="112" y1="107" x2="128" y2="107" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="98" y1="106" x2="92" y2="104" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="142" y1="106" x2="148" y2="104" stroke="#1a1a1a" stroke-width="1.2"/>
  <path d="M 117 115 Q 120 118 123 115 L 122 122 Q 120 124 118 122 Z" fill="#1a1a1a" opacity="0.6"/>
  <path d="M 110 130 Q 120 132 130 131 Q 128 132 120 132 Q 112 132 110 130 Z" fill="#1a1a1a"/>
</svg>`,

/* ─────────────────────────────────────────────
   FÁZE 3 — Politý kávou (kelímek nakloněný, skvrny vlevo, na noze, na zemi)
   ───────────────────────────────────────────── */
`<svg viewBox="0 0 240 380" width="100%" role="img" aria-label="Advokát - politý kávou" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatchV7-ph3" patternUnits="userSpaceOnUse" width="3" height="3" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="3" stroke="#1a1a1a" stroke-width="0.4" opacity="0.5"/>
    </pattern>
    <pattern id="hatchHairV7-ph3" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#1a1a1a" stroke-width="0.3" opacity="0.35"/>
    </pattern>
    <pattern id="suitTexV7-ph3" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#042C53" stroke-width="0.4" opacity="0.4"/>
    </pattern>
    <pattern id="pantsTexV7-ph3" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#0a0a0a" stroke-width="0.3" opacity="0.4"/>
    </pattern>
    <pattern id="stripeTexV7-ph3" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#185FA5" stroke-width="0.3" opacity="0.3"/>
    </pattern>
    <pattern id="leatherTexV7-ph3" patternUnits="userSpaceOnUse" width="3" height="3">
      <circle cx="1" cy="1" r="0.3" fill="#0a0a0a" opacity="0.5"/>
      <circle cx="2" cy="2.2" r="0.2" fill="#3a3a3a" opacity="0.4"/>
    </pattern>
    <pattern id="coffeeStainTex-ph3" patternUnits="userSpaceOnUse" width="2" height="2">
      <circle cx="0.5" cy="0.5" r="0.3" fill="#3a1f0a" opacity="0.4"/>
    </pattern>
  </defs>
  <ellipse cx="80" cy="368" rx="30" ry="6" fill="#4a2818" opacity="0.85"/>
  <ellipse cx="78" cy="368" rx="18" ry="3.5" fill="#3a1f0a" opacity="0.7"/>
  <ellipse cx="55" cy="370" rx="3" ry="1.5" fill="#4a2818" opacity="0.7"/>
  <ellipse cx="48" cy="372" rx="2" ry="1" fill="#4a2818" opacity="0.7"/>
  <ellipse cx="112" cy="370" rx="2.5" ry="1.2" fill="#4a2818" opacity="0.7"/>
  <ellipse cx="120" cy="365" rx="55" ry="4" fill="#1a1a1a" opacity="0.1"/>
  <path d="M 90 245 L 88 360 L 110 360 L 115 248 Z" fill="#2C2C2A"/>
  <path d="M 90 245 L 88 360 L 110 360 L 115 248 Z" fill="url(#pantsTexV7-ph3)"/>
  <path d="M 125 248 L 130 360 L 152 360 L 150 245 Z" fill="#2C2C2A"/>
  <path d="M 125 248 L 130 360 L 152 360 L 150 245 Z" fill="url(#pantsTexV7-ph3)"/>
  <path d="M 92 265 Q 88 280 92 295 Q 96 305 100 300 Q 102 285 100 270 Q 96 262 92 265 Z" fill="#7a4020" opacity="0.85"/>
  <path d="M 92 265 Q 88 280 92 295 Q 96 305 100 300 Q 102 285 100 270 Q 96 262 92 265 Z" fill="url(#coffeeStainTex-ph3)" opacity="0.5"/>
  <path d="M 95 300 Q 94 315 96 325 L 97 327 Q 98 320 98 305 Z" fill="#7a4020" opacity="0.7"/>
  <path d="M 100 320 Q 99 335 101 345 L 102 347 Q 103 338 103 325 Z" fill="#7a4020" opacity="0.7"/>
  <ellipse cx="105" cy="280" rx="2" ry="1.3" fill="#7a4020" opacity="0.7"/>
  <line x1="120" y1="248" x2="120" y2="360" stroke="#0a0a0a" stroke-width="0.5" opacity="0.2"/>
  <ellipse cx="98" cy="362" rx="14" ry="4" fill="#0a0a0a"/>
  <ellipse cx="142" cy="362" rx="14" ry="4" fill="#0a0a0a"/>
  <path d="M 75 145 Q 68 165 62 200 L 56 240 Q 54 252 64 256 L 76 254 Q 78 220 82 195 Z" fill="#1a1a1a"/>
  <path d="M 75 145 Q 68 165 62 200 L 56 240 Q 54 252 64 256 L 76 254 Q 78 220 82 195 Z" fill="url(#hatchV7-ph3)" opacity="0.6"/>
  <path d="M 165 145 Q 172 165 178 200 L 184 240 Q 186 252 176 256 L 164 254 Q 162 220 158 195 Z" fill="#1a1a1a"/>
  <path d="M 165 145 Q 172 165 178 200 L 184 240 Q 186 252 176 256 L 164 254 Q 162 220 158 195 Z" fill="url(#hatchV7-ph3)" opacity="0.6"/>
  <path d="M 56 250 Q 53 258 58 266 L 70 264 L 76 256 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 184 250 Q 187 258 184 264 L 172 262 L 164 256 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <g transform="translate(58, 268) rotate(-35)">
    <path d="M 0 0 L 22 0 L 24 36 L -2 36 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
    <path d="M 14 0 L 22 0 L 24 36 L 16 36 Z" fill="#E8DFCB" opacity="0.6"/>
    <rect x="-1" y="12" width="25" height="10" fill="#98c451" stroke="#1a1a1a" stroke-width="0.4"/>
    <circle cx="11" cy="17" r="3.2" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.5"/>
    <circle cx="11" cy="17" r="2" fill="#98c451"/>
    <path d="M -3 -2 L 25 -2 L 23 2 L -1 2 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.6"/>
    <ellipse cx="6" cy="-1" rx="3" ry="1" fill="#1a1a1a"/>
    <line x1="22" y1="0" x2="24" y2="36" stroke="#1a1a1a" stroke-width="0.4" opacity="0.5"/>
  </g>
  <path d="M 65 246 Q 75 240 85 230 Q 95 220 100 215 L 102 218 Q 96 224 88 232 Q 78 242 67 250 Z" fill="#4a2818" opacity="0.85"/>
  <ellipse cx="72" cy="238" rx="1.5" ry="2.5" fill="#4a2818" transform="rotate(-30 72 238)"/>
  <ellipse cx="80" cy="232" rx="1.2" ry="2" fill="#4a2818" transform="rotate(-25 80 232)"/>
  <ellipse cx="90" cy="225" rx="1" ry="1.8" fill="#4a2818" transform="rotate(-20 90 225)"/>
  <path d="M 88 130 L 100 250 L 92 250 L 78 145 Q 75 138 88 130 Z" fill="#185FA5" stroke="#0C447C" stroke-width="0.5"/>
  <path d="M 88 130 L 100 250 L 92 250 L 78 145 Q 75 138 88 130 Z" fill="url(#suitTexV7-ph3)"/>
  <path d="M 152 130 L 140 250 L 148 250 L 162 145 Q 165 138 152 130 Z" fill="#185FA5" stroke="#0C447C" stroke-width="0.5"/>
  <path d="M 152 130 L 140 250 L 148 250 L 162 145 Q 165 138 152 130 Z" fill="url(#suitTexV7-ph3)"/>
  <path d="M 75 145 Q 70 160 70 180 L 75 240 Q 78 248 90 250 L 100 250 L 140 250 L 150 250 Q 162 248 165 240 L 170 180 Q 170 160 165 145 Q 155 130 140 128 L 100 128 Q 85 130 75 145 Z" fill="#1a1a1a"/>
  <path d="M 75 145 Q 70 160 70 180 L 75 240 Q 78 248 90 250 L 100 250 L 140 250 L 150 250 Q 162 248 165 240 L 170 180 Q 170 160 165 145 Q 155 130 140 128 L 100 128 Q 85 130 75 145 Z" fill="url(#hatchV7-ph3)" opacity="0.55"/>
  <path d="M 80 160 Q 76 180 78 205 Q 80 225 88 240 Q 96 248 102 244 Q 106 225 104 200 Q 102 175 96 160 Q 88 154 80 160 Z" fill="#7a4020" opacity="0.9"/>
  <path d="M 80 160 Q 76 180 78 205 Q 80 225 88 240 Q 96 248 102 244 Q 106 225 104 200 Q 102 175 96 160 Q 88 154 80 160 Z" fill="url(#coffeeStainTex-ph3)" opacity="0.5"/>
  <path d="M 84 178 Q 80 198 84 218 Q 90 232 96 226 Q 98 210 96 192 Q 92 176 84 178 Z" fill="#5a2e10" opacity="0.75"/>
  <path d="M 88 128 L 102 128 L 108 250 L 95 250 Z" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.5"/>
  <path d="M 88 128 L 102 128 L 108 250 L 95 250 Z" fill="url(#stripeTexV7-ph3)"/>
  <path d="M 90 155 Q 88 175 90 205 Q 93 218 100 222 Q 104 218 104 195 Q 103 168 100 155 Q 95 150 90 155 Z" fill="#7a4020" opacity="0.72"/>
  <path d="M 152 128 L 138 128 L 132 250 L 145 250 Z" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.5"/>
  <path d="M 152 128 L 138 128 L 132 250 L 145 250 Z" fill="url(#stripeTexV7-ph3)"/>
  <path d="M 102 128 L 110 144 L 115 148 L 120 152 L 125 148 L 130 144 L 138 128 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.7"/>
  <path d="M 119 154 L 132 156 L 130 167 L 121 165 Z" fill="#F5F0E5" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 122 167 Q 121 175 124 182 Q 127 192 125 205 Q 124 215 127 225 Q 128 230 130 232 Q 132 230 131 225 Q 130 215 132 205 Q 133 195 131 185 Q 130 178 129 167 Z" fill="#993556" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 127 228 L 132 228 L 130 234 L 129 234 Z" fill="#72243E" stroke="#1a1a1a" stroke-width="0.4"/>
  <path d="M 117 167 Q 115 173 116 180 Q 117 188 115 195 L 113 198 Q 112 196 113 192 Q 114 184 113 175 Q 114 170 117 167 Z" fill="#993556" stroke="#1a1a1a" stroke-width="0.5"/>
  <circle cx="120" cy="150" r="1" fill="#1a1a1a" opacity="0.3"/>
  <path d="M 168 260 Q 168 252 174 250 Q 180 248 186 250 Q 192 252 192 260" fill="none" stroke="#0a0a0a" stroke-width="2.5" stroke-linecap="round"/>
  <rect x="148" y="262" width="64" height="42" rx="2" fill="#1a1a1a" stroke="#0a0a0a" stroke-width="0.8"/>
  <rect x="148" y="262" width="64" height="42" rx="2" fill="url(#leatherTexV7-ph3)" opacity="0.6"/>
  <line x1="148" y1="270" x2="212" y2="270" stroke="#0a0a0a" stroke-width="0.4"/>
  <line x1="148" y1="296" x2="212" y2="296" stroke="#0a0a0a" stroke-width="0.4"/>
  <line x1="166" y1="262" x2="166" y2="304" stroke="#0a0a0a" stroke-width="0.6"/>
  <line x1="194" y1="262" x2="194" y2="304" stroke="#0a0a0a" stroke-width="0.6"/>
  <circle cx="180" cy="283" r="1.2" fill="#5a5a5a"/>
  <path d="M 88 95 Q 86 115 92 125 Q 100 130 120 130 Q 140 130 148 125 Q 154 115 152 95 Q 150 75 140 65 Q 130 58 120 58 Q 110 58 100 65 Q 90 75 88 95 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="1"/>
  <path d="M 88 95 Q 86 105 90 115 L 92 105 Q 94 90 100 78 Q 110 65 120 62 Q 100 65 92 80 Q 88 88 88 95 Z" fill="#1a1a1a" opacity="0.12"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="url(#hatchHairV7-ph3)" opacity="0.4"/>
  <path d="M 91 76 Q 86 80 84 88 Q 87 82 91 80 Q 89 86 88 92 Q 92 84 93 80 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 153 76 Q 158 80 160 88 Q 157 82 153 80 Q 155 86 156 92 Q 152 84 151 80 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 108 70 Q 110 78 106 86 Q 105 92 102 96 Q 104 88 105 82 Q 103 90 100 94 Q 105 84 106 76 Q 107 72 108 70 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 128 68 Q 132 76 130 84 Q 127 88 124 90 Q 128 84 129 78 Q 130 72 128 68 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 118 54 Q 119 50 121 52 Q 122 56 121 60 Q 119 58 118 54 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.4"/>
  <line x1="100" y1="56" x2="98" y2="51" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="135" y1="55" x2="137" y2="50" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="146" y1="62" x2="150" y2="58" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="93" y1="64" x2="89" y2="60" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <path d="M 95 96 Q 100 93 108 94 Q 113 95 116 99 L 114 100 Q 108 97 102 98 Q 98 99 95 96 Z" fill="#1a1a1a"/>
  <path d="M 124 99 Q 127 95 132 94 Q 140 93 145 96 Q 143 100 138 98 Q 132 97 126 100 Z" fill="#1a1a1a"/>
  <line x1="102" y1="104" x2="108" y2="110" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="108" y1="104" x2="102" y2="110" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="132" y1="104" x2="138" y2="110" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="138" y1="104" x2="132" y2="110" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
  <ellipse cx="105" cy="107" rx="7" ry="6" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <ellipse cx="135" cy="107" rx="7" ry="6" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="112" y1="107" x2="128" y2="107" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="98" y1="106" x2="92" y2="104" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="142" y1="106" x2="148" y2="104" stroke="#1a1a1a" stroke-width="1.2"/>
  <path d="M 117 115 Q 120 118 123 115 L 122 122 Q 120 124 118 122 Z" fill="#1a1a1a" opacity="0.6"/>
  <ellipse cx="120" cy="128" rx="3.5" ry="4.5" fill="#1a1a1a"/>
  <ellipse cx="120" cy="129" rx="2.5" ry="3.5" fill="#3a1818"/>
</svg>`,

/* ─────────────────────────────────────────────
   FÁZE 4 — Rozsypaný spis, kelímek na zemi, kávové skvrny přetrvávají
   ───────────────────────────────────────────── */
`<svg viewBox="0 0 240 400" width="100%" role="img" aria-label="Advokát - rozsypaný spis" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatchV7-ph4" patternUnits="userSpaceOnUse" width="3" height="3" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="3" stroke="#1a1a1a" stroke-width="0.4" opacity="0.5"/>
    </pattern>
    <pattern id="hatchHairV7-ph4" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#1a1a1a" stroke-width="0.3" opacity="0.35"/>
    </pattern>
    <pattern id="suitTexV7-ph4" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#042C53" stroke-width="0.4" opacity="0.4"/>
    </pattern>
    <pattern id="pantsTexV7-ph4" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#0a0a0a" stroke-width="0.3" opacity="0.4"/>
    </pattern>
    <pattern id="stripeTexV7-ph4" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#185FA5" stroke-width="0.3" opacity="0.3"/>
    </pattern>
    <pattern id="leatherTexV7-ph4" patternUnits="userSpaceOnUse" width="3" height="3">
      <circle cx="1" cy="1" r="0.3" fill="#0a0a0a" opacity="0.5"/>
      <circle cx="2" cy="2.2" r="0.2" fill="#3a3a3a" opacity="0.4"/>
    </pattern>
    <pattern id="coffeeStainTex-ph4" patternUnits="userSpaceOnUse" width="2" height="2">
      <circle cx="0.5" cy="0.5" r="0.3" fill="#3a1f0a" opacity="0.4"/>
    </pattern>
    <pattern id="paperLines-ph4" patternUnits="userSpaceOnUse" width="28" height="5">
      <line x1="2" y1="4" x2="26" y2="4" stroke="#aaa" stroke-width="0.4" opacity="0.6"/>
    </pattern>
  </defs>
  <ellipse cx="62" cy="372" rx="32" ry="7" fill="#4a2818" opacity="0.85"/>
  <ellipse cx="60" cy="372" rx="19" ry="4" fill="#3a1f0a" opacity="0.75"/>
  <ellipse cx="38" cy="374" rx="3" ry="1.5" fill="#4a2818" opacity="0.7"/>
  <ellipse cx="96" cy="374" rx="2.5" ry="1.2" fill="#4a2818" opacity="0.7"/>
  <g transform="rotate(-75, 48, 362)">
    <path d="M 36 350 L 60 350 L 58 386 L 38 386 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
    <path d="M 54 350 L 60 350 L 58 386 L 54 386 Z" fill="#E8DFCB" opacity="0.6"/>
    <rect x="37" y="362" width="22" height="9" fill="#98c451" stroke="#1a1a1a" stroke-width="0.4"/>
    <circle cx="48" cy="366" r="2.8" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.5"/>
    <circle cx="48" cy="366" r="1.8" fill="#98c451"/>
    <path d="M 34 348 L 62 348 L 60 352 L 36 352 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.6"/>
    <ellipse cx="44" cy="349.5" rx="2.8" ry="1" fill="#1a1a1a"/>
  </g>
  <g transform="rotate(-12, 55, 368)">
    <rect x="18" y="355" width="56" height="40" rx="1" fill="#c8955a" stroke="#1a1a1a" stroke-width="0.6"/>
    <rect x="18" y="355" width="56" height="40" rx="1" fill="url(#paperLines-ph4)" opacity="0.4"/>
    <path d="M 18 368 Q 26 360 38 358 L 42 395 L 18 395 Z" fill="#3a1f0a" opacity="0.55"/>
  </g>
  <g transform="rotate(8, 88, 363)">
    <rect x="58" y="352" width="52" height="38" rx="1" fill="#F5F2EA" stroke="#1a1a1a" stroke-width="0.6"/>
    <rect x="58" y="352" width="52" height="38" rx="1" fill="url(#paperLines-ph4)" opacity="0.8"/>
    <path d="M 58 352 L 80 352 L 80 390 L 58 390 Z" fill="#c8955a" opacity="0.55"/>
    <path d="M 58 352 L 72 352 L 72 390 L 58 390 Z" fill="#3a1f0a" opacity="0.35"/>
  </g>
  <g transform="rotate(-5, 155, 368)">
    <rect x="130" y="356" width="54" height="36" rx="1" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.6"/>
    <rect x="130" y="356" width="54" height="36" rx="1" fill="url(#paperLines-ph4)" opacity="0.8"/>
  </g>
  <g transform="rotate(18, 210, 360)">
    <rect x="186" y="350" width="44" height="32" rx="1" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.6"/>
    <rect x="186" y="350" width="44" height="32" rx="1" fill="url(#paperLines-ph4)" opacity="0.7"/>
    <path d="M 224 350 L 230 350 L 224 356 Z" fill="#E8DFCB" stroke="#1a1a1a" stroke-width="0.4"/>
  </g>
  <g transform="rotate(-22, 75, 355)">
    <rect x="52" y="340" width="46" height="34" rx="1" fill="#F5F2EA" stroke="#1a1a1a" stroke-width="0.6"/>
    <rect x="52" y="340" width="46" height="34" rx="1" fill="url(#paperLines-ph4)" opacity="0.8"/>
    <path d="M 52 362 L 98 362 L 98 374 L 52 374 Z" fill="#c8955a" opacity="0.5"/>
    <path d="M 52 368 L 98 368 L 98 374 L 52 374 Z" fill="#3a1f0a" opacity="0.35"/>
  </g>
  <ellipse cx="120" cy="367" rx="55" ry="4" fill="#1a1a1a" opacity="0.12"/>
  <path d="M 90 245 L 88 360 L 110 360 L 115 248 Z" fill="#2C2C2A"/>
  <path d="M 90 245 L 88 360 L 110 360 L 115 248 Z" fill="url(#pantsTexV7-ph4)"/>
  <path d="M 125 248 L 130 360 L 152 360 L 150 245 Z" fill="#2C2C2A"/>
  <path d="M 125 248 L 130 360 L 152 360 L 150 245 Z" fill="url(#pantsTexV7-ph4)"/>
  <path d="M 92 265 Q 88 280 92 295 Q 96 305 100 300 Q 102 285 100 270 Q 96 262 92 265 Z" fill="#7a4020" opacity="0.85"/>
  <path d="M 92 265 Q 88 280 92 295 Q 96 305 100 300 Q 102 285 100 270 Q 96 262 92 265 Z" fill="url(#coffeeStainTex-ph4)" opacity="0.5"/>
  <path d="M 95 300 Q 94 315 96 325 L 97 327 Q 98 320 98 305 Z" fill="#7a4020" opacity="0.7"/>
  <path d="M 100 320 Q 99 335 101 345 L 102 347 Q 103 338 103 325 Z" fill="#7a4020" opacity="0.7"/>
  <line x1="120" y1="248" x2="120" y2="360" stroke="#0a0a0a" stroke-width="0.5" opacity="0.2"/>
  <ellipse cx="98" cy="362" rx="14" ry="4" fill="#0a0a0a"/>
  <ellipse cx="142" cy="362" rx="14" ry="4" fill="#0a0a0a"/>
  <path d="M 75 145 Q 68 165 62 200 L 56 240 Q 54 252 64 256 L 76 254 Q 78 220 82 195 Z" fill="#1a1a1a"/>
  <path d="M 75 145 Q 68 165 62 200 L 56 240 Q 54 252 64 256 L 76 254 Q 78 220 82 195 Z" fill="url(#hatchV7-ph4)" opacity="0.6"/>
  <path d="M 165 145 Q 172 165 178 200 L 184 240 Q 186 252 176 256 L 164 254 Q 162 220 158 195 Z" fill="#1a1a1a"/>
  <path d="M 165 145 Q 172 165 178 200 L 184 240 Q 186 252 176 256 L 164 254 Q 162 220 158 195 Z" fill="url(#hatchV7-ph4)" opacity="0.6"/>
  <path d="M 56 250 Q 53 258 56 264 L 68 262 L 76 256 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 178 242 Q 186 248 188 258 L 176 260 L 168 252 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <line x1="180" y1="244" x2="183" y2="238" stroke="#F0C9A8" stroke-width="3" stroke-linecap="round"/>
  <line x1="184" y1="246" x2="188" y2="241" stroke="#F0C9A8" stroke-width="3" stroke-linecap="round"/>
  <line x1="187" y1="250" x2="192" y2="246" stroke="#F0C9A8" stroke-width="3" stroke-linecap="round"/>
  <line x1="180" y1="244" x2="183" y2="238" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="184" y1="246" x2="188" y2="241" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="187" y1="250" x2="192" y2="246" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <path d="M 88 130 L 100 250 L 92 250 L 78 145 Q 75 138 88 130 Z" fill="#185FA5" stroke="#0C447C" stroke-width="0.5"/>
  <path d="M 88 130 L 100 250 L 92 250 L 78 145 Q 75 138 88 130 Z" fill="url(#suitTexV7-ph4)"/>
  <path d="M 152 130 L 140 250 L 148 250 L 162 145 Q 165 138 152 130 Z" fill="#185FA5" stroke="#0C447C" stroke-width="0.5"/>
  <path d="M 152 130 L 140 250 L 148 250 L 162 145 Q 165 138 152 130 Z" fill="url(#suitTexV7-ph4)"/>
  <path d="M 75 145 Q 70 160 70 180 L 75 240 Q 78 248 90 250 L 100 250 L 140 250 L 150 250 Q 162 248 165 240 L 170 180 Q 170 160 165 145 Q 155 130 140 128 L 100 128 Q 85 130 75 145 Z" fill="#1a1a1a"/>
  <path d="M 75 145 Q 70 160 70 180 L 75 240 Q 78 248 90 250 L 100 250 L 140 250 L 150 250 Q 162 248 165 240 L 170 180 Q 170 160 165 145 Q 155 130 140 128 L 100 128 Q 85 130 75 145 Z" fill="url(#hatchV7-ph4)" opacity="0.55"/>
  <path d="M 80 160 Q 76 180 78 205 Q 80 225 88 240 Q 96 248 102 244 Q 106 225 104 200 Q 102 175 96 160 Q 88 154 80 160 Z" fill="#7a4020" opacity="0.9"/>
  <path d="M 80 160 Q 76 180 78 205 Q 80 225 88 240 Q 96 248 102 244 Q 106 225 104 200 Q 102 175 96 160 Q 88 154 80 160 Z" fill="url(#coffeeStainTex-ph4)" opacity="0.5"/>
  <path d="M 84 178 Q 80 198 84 218 Q 90 232 96 226 Q 98 210 96 192 Q 92 176 84 178 Z" fill="#5a2e10" opacity="0.75"/>
  <path d="M 88 128 L 102 128 L 108 250 L 95 250 Z" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.5"/>
  <path d="M 88 128 L 102 128 L 108 250 L 95 250 Z" fill="url(#stripeTexV7-ph4)"/>
  <path d="M 90 155 Q 88 175 90 205 Q 93 218 100 222 Q 104 218 104 195 Q 103 168 100 155 Q 95 150 90 155 Z" fill="#7a4020" opacity="0.72"/>
  <path d="M 152 128 L 138 128 L 132 250 L 145 250 Z" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.5"/>
  <path d="M 152 128 L 138 128 L 132 250 L 145 250 Z" fill="url(#stripeTexV7-ph4)"/>
  <path d="M 102 128 L 110 144 L 115 148 L 120 152 L 125 148 L 130 144 L 138 128 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.7"/>
  <path d="M 119 154 L 132 156 L 130 167 L 121 165 Z" fill="#F5F0E5" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 122 167 Q 121 175 124 182 Q 127 192 125 205 Q 124 215 127 225 Q 128 230 130 232 Q 132 230 131 225 Q 130 215 132 205 Q 133 195 131 185 Q 130 178 129 167 Z" fill="#993556" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 127 228 L 132 228 L 130 234 L 129 234 Z" fill="#72243E" stroke="#1a1a1a" stroke-width="0.4"/>
  <path d="M 117 167 Q 115 173 116 180 Q 117 188 115 195 L 113 198 Q 112 196 113 192 Q 114 184 113 175 Q 114 170 117 167 Z" fill="#993556" stroke="#1a1a1a" stroke-width="0.5"/>
  <circle cx="120" cy="150" r="1" fill="#1a1a1a" opacity="0.3"/>
  <g transform="rotate(-8, 175, 358)">
    <rect x="148" y="352" width="64" height="20" rx="2" fill="#1a1a1a" stroke="#0a0a0a" stroke-width="0.8"/>
    <rect x="148" y="352" width="64" height="20" rx="2" fill="url(#leatherTexV7-ph4)" opacity="0.6"/>
    <path d="M 148 352 Q 150 338 180 336 Q 210 334 212 352 Z" fill="#1a1a1a" stroke="#0a0a0a" stroke-width="0.8"/>
    <path d="M 148 352 Q 150 338 180 336 Q 210 334 212 352 Z" fill="url(#leatherTexV7-ph4)" opacity="0.6"/>
    <rect x="150" y="353" width="60" height="16" rx="1" fill="#2a2a28"/>
    <circle cx="180" cy="361" r="1.5" fill="#5a5a5a"/>
    <line x1="166" y1="352" x2="166" y2="372" stroke="#0a0a0a" stroke-width="0.6"/>
    <line x1="194" y1="352" x2="194" y2="372" stroke="#0a0a0a" stroke-width="0.6"/>
    <path d="M 166 352 Q 168 344 174 342 Q 180 340 186 342 Q 192 344 194 352" fill="none" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round"/>
  </g>
  <path d="M 88 95 Q 86 115 92 125 Q 100 130 120 130 Q 140 130 148 125 Q 154 115 152 95 Q 150 75 140 65 Q 130 58 120 58 Q 110 58 100 65 Q 90 75 88 95 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="1"/>
  <path d="M 88 95 Q 86 105 90 115 L 92 105 Q 94 90 100 78 Q 110 65 120 62 Q 100 65 92 80 Q 88 88 88 95 Z" fill="#1a1a1a" opacity="0.12"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="url(#hatchHairV7-ph4)" opacity="0.4"/>
  <path d="M 91 76 Q 86 80 84 88 Q 87 82 91 80 Q 89 86 88 92 Q 92 84 93 80 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 153 76 Q 158 80 160 88 Q 157 82 153 80 Q 155 86 156 92 Q 152 84 151 80 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 108 70 Q 110 78 106 86 Q 105 92 102 96 Q 104 88 105 82 Q 103 90 100 94 Q 105 84 106 76 Q 107 72 108 70 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 128 68 Q 132 76 130 84 Q 127 88 124 90 Q 128 84 129 78 Q 130 72 128 68 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 118 54 Q 119 50 121 52 Q 122 56 121 60 Q 119 58 118 54 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.4"/>
  <line x1="100" y1="56" x2="98" y2="51" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="135" y1="55" x2="137" y2="50" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="146" y1="62" x2="150" y2="58" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="93" y1="64" x2="89" y2="60" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <path d="M 94 98 Q 100 94 108 95 Q 114 96 116 100 L 114 101 Q 108 98 102 99 Q 97 100 94 98 Z" fill="#1a1a1a"/>
  <path d="M 124 100 Q 127 96 133 95 Q 141 94 145 97 Q 143 101 138 100 Q 132 99 126 101 Z" fill="#1a1a1a"/>
  <circle cx="105" cy="108" r="2.2" fill="#1a1a1a"/>
  <circle cx="135" cy="108" r="2.2" fill="#1a1a1a"/>
  <circle cx="104" cy="107" r="0.6" fill="#FAF8F3" opacity="0.8"/>
  <circle cx="134" cy="107" r="0.6" fill="#FAF8F3" opacity="0.8"/>
  <ellipse cx="105" cy="108" rx="7" ry="6.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <ellipse cx="135" cy="108" rx="7" ry="6.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="112" y1="108" x2="128" y2="108" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="98" y1="106" x2="92" y2="104" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="142" y1="106" x2="148" y2="104" stroke="#1a1a1a" stroke-width="1.2"/>
  <path d="M 117 115 Q 120 118 123 115 L 122 122 Q 120 124 118 122 Z" fill="#1a1a1a" opacity="0.6"/>
  <ellipse cx="120" cy="128" rx="4" ry="5" fill="#1a1a1a"/>
  <ellipse cx="120" cy="129" rx="3" ry="4" fill="#3a1818"/>
</svg>`,

/* ─────────────────────────────────────────────
   FÁZE 5 — Trenky s §, tetování WK 4ever, chlupaté nohy
   ───────────────────────────────────────────── */
`<svg viewBox="0 0 240 410" width="100%" role="img" aria-label="Advokát v trenýrkách" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatchHairV7-ph5" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#1a1a1a" stroke-width="0.3" opacity="0.35"/>
    </pattern>
    <pattern id="hatchV7-ph5" patternUnits="userSpaceOnUse" width="3" height="3" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="3" stroke="#1a1a1a" stroke-width="0.4" opacity="0.5"/>
    </pattern>
    <pattern id="suitTexV7-ph5" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#042C53" stroke-width="0.4" opacity="0.4"/>
    </pattern>
    <pattern id="coffeeStainTex-ph5" patternUnits="userSpaceOnUse" width="2" height="2">
      <circle cx="0.5" cy="0.5" r="0.3" fill="#3a1f0a" opacity="0.4"/>
    </pattern>
    <pattern id="paperLines-ph5" patternUnits="userSpaceOnUse" width="28" height="5">
      <line x1="2" y1="4" x2="26" y2="4" stroke="#aaa" stroke-width="0.4" opacity="0.6"/>
    </pattern>
    <pattern id="leatherTexV7-ph5" patternUnits="userSpaceOnUse" width="3" height="3">
      <circle cx="1" cy="1" r="0.3" fill="#0a0a0a" opacity="0.5"/>
      <circle cx="2" cy="2.2" r="0.2" fill="#3a3a3a" opacity="0.4"/>
    </pattern>
  </defs>
  <ellipse cx="62" cy="390" rx="32" ry="7" fill="#4a2818" opacity="0.82"/>
  <ellipse cx="60" cy="390" rx="19" ry="4" fill="#3a1f0a" opacity="0.7"/>
  <ellipse cx="38" cy="392" rx="3" ry="1.5" fill="#4a2818" opacity="0.7"/>
  <ellipse cx="96" cy="392" rx="2.5" ry="1.2" fill="#4a2818" opacity="0.7"/>
  <g transform="rotate(-75, 48, 378)">
    <path d="M 36 366 L 60 366 L 58 400 L 38 400 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
    <path d="M 54 366 L 60 366 L 58 400 L 54 400 Z" fill="#E8DFCB" opacity="0.6"/>
    <rect x="37" y="378" width="22" height="9" fill="#98c451" stroke="#1a1a1a" stroke-width="0.4"/>
    <circle cx="48" cy="382" r="2.8" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.5"/>
    <circle cx="48" cy="382" r="1.8" fill="#98c451"/>
    <path d="M 34 364 L 62 364 L 60 368 L 36 368 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.6"/>
    <ellipse cx="44" cy="365.5" rx="2.8" ry="1" fill="#1a1a1a"/>
  </g>
  <path d="M 68 350 Q 64 362 72 374 Q 84 382 105 380 Q 98 368 94 356 Q 88 348 80 348 Z" fill="#1a1a1a" opacity="0.9"/>
  <path d="M 68 350 Q 64 362 72 374 Q 84 382 105 380 Q 98 368 94 356 Q 88 348 80 348 Z" fill="url(#hatchV7-ph5)" opacity="0.5"/>
  <path d="M 172 350 Q 176 362 168 374 Q 156 382 135 380 Q 142 368 146 356 Q 152 348 160 348 Z" fill="#1a1a1a" opacity="0.9"/>
  <path d="M 172 350 Q 176 362 168 374 Q 156 382 135 380 Q 142 368 146 356 Q 152 348 160 348 Z" fill="url(#hatchV7-ph5)" opacity="0.5"/>
  <path d="M 80 348 Q 90 356 120 358 Q 150 356 160 348 L 154 368 Q 142 378 120 380 Q 98 378 86 368 Z" fill="#1a1a1a" opacity="0.85"/>
  <path d="M 80 348 Q 90 356 120 358 Q 150 356 160 348 L 154 368 Q 142 378 120 380 Q 98 378 86 368 Z" fill="url(#hatchV7-ph5)" opacity="0.5"/>
  <g transform="rotate(6, 150, 364)">
    <path d="M 128 352 Q 134 346 158 344 Q 178 342 188 350 Q 185 362 180 369 Q 162 372 142 370 Q 130 366 128 352 Z" fill="#185FA5" opacity="0.9"/>
    <path d="M 128 352 Q 134 346 158 344 Q 178 342 188 350 Q 185 362 180 369 Q 162 372 142 370 Q 130 366 128 352 Z" fill="url(#suitTexV7-ph5)"/>
  </g>
  <g transform="rotate(-12, 55, 378)">
    <rect x="18" y="366" width="56" height="40" rx="1" fill="#c8955a" stroke="#1a1a1a" stroke-width="0.6"/>
    <rect x="18" y="366" width="56" height="40" rx="1" fill="url(#paperLines-ph5)" opacity="0.4"/>
    <path d="M 18 379 Q 26 371 38 369 L 42 406 L 18 406 Z" fill="#3a1f0a" opacity="0.55"/>
  </g>
  <g transform="rotate(8, 88, 374)">
    <rect x="58" y="363" width="52" height="38" rx="1" fill="#F5F2EA" stroke="#1a1a1a" stroke-width="0.6"/>
    <rect x="58" y="363" width="52" height="38" rx="1" fill="url(#paperLines-ph5)" opacity="0.8"/>
    <path d="M 58 363 L 80 363 L 80 401 L 58 401 Z" fill="#c8955a" opacity="0.55"/>
  </g>
  <g transform="rotate(-5, 190, 374)">
    <rect x="166" y="366" width="48" height="32" rx="1" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.6"/>
    <rect x="166" y="366" width="48" height="32" rx="1" fill="url(#paperLines-ph5)" opacity="0.8"/>
  </g>
  <ellipse cx="120" cy="380" rx="42" ry="4" fill="#1a1a1a" opacity="0.12"/>
  <path d="M 98 295 L 93 378 L 110 378 L 114 295 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.7"/>
  <path d="M 126 295 L 130 378 L 147 378 L 142 295 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.7"/>
  <line x1="99" y1="305" x2="97" y2="299" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="103" y1="313" x2="101" y2="307" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="100" y1="321" x2="97" y2="315" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="104" y1="329" x2="102" y2="323" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="101" y1="337" x2="98" y2="331" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="104" y1="345" x2="102" y2="339" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="100" y1="353" x2="97" y2="347" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="107" y1="308" x2="109" y2="302" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="108" y1="324" x2="110" y2="318" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="107" y1="340" x2="109" y2="334" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="141" y1="305" x2="143" y2="299" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="138" y1="313" x2="140" y2="307" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="141" y1="321" x2="143" y2="315" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="137" y1="329" x2="139" y2="323" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="140" y1="337" x2="142" y2="331" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="137" y1="345" x2="139" y2="339" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="141" y1="353" x2="143" y2="347" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="131" y1="308" x2="129" y2="302" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="132" y1="324" x2="130" y2="318" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="132" y1="340" x2="130" y2="334" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <ellipse cx="104" cy="334" rx="9" ry="6" fill="#E8B898" opacity="0.5"/>
  <ellipse cx="136" cy="334" rx="9" ry="6" fill="#E8B898" opacity="0.5"/>
  <path d="M 92 368 L 112 368 L 112 382 L 92 382 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 128 368 L 148 368 L 148 382 L 128 382 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.6"/>
  <line x1="92" y1="372" x2="112" y2="372" stroke="#1a1a1a" stroke-width="0.5" opacity="0.4"/>
  <line x1="128" y1="372" x2="148" y2="372" stroke="#1a1a1a" stroke-width="0.5" opacity="0.4"/>
  <ellipse cx="102" cy="383" rx="14" ry="4" fill="#0a0a0a"/>
  <ellipse cx="138" cy="383" rx="14" ry="4" fill="#0a0a0a"/>
  <path d="M 84 242 Q 80 268 82 290 Q 84 298 98 298 L 114 295 L 116 242 Z" fill="#E8E4DC" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 156 242 Q 160 268 158 290 Q 156 298 142 298 L 126 295 L 124 242 Z" fill="#E8E4DC" stroke="#1a1a1a" stroke-width="0.8"/>
  <rect x="82" y="236" width="76" height="8" rx="2" fill="#C8C4BA" stroke="#1a1a1a" stroke-width="0.7"/>
  <line x1="120" y1="244" x2="120" y2="295" stroke="#1a1a1a" stroke-width="0.6" opacity="0.4"/>
  <path d="M 114 295 Q 120 300 126 295" fill="none" stroke="#1a1a1a" stroke-width="0.7"/>
  <text x="86" y="268" font-family="serif" font-size="14" fill="#993556" opacity="0.85" font-weight="bold">§</text>
  <text x="95" y="288" font-family="serif" font-size="11" fill="#993556" opacity="0.75">§</text>
  <text x="85" y="295" font-family="serif" font-size="8" fill="#993556" opacity="0.65">§</text>
  <text x="136" y="265" font-family="serif" font-size="14" fill="#993556" opacity="0.85" font-weight="bold">§</text>
  <text x="146" y="285" font-family="serif" font-size="11" fill="#993556" opacity="0.75">§</text>
  <text x="138" y="294" font-family="serif" font-size="8" fill="#993556" opacity="0.65">§</text>
  <text x="112" y="258" font-family="serif" font-size="9" fill="#993556" opacity="0.65">§</text>
  <path d="M 70 148 Q 62 178 56 218 L 50 255 Q 48 264 53 266 L 65 264 Q 69 230 76 208 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.7"/>
  <path d="M 170 148 Q 178 178 184 218 L 190 255 Q 192 264 187 266 L 175 264 Q 171 230 164 208 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.7"/>
  <path d="M 48 255 Q 45 265 48 271 L 62 269 L 68 261 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 190 255 Q 193 265 190 271 L 176 269 L 170 261 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 100 135 Q 96 160 94 200 L 94 244 L 146 244 Q 146 200 144 160 Q 142 135 140 132 Q 130 124 120 123 Q 110 124 100 135 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 94 160 Q 96 180 96 220 L 96 244 L 104 244 Q 102 210 100 175 Q 99 158 100 145 Z" fill="#1a1a1a" opacity="0.06"/>
  <path d="M 146 160 Q 144 180 144 220 L 144 244 L 136 244 Q 138 210 140 175 Q 141 158 140 145 Z" fill="#1a1a1a" opacity="0.06"/>
  <ellipse cx="120" cy="228" rx="1.5" ry="2" fill="#1a1a1a" opacity="0.2"/>
  <line x1="104" y1="172" x2="136" y2="172" stroke="#2a1a0e" stroke-width="0.8" opacity="0.65"/>
  <line x1="104" y1="210" x2="136" y2="210" stroke="#2a1a0e" stroke-width="0.8" opacity="0.65"/>
  <text x="120" y="192" font-family="serif" font-size="20" fill="#2a1a0e" opacity="0.88" font-weight="bold" text-anchor="middle">WK</text>
  <text x="120" y="207" font-family="serif" font-size="11" fill="#2a1a0e" opacity="0.82" font-style="italic" text-anchor="middle">4ever</text>
  <text x="102" y="192" font-family="serif" font-size="8" fill="#2a1a0e" opacity="0.55">★</text>
  <text x="130" y="192" font-family="serif" font-size="8" fill="#2a1a0e" opacity="0.55">★</text>
  <path d="M 72 168 Q 68 188 70 208 Q 72 222 80 230 Q 86 234 88 228 Q 90 210 88 190 Q 86 172 80 166 Q 75 161 72 168 Z" fill="#7a4020" opacity="0.72"/>
  <path d="M 72 168 Q 68 188 70 208 Q 72 222 80 230 Q 86 234 88 228 Q 90 210 88 190 Q 86 172 80 166 Q 75 161 72 168 Z" fill="url(#coffeeStainTex-ph5)" opacity="0.4"/>
  <ellipse cx="92" cy="190" rx="2.5" ry="1.5" fill="#7a4020" opacity="0.6"/>
  <path d="M 70 140 Q 62 165 60 215 L 62 244 L 100 244 L 102 195 Q 104 162 106 138 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 170 140 Q 178 165 180 215 L 178 244 L 140 244 L 138 195 Q 136 162 134 138 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 98 132 L 104 150 L 112 162 L 120 172 L 128 162 L 136 150 L 142 132 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 98 132 L 104 150 L 109 158 L 104 135 Z" fill="#F0EBDB" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 142 132 L 136 150 L 131 158 L 136 135 Z" fill="#F0EBDB" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 116 164 L 126 166 L 124 176 L 117 174 Z" fill="#F5F0E5" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 119 176 Q 118 184 121 192 Q 124 200 122 210 Q 121 216 123 220 Q 125 222 127 220 Q 128 213 129 205 Q 130 196 128 188 Q 127 181 124 176 Z" fill="#993556" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 114 176 Q 112 182 113 189 L 111 196 Q 112 190 112 183 Q 113 179 114 176 Z" fill="#993556" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 88 95 Q 86 115 92 125 Q 100 130 120 130 Q 140 130 148 125 Q 154 115 152 95 Q 150 75 140 65 Q 130 58 120 58 Q 110 58 100 65 Q 90 75 88 95 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="1"/>
  <path d="M 88 95 Q 86 105 90 115 L 92 105 Q 94 90 100 78 Q 110 65 120 62 Q 100 65 92 80 Q 88 88 88 95 Z" fill="#1a1a1a" opacity="0.12"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="url(#hatchHairV7-ph5)" opacity="0.4"/>
  <path d="M 91 76 Q 86 80 84 88 Q 87 82 91 80 Q 89 86 88 92 Q 92 84 93 80 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 153 76 Q 158 80 160 88 Q 157 82 153 80 Q 155 86 156 92 Q 152 84 151 80 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 108 70 Q 110 78 106 86 Q 105 92 102 96 Q 104 88 105 82 Q 103 90 100 94 Q 105 84 106 76 Q 107 72 108 70 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 128 68 Q 132 76 130 84 Q 127 88 124 90 Q 128 84 129 78 Q 130 72 128 68 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 118 54 Q 119 50 121 52 Q 122 56 121 60 Q 119 58 118 54 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.4"/>
  <line x1="100" y1="56" x2="98" y2="51" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="135" y1="55" x2="137" y2="50" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="146" y1="62" x2="150" y2="58" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="93" y1="64" x2="89" y2="60" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <path d="M 94 97 Q 100 93 108 94 Q 114 95 116 99 L 114 100 Q 108 97 102 98 Q 97 99 94 97 Z" fill="#1a1a1a"/>
  <path d="M 124 99 Q 127 95 133 94 Q 141 93 145 96 Q 143 100 138 99 Q 132 98 126 100 Z" fill="#1a1a1a"/>
  <line x1="105" y1="103" x2="105" y2="114" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="135" y1="103" x2="135" y2="114" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
  <ellipse cx="105" cy="108" rx="7" ry="6.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <ellipse cx="135" cy="108" rx="7" ry="6.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="112" y1="108" x2="128" y2="108" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="98" y1="107" x2="92" y2="105" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="142" y1="107" x2="148" y2="105" stroke="#1a1a1a" stroke-width="1.2"/>
  <path d="M 117 116 Q 120 119 123 116 L 122 123 Q 120 125 118 123 Z" fill="#1a1a1a" opacity="0.6"/>
  <ellipse cx="120" cy="127" rx="6" ry="7" fill="#1a1a1a"/>
  <ellipse cx="120" cy="128" rx="4.5" ry="5.5" fill="#5a1818"/>
  <rect x="116" y="121" width="8" height="3" rx="1" fill="#FAF8F3" opacity="0.9"/>
  <path d="M 142 88 Q 144 83 147 88 Q 147 94 142 94 Q 139 92 142 88 Z" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.6"/>
</svg>`,

/* ─────────────────────────────────────────────
   FÁZE 6 — Razítko ZAMÍTNUTO
   ───────────────────────────────────────────── */
`<svg viewBox="0 0 240 410" width="100%" role="img" aria-label="Advokát - ZAMÍTNUTO" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatchHairV7-ph6" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#1a1a1a" stroke-width="0.3" opacity="0.35"/>
    </pattern>
    <pattern id="hatchV7-ph6" patternUnits="userSpaceOnUse" width="3" height="3" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="3" stroke="#1a1a1a" stroke-width="0.4" opacity="0.5"/>
    </pattern>
    <pattern id="suitTexV7-ph6" patternUnits="userSpaceOnUse" width="2.5" height="2.5" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#042C53" stroke-width="0.4" opacity="0.4"/>
    </pattern>
    <pattern id="coffeeStainTex-ph6" patternUnits="userSpaceOnUse" width="2" height="2">
      <circle cx="0.5" cy="0.5" r="0.3" fill="#3a1f0a" opacity="0.4"/>
    </pattern>
    <pattern id="paperLines-ph6" patternUnits="userSpaceOnUse" width="28" height="5">
      <line x1="2" y1="4" x2="26" y2="4" stroke="#aaa" stroke-width="0.4" opacity="0.6"/>
    </pattern>
    <pattern id="leatherTexV7-ph6" patternUnits="userSpaceOnUse" width="3" height="3">
      <circle cx="1" cy="1" r="0.3" fill="#0a0a0a" opacity="0.5"/>
      <circle cx="2" cy="2.2" r="0.2" fill="#3a3a3a" opacity="0.4"/>
    </pattern>
    <filter id="stampFilter-ph6">
      <feTurbulence type="turbulence" baseFrequency="0.065" numOctaves="2" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
  <ellipse cx="62" cy="390" rx="32" ry="7" fill="#4a2818" opacity="0.82"/>
  <ellipse cx="60" cy="390" rx="19" ry="4" fill="#3a1f0a" opacity="0.7"/>
  <g transform="rotate(-75, 48, 378)">
    <path d="M 36 366 L 60 366 L 58 400 L 38 400 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
    <path d="M 54 366 L 60 366 L 58 400 L 54 400 Z" fill="#E8DFCB" opacity="0.6"/>
    <rect x="37" y="378" width="22" height="9" fill="#98c451" stroke="#1a1a1a" stroke-width="0.4"/>
    <circle cx="48" cy="382" r="2.8" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.5"/>
    <circle cx="48" cy="382" r="1.8" fill="#98c451"/>
    <path d="M 34 364 L 62 364 L 60 368 L 36 368 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.6"/>
    <ellipse cx="44" cy="365.5" rx="2.8" ry="1" fill="#1a1a1a"/>
  </g>
  <path d="M 68 350 Q 64 362 72 374 Q 84 382 105 380 Q 98 368 94 356 Q 88 348 80 348 Z" fill="#1a1a1a" opacity="0.9"/>
  <path d="M 68 350 Q 64 362 72 374 Q 84 382 105 380 Q 98 368 94 356 Q 88 348 80 348 Z" fill="url(#hatchV7-ph6)" opacity="0.5"/>
  <path d="M 172 350 Q 176 362 168 374 Q 156 382 135 380 Q 142 368 146 356 Q 152 348 160 348 Z" fill="#1a1a1a" opacity="0.9"/>
  <path d="M 172 350 Q 176 362 168 374 Q 156 382 135 380 Q 142 368 146 356 Q 152 348 160 348 Z" fill="url(#hatchV7-ph6)" opacity="0.5"/>
  <path d="M 80 348 Q 90 356 120 358 Q 150 356 160 348 L 154 368 Q 142 378 120 380 Q 98 378 86 368 Z" fill="#1a1a1a" opacity="0.85"/>
  <path d="M 80 348 Q 90 356 120 358 Q 150 356 160 348 L 154 368 Q 142 378 120 380 Q 98 378 86 368 Z" fill="url(#hatchV7-ph6)" opacity="0.5"/>
  <g transform="rotate(6, 150, 364)">
    <path d="M 128 352 Q 134 346 158 344 Q 178 342 188 350 Q 185 362 180 369 Q 162 372 142 370 Q 130 366 128 352 Z" fill="#185FA5" opacity="0.9"/>
    <path d="M 128 352 Q 134 346 158 344 Q 178 342 188 350 Q 185 362 180 369 Q 162 372 142 370 Q 130 366 128 352 Z" fill="url(#suitTexV7-ph6)"/>
  </g>
  <g transform="rotate(-12, 55, 378)">
    <rect x="18" y="366" width="56" height="40" rx="1" fill="#c8955a" stroke="#1a1a1a" stroke-width="0.6"/>
    <rect x="18" y="366" width="56" height="40" rx="1" fill="url(#paperLines-ph6)" opacity="0.4"/>
    <path d="M 18 379 Q 26 371 38 369 L 42 406 L 18 406 Z" fill="#3a1f0a" opacity="0.55"/>
  </g>
  <g transform="rotate(8, 88, 374)">
    <rect x="58" y="363" width="52" height="38" rx="1" fill="#F5F2EA" stroke="#1a1a1a" stroke-width="0.6"/>
    <rect x="58" y="363" width="52" height="38" rx="1" fill="url(#paperLines-ph6)" opacity="0.8"/>
    <path d="M 58 363 L 80 363 L 80 401 L 58 401 Z" fill="#c8955a" opacity="0.55"/>
  </g>
  <g transform="rotate(-5, 190, 374)">
    <rect x="166" y="366" width="48" height="32" rx="1" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.6"/>
    <rect x="166" y="366" width="48" height="32" rx="1" fill="url(#paperLines-ph6)" opacity="0.8"/>
  </g>
  <ellipse cx="120" cy="380" rx="42" ry="4" fill="#1a1a1a" opacity="0.12"/>
  <path d="M 98 295 L 93 378 L 110 378 L 114 295 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.7"/>
  <path d="M 126 295 L 130 378 L 147 378 L 142 295 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.7"/>
  <line x1="99" y1="305" x2="97" y2="299" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="103" y1="313" x2="101" y2="307" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="100" y1="321" x2="97" y2="315" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="104" y1="329" x2="102" y2="323" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="101" y1="337" x2="98" y2="331" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="104" y1="345" x2="102" y2="339" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="100" y1="353" x2="97" y2="347" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="107" y1="308" x2="109" y2="302" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="108" y1="324" x2="110" y2="318" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="107" y1="340" x2="109" y2="334" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="141" y1="305" x2="143" y2="299" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="138" y1="313" x2="140" y2="307" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="141" y1="321" x2="143" y2="315" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="137" y1="329" x2="139" y2="323" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="140" y1="337" x2="142" y2="331" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="137" y1="345" x2="139" y2="339" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="141" y1="353" x2="143" y2="347" stroke="#1a1a1a" stroke-width="0.6" stroke-linecap="round"/>
  <line x1="131" y1="308" x2="129" y2="302" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="132" y1="324" x2="130" y2="318" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="132" y1="340" x2="130" y2="334" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <ellipse cx="104" cy="334" rx="9" ry="6" fill="#E8B898" opacity="0.5"/>
  <ellipse cx="136" cy="334" rx="9" ry="6" fill="#E8B898" opacity="0.5"/>
  <path d="M 92 368 L 112 368 L 112 382 L 92 382 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 128 368 L 148 368 L 148 382 L 128 382 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.6"/>
  <ellipse cx="102" cy="383" rx="14" ry="4" fill="#0a0a0a"/>
  <ellipse cx="138" cy="383" rx="14" ry="4" fill="#0a0a0a"/>
  <path d="M 84 242 Q 80 268 82 290 Q 84 298 98 298 L 114 295 L 116 242 Z" fill="#E8E4DC" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 156 242 Q 160 268 158 290 Q 156 298 142 298 L 126 295 L 124 242 Z" fill="#E8E4DC" stroke="#1a1a1a" stroke-width="0.8"/>
  <rect x="82" y="236" width="76" height="8" rx="2" fill="#C8C4BA" stroke="#1a1a1a" stroke-width="0.7"/>
  <line x1="120" y1="244" x2="120" y2="295" stroke="#1a1a1a" stroke-width="0.6" opacity="0.4"/>
  <path d="M 114 295 Q 120 300 126 295" fill="none" stroke="#1a1a1a" stroke-width="0.7"/>
  <text x="86" y="268" font-family="serif" font-size="14" fill="#993556" opacity="0.85" font-weight="bold">§</text>
  <text x="95" y="288" font-family="serif" font-size="11" fill="#993556" opacity="0.75">§</text>
  <text x="136" y="265" font-family="serif" font-size="14" fill="#993556" opacity="0.85" font-weight="bold">§</text>
  <text x="146" y="285" font-family="serif" font-size="11" fill="#993556" opacity="0.75">§</text>
  <text x="112" y="258" font-family="serif" font-size="9" fill="#993556" opacity="0.65">§</text>
  <path d="M 70 148 Q 62 178 56 218 L 50 255 Q 48 264 53 266 L 65 264 Q 69 230 76 208 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.7"/>
  <path d="M 170 148 Q 178 178 184 218 L 190 255 Q 192 264 187 266 L 175 264 Q 171 230 164 208 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.7"/>
  <path d="M 48 255 Q 45 265 48 271 L 62 269 L 68 261 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 190 255 Q 193 265 190 271 L 176 269 L 170 261 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.6"/>
  <path d="M 100 135 Q 96 160 94 200 L 94 244 L 146 244 Q 146 200 144 160 Q 142 135 140 132 Q 130 124 120 123 Q 110 124 100 135 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="0.5"/>
  <ellipse cx="120" cy="228" rx="1.5" ry="2" fill="#1a1a1a" opacity="0.2"/>
  <line x1="104" y1="172" x2="136" y2="172" stroke="#2a1a0e" stroke-width="0.8" opacity="0.65"/>
  <line x1="104" y1="210" x2="136" y2="210" stroke="#2a1a0e" stroke-width="0.8" opacity="0.65"/>
  <text x="120" y="192" font-family="serif" font-size="20" fill="#2a1a0e" opacity="0.88" font-weight="bold" text-anchor="middle">WK</text>
  <text x="120" y="207" font-family="serif" font-size="11" fill="#2a1a0e" opacity="0.82" font-style="italic" text-anchor="middle">4ever</text>
  <text x="102" y="192" font-family="serif" font-size="8" fill="#2a1a0e" opacity="0.55">★</text>
  <text x="130" y="192" font-family="serif" font-size="8" fill="#2a1a0e" opacity="0.55">★</text>
  <path d="M 72 168 Q 68 188 70 208 Q 72 222 80 230 Q 86 234 88 228 Q 90 210 88 190 Q 86 172 80 166 Q 75 161 72 168 Z" fill="#7a4020" opacity="0.72"/>
  <path d="M 70 140 Q 62 165 60 215 L 62 244 L 100 244 L 102 195 Q 104 162 106 138 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 170 140 Q 178 165 180 215 L 178 244 L 140 244 L 138 195 Q 136 162 134 138 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 98 132 L 104 150 L 112 162 L 120 172 L 128 162 L 136 150 L 142 132 Z" fill="#FAF8F3" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 116 164 L 126 166 L 124 176 L 117 174 Z" fill="#F5F0E5" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 119 176 Q 118 184 121 192 Q 124 200 122 210 Q 121 216 123 220 Q 125 222 127 220 Q 128 213 129 205 Q 130 196 128 188 Q 127 181 124 176 Z" fill="#993556" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 88 95 Q 86 115 92 125 Q 100 130 120 130 Q 140 130 148 125 Q 154 115 152 95 Q 150 75 140 65 Q 130 58 120 58 Q 110 58 100 65 Q 90 75 88 95 Z" fill="#F0C9A8" stroke="#1a1a1a" stroke-width="1"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M 90 78 Q 95 60 110 55 Q 125 50 140 55 Q 150 60 154 75 Q 156 85 152 92 Q 150 80 145 75 Q 138 72 130 74 Q 120 76 110 78 Q 100 80 95 86 Q 92 90 90 78 Z" fill="url(#hatchHairV7-ph6)" opacity="0.4"/>
  <path d="M 91 76 Q 86 80 84 88 Q 87 82 91 80 Q 89 86 88 92 Q 92 84 93 80 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 153 76 Q 158 80 160 88 Q 157 82 153 80 Q 155 86 156 92 Q 152 84 151 80 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 108 70 Q 110 78 106 86 Q 105 92 102 96 Q 104 88 105 82 Q 103 90 100 94 Q 105 84 106 76 Q 107 72 108 70 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 128 68 Q 132 76 130 84 Q 127 88 124 90 Q 128 84 129 78 Q 130 72 128 68 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M 118 54 Q 119 50 121 52 Q 122 56 121 60 Q 119 58 118 54 Z" fill="#3a2818" stroke="#1a1a1a" stroke-width="0.4"/>
  <line x1="100" y1="56" x2="98" y2="51" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="135" y1="55" x2="137" y2="50" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="146" y1="62" x2="150" y2="58" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <line x1="93" y1="64" x2="89" y2="60" stroke="#1a1a1a" stroke-width="0.5" stroke-linecap="round"/>
  <path d="M 94 97 Q 100 93 108 94 Q 114 95 116 99 L 114 100 Q 108 97 102 98 Q 97 99 94 97 Z" fill="#1a1a1a"/>
  <path d="M 124 99 Q 127 95 133 94 Q 141 93 145 96 Q 143 100 138 99 Q 132 98 126 100 Z" fill="#1a1a1a"/>
  <line x1="105" y1="103" x2="105" y2="114" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="135" y1="103" x2="135" y2="114" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
  <ellipse cx="105" cy="108" rx="7" ry="6.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <ellipse cx="135" cy="108" rx="7" ry="6.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="112" y1="108" x2="128" y2="108" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="98" y1="107" x2="92" y2="105" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="142" y1="107" x2="148" y2="105" stroke="#1a1a1a" stroke-width="1.2"/>
  <path d="M 117 116 Q 120 119 123 116 L 122 123 Q 120 125 118 123 Z" fill="#1a1a1a" opacity="0.6"/>
  <ellipse cx="120" cy="127" rx="6" ry="7" fill="#1a1a1a"/>
  <ellipse cx="120" cy="128" rx="4.5" ry="5.5" fill="#5a1818"/>
  <rect x="116" y="121" width="8" height="3" rx="1" fill="#FAF8F3" opacity="0.9"/>
  <path d="M 142 88 Q 144 83 147 88 Q 147 94 142 94 Q 139 92 142 88 Z" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.6"/>
  <!-- RAZÍTKO ZAMÍTNUTO - nakloněné -12°, vínová #993556 -->
  <g class="stamp-group" transform="rotate(-12, 118, 210)">
    <rect x="28" y="170" width="180" height="78" rx="4"
          fill="none" stroke="#993556" stroke-width="4" opacity="0.82"
          filter="url(#stampFilter-ph6)"/>
    <rect x="34" y="176" width="168" height="66" rx="2"
          fill="none" stroke="#993556" stroke-width="1.5" opacity="0.72"
          filter="url(#stampFilter-ph6)"/>
    <text x="118" y="222"
          font-family="serif"
          font-size="38"
          font-weight="bold"
          fill="#993556"
          opacity="0.80"
          text-anchor="middle"
          letter-spacing="1"
          filter="url(#stampFilter-ph6)">ZAMÍTNUTO</text>
  </g>
</svg>`

]; // konec pole PHASES

// Export pro ES moduly
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PHASES };
}

// Globální zpřístupnění pro vanilla-JS runtime hry (window.* namespace)
if (typeof window !== 'undefined') {
  window.PHASES = PHASES;
}

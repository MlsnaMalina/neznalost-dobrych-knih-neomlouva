/* PenaltyDisplay — eskalující postava advokáta v 6 fázích.
   Render: jeden inline SVG s pojmenovanými skupinami (part-*).
   Stav fáze řídí CSS třída .stage-N na rootu (0–6).
   Genderová varianta přes data-variant ("m" | "f").

   Fáze (= počet chyb):
     0 — celistvá postava
     1 — klobouk nakřivo, otevřená ústa
     2 — kravata rozvázaná, znepokojení
     3 — polití kávou, X-oči
     4 — rozsypaný spis
     5 — talár spadl, spodní prádlo
     6 — finální stav (postava v trenkách, razítko řeší result.js)

   Aby CSS transitions fungovaly, držíme jednu instanci SVG napříč rendery.
   renderPenalty(): vrací wrapper, do kterého SVG vloží/aktualizuje. */

const SVG_MARKUP = `
<svg class="advokat stage-0" data-variant="m"
     viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true">
  <line class="floor" x1="10" y1="262" x2="190" y2="262"
        stroke="currentColor" stroke-width="1" />

  <!-- ===== ROZSYPANÝ SPIS ===== -->
  <g class="part-papers">
    <g transform="translate(38 240) rotate(-18)">
      <rect class="paper" x="0" y="0" width="34" height="22" />
      <line x1="4" y1="6" x2="28" y2="6" />
      <line x1="4" y1="11" x2="24" y2="11" />
      <line x1="4" y1="16" x2="26" y2="16" />
      <circle class="stamp" cx="28" cy="17" r="3" />
    </g>
    <g transform="translate(132 244) rotate(14)">
      <rect class="paper" x="0" y="0" width="32" height="20" />
      <line x1="4" y1="6" x2="26" y2="6" />
      <line x1="4" y1="11" x2="22" y2="11" />
    </g>
    <g transform="translate(78 250) rotate(-5)">
      <rect class="paper" x="0" y="0" width="36" height="22" />
      <line x1="4" y1="6" x2="30" y2="6" />
      <line x1="4" y1="11" x2="28" y2="11" />
      <line x1="4" y1="16" x2="24" y2="16" />
    </g>
    <g transform="translate(20 252) rotate(8)">
      <rect class="paper" x="0" y="0" width="26" height="18" />
      <line x1="3" y1="5" x2="22" y2="5" />
      <line x1="3" y1="10" x2="18" y2="10" />
    </g>
    <g transform="translate(150 238) rotate(-22)">
      <rect class="paper" x="0" y="0" width="28" height="20" />
      <line x1="3" y1="5" x2="22" y2="5" />
      <line x1="3" y1="10" x2="24" y2="10" />
      <circle class="stamp" cx="22" cy="15" r="2.5" />
    </g>
  </g>

  <!-- ===== HROMÁDKA TALÁRU ===== -->
  <g class="part-robe-dropped">
    <path d="M 18 258 Q 30 244 52 250 Q 72 254 70 262 L 18 262 Z" />
  </g>

  <!-- ===== TĚLO ===== -->
  <g class="part-body">
    <g class="underwear">
      <rect x="76" y="178" width="48" height="22" rx="2" />
      <text x="84" y="194" class="ug-mark">§</text>
      <text x="100" y="194" class="ug-mark">§</text>
      <text x="116" y="194" class="ug-mark">§</text>
    </g>

    <g class="legs">
      <rect x="84" y="198" width="12" height="60" rx="3" />
      <rect x="104" y="198" width="12" height="60" rx="3" />
    </g>

    <g class="robe">
      <path d="M 70 110 L 60 262 L 140 262 L 130 110 Q 100 100 70 110 Z" />
      <path class="collar" d="M 88 108 L 100 124 L 112 108 L 108 102 L 100 108 L 92 102 Z" />
      <path class="coffee-stain"
            d="M 90 150 Q 86 156 88 164 Q 92 172 100 170
               Q 110 168 112 158 Q 110 148 100 146 Q 92 146 90 150 Z" />
    </g>

    <g class="shoulders">
      <ellipse class="shoulder-m" cx="100" cy="108" rx="34" ry="6" />
      <ellipse class="shoulder-f" cx="100" cy="108" rx="28" ry="5" />
    </g>

    <g class="arms">
      <rect class="sleeve" x="62" y="112" width="12" height="68" rx="4" />
      <circle class="hand" cx="68" cy="184" r="6" />
      <rect class="sleeve" x="126" y="112" width="12" height="68" rx="4" />
      <circle class="hand right" cx="132" cy="184" r="6" />
    </g>

    <g class="part-coffee-cup" transform="translate(126 178)">
      <rect class="cup" x="0" y="0" width="14" height="14" rx="2" />
      <path class="cup-handle" d="M 14 4 Q 20 7 14 10" />
      <line class="cup-steam" x1="4" y1="-4" x2="3" y2="-10" />
      <line class="cup-steam" x1="9" y1="-4" x2="10" y2="-10" />
    </g>

    <g class="part-tie">
      <path class="tie-knot" d="M 96 116 L 104 116 L 106 124 L 94 124 Z" />
      <path class="tie-body" d="M 94 124 L 106 124 L 108 156 L 100 168 L 92 156 Z" />
    </g>

    <rect class="neck" x="93" y="92" width="14" height="14" />
  </g>

  <!-- ===== HLAVA ===== -->
  <g class="part-head">
    <g class="hair hair-f">
      <path d="M 70 86 Q 68 116 78 134 L 86 134 Q 80 116 82 90 Z" />
      <path d="M 130 86 Q 132 116 122 134 L 114 134 Q 120 116 118 90 Z" />
    </g>
    <g class="stubble hair-m">
      <ellipse cx="100" cy="84" rx="14" ry="4" />
    </g>

    <ellipse class="face" cx="100" cy="74" rx="20" ry="22" />

    <g class="eyes-normal">
      <circle cx="92" cy="72" r="1.6" />
      <circle cx="108" cy="72" r="1.6" />
    </g>
    <g class="eyes-x">
      <line x1="89" y1="69" x2="95" y2="75" />
      <line x1="95" y1="69" x2="89" y2="75" />
      <line x1="105" y1="69" x2="111" y2="75" />
      <line x1="111" y1="69" x2="105" y2="75" />
    </g>

    <g class="brows">
      <path class="brow-l" d="M 87 65 L 96 64" />
      <path class="brow-r" d="M 104 64 L 113 65" />
    </g>

    <g class="mouth">
      <line class="m-neutral" x1="94" y1="84" x2="106" y2="84" />
      <ellipse class="m-o" cx="100" cy="85" rx="3" ry="3.5" />
      <line class="m-worried" x1="92" y1="86" x2="108" y2="86" />
      <path class="m-despair" d="M 92 88 Q 100 82 108 88" />
    </g>
  </g>

  <!-- ===== KLOBOUK ===== -->
  <g class="part-hat">
    <rect class="hat-band" x="78" y="50" width="44" height="6" />
    <rect class="hat-top" x="74" y="36" width="52" height="16" rx="1" />
    <rect class="hat-ribbon" x="78" y="52" width="44" height="2" />
  </g>
</svg>`;

/* Cache jediné instance SVG napříč rendery, aby CSS transitions fungovaly.
   Klíčem je gender — když se změní (nová hra s jiným pohlavím), SVG
   přestavíme od nuly. */
let _cachedWrap = null;
let _cachedGender = null;
let _prevStage = 0;

window.renderPenalty = function (mistakes, maxMistakes, gender) {
  const stage = Math.max(0, Math.min(mistakes, 6));
  const variant = gender === "f" ? "f" : "m";

  // Inicializace SVG (poprvé / po resetu / při změně genderu)
  if (!_cachedWrap || _cachedGender !== variant) {
    _cachedWrap = document.createElement("div");
    _cachedWrap.className = "penalty";
    _cachedWrap.setAttribute("role", "img");
    _cachedWrap.innerHTML = SVG_MARKUP;
    _cachedGender = variant;
    const svg = _cachedWrap.querySelector(".advokat");
    svg.setAttribute("data-variant", variant);
    svg.classList.remove("stage-0");
    svg.classList.add(`stage-${stage}`);
    _prevStage = stage;
  } else if (stage !== _prevStage) {
    // Class swap odložíme do dalšího animation frame — to už bude SVG
    // znovu připojené k DOM (gameScreen.js destruuje a vytváří root při
    // každém renderu) a CSS transitions skutečně proběhnou.
    const oldStage = _prevStage;
    const newStage = stage;
    const svg = _cachedWrap.querySelector(".advokat");
    requestAnimationFrame(() => {
      if (!svg.isConnected) return;
      svg.classList.remove(`stage-${oldStage}`);
      svg.classList.add(`stage-${newStage}`);
      // Shake jen při zhoršení (chybný tah), ne při zachování fáze.
      if (newStage > oldStage) {
        svg.classList.remove("shake");
        void svg.offsetWidth;       // force reflow → animace se spustí znovu
        svg.classList.add("shake");
      }
    });
    _prevStage = stage;
  }

  _cachedWrap.setAttribute("aria-label",
    `Postava advokáta — fáze ${stage} z ${maxMistakes}.`);
  return _cachedWrap;
};

/* Voláno z game.js při startu nové hry, aby se SVG postavilo znovu od fáze 0. */
window.resetPenaltyCache = function () {
  _cachedWrap = null;
  _cachedGender = null;
  _prevStage = 0;
};

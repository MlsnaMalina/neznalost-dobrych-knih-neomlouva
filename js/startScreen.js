/* StartScreen — úvodní obrazovka.
   Dvousloupcový layout: vlevo SVG ilustrace (šibenice s knihou na kopečku),
   vpravo titulek, perex, instrukce a CTA tlačítko.
   Tlačítko volá onStart — předáno z render loop v app.js. */

const START_ILLUSTRATION_SVG = `
<svg viewBox="0 0 340 320" width="100%" role="img" aria-label="Šibenice s visící knihou na kopečku" xmlns="http://www.w3.org/2000/svg">
  <!-- Zelený kopeček -->
  <path d="M 30 300 Q 90 228 140 218 Q 190 210 250 300 Z" fill="#98c451"/>
  <path d="M 55 300 Q 105 238 140 228 Q 175 238 220 300 Z" fill="#7aaa38"/>

  <!-- Zemní linie -->
  <line x1="10" y1="300" x2="320" y2="300" stroke="#1a1a1a" stroke-width="1.2" stroke-linecap="round"/>

  <!-- Šibenice — svislý sloup -->
  <line x1="140" y1="228" x2="140" y2="88" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
  <!-- Vodorovné rameno -->
  <line x1="140" y1="88" x2="210" y2="88" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
  <!-- Šikmá vzpěra -->
  <line x1="140" y1="120" x2="175" y2="88" stroke="#1a1a1a" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Lano -->
  <line x1="210" y1="88" x2="210" y2="130" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
  <!-- Smyčka lana -->
  <path d="M 204 130 Q 204 138 210 140 Q 216 138 216 130" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>

  <!-- Kniha nakloněná -->
  <g transform="rotate(8, 210, 165)">
    <!-- Hloubka stránek -->
    <path d="M 228 140 L 234 143 L 234 188 L 228 185 Z" fill="#E8DFCB"/>
    <path d="M 196 185 L 228 185 L 234 188 L 202 188 Z" fill="#E8DFCB"/>
    <!-- Přední deska -->
    <rect x="196" y="140" width="32" height="45" rx="1" fill="#b11e54"/>
    <!-- Hřbet -->
    <rect x="196" y="140" width="7" height="45" rx="1" fill="#7a1238"/>
    <!-- Dekorativní linky na hřbetu -->
    <line x1="196" y1="145" x2="203" y2="145" stroke="#FAF8F3" stroke-width="0.8" opacity="0.5"/>
    <line x1="196" y1="180" x2="203" y2="180" stroke="#FAF8F3" stroke-width="0.8" opacity="0.5"/>
    <!-- Titul — řádky textu na desce -->
    <line x1="207" y1="152" x2="224" y2="152" stroke="#FAF8F3" stroke-width="1.4" stroke-linecap="round" opacity="0.9"/>
    <line x1="207" y1="157" x2="222" y2="157" stroke="#FAF8F3" stroke-width="1.4" stroke-linecap="round" opacity="0.9"/>
    <line x1="207" y1="162" x2="220" y2="162" stroke="#FAF8F3" stroke-width="1.1" stroke-linecap="round" opacity="0.7"/>
    <!-- Oddělovač -->
    <line x1="206" y1="167" x2="224" y2="167" stroke="#FAF8F3" stroke-width="0.5" opacity="0.35"/>
    <!-- Autor -->
    <line x1="207" y1="174" x2="220" y2="174" stroke="#FAF8F3" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
    <line x1="207" y1="179" x2="217" y2="179" stroke="#FAF8F3" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
    <!-- Stránky — vějíř linek na pravém boku -->
    <line x1="228" y1="142" x2="234" y2="142" stroke="#FAF8F3" stroke-width="0.5" opacity="0.7"/>
    <line x1="228" y1="146" x2="234" y2="146" stroke="#FAF8F3" stroke-width="0.5" opacity="0.7"/>
    <line x1="228" y1="150" x2="234" y2="150" stroke="#FAF8F3" stroke-width="0.5" opacity="0.7"/>
    <line x1="228" y1="154" x2="234" y2="154" stroke="#FAF8F3" stroke-width="0.5" opacity="0.7"/>
    <line x1="228" y1="158" x2="234" y2="158" stroke="#FAF8F3" stroke-width="0.5" opacity="0.7"/>
    <line x1="228" y1="162" x2="234" y2="162" stroke="#FAF8F3" stroke-width="0.5" opacity="0.7"/>
    <line x1="228" y1="166" x2="234" y2="166" stroke="#FAF8F3" stroke-width="0.5" opacity="0.7"/>
    <line x1="228" y1="170" x2="234" y2="170" stroke="#FAF8F3" stroke-width="0.5" opacity="0.7"/>
    <line x1="228" y1="174" x2="234" y2="174" stroke="#FAF8F3" stroke-width="0.5" opacity="0.7"/>
    <line x1="228" y1="178" x2="234" y2="178" stroke="#FAF8F3" stroke-width="0.5" opacity="0.7"/>
    <line x1="228" y1="182" x2="234" y2="182" stroke="#FAF8F3" stroke-width="0.5" opacity="0.7"/>
    <!-- Obrys desky -->
    <rect x="196" y="140" width="32" height="45" rx="1" fill="none" stroke="#7a1238" stroke-width="0.7"/>
  </g>

  <!-- Vrány -->
  <g transform="translate(52, 110)">
    <path d="M 0 0 Q -9 -7 -18 0" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
    <path d="M 0 0 Q 9 -7 18 0" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
  </g>
  <g transform="translate(92, 88)">
    <path d="M 0 0 Q -6 -4 -12 0" fill="none" stroke="#1a1a1a" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M 0 0 Q 6 -4 12 0" fill="none" stroke="#1a1a1a" stroke-width="1.4" stroke-linecap="round"/>
  </g>
  <g transform="translate(272, 100)">
    <path d="M 0 0 Q -8 -6 -16 0" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 0 0 Q 8 -6 16 0" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
  </g>
  <g transform="translate(300, 78)">
    <path d="M 0 0 Q -5 -4 -10 0" fill="none" stroke="#1a1a1a" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M 0 0 Q 5 -4 10 0" fill="none" stroke="#1a1a1a" stroke-width="1.2" stroke-linecap="round"/>
  </g>
  <g transform="translate(30, 72)">
    <path d="M 0 0 Q -5 -4 -10 0" fill="none" stroke="#1a1a1a" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M 0 0 Q 5 -4 10 0" fill="none" stroke="#1a1a1a" stroke-width="1.2" stroke-linecap="round"/>
  </g>
</svg>`;

window.renderStartScreen = function (onStart) {
  const root = document.createElement("section");
  root.className = "screen start";

  const layout = document.createElement("div");
  layout.className = "start-layout";

  // Levý sloupec — ilustrace
  const illu = document.createElement("div");
  illu.className = "start-illustration";
  illu.innerHTML = START_ILLUSTRATION_SVG;
  layout.appendChild(illu);

  // Pravý sloupec — text + CTA
  const content = document.createElement("div");
  content.className = "start-content";

  const h1 = document.createElement("h1");
  h1.className = "start-title";
  h1.textContent = "Neznalost dobrých knih neomlouvá";
  content.appendChild(h1);

  const perex = document.createElement("p");
  perex.className = "start-perex";
  perex.textContent = "V právu platí, že neznalost zákona neomlouvá. Tady platí ještě něco horšího: neznalost dobrých knih neomlouvá.";
  content.appendChild(perex);

  const sub = document.createElement("p");
  sub.className = "start-sub";
  sub.textContent = "Uhodněte název odborné knihy z oblasti AI práva dřív, než vyčerpáte všechny pokusy.";
  content.appendChild(sub);

  // Tlačítko — text v DOM zůstává Sentence Case (mikrokopie), uppercase řeší CSS.
  const btn = document.createElement("button");
  btn.className = "start-btn";
  btn.id = "startBtn";
  btn.type = "button";
  btn.textContent = "Zahájit řízení";
  btn.addEventListener("click", onStart);
  content.appendChild(btn);

  layout.appendChild(content);
  root.appendChild(layout);
  return root;
};

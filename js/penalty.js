/* PenaltyDisplay — eskalující postava advokáta v 7 fázích.
   Render: kontejner se sedmi <div class="character-phase" id="phase-0…6">,
   každý naplněný odpovídajícím SVG z window.PHASES (viz character-phases.js).
   Při změně počtu chyb se zobrazí jen příslušná fáze (display:block), ostatní
   zůstávají skryté. Při 6 chybách se navíc spustí animace razítka ZAMÍTNUTO.

   Drží jednu instanci kontejneru napříč rendery (kvůli plynulosti animací). */

let _cachedWrap = null;
let _prevMistakes = -1;

function _buildContainer() {
  const wrap = document.createElement("div");
  wrap.className = "penalty";
  wrap.setAttribute("role", "img");

  const container = document.createElement("div");
  container.id = "character-container";

  const phases = (typeof window !== "undefined" && window.PHASES) ? window.PHASES : [];
  for (let i = 0; i < phases.length; i++) {
    const ph = document.createElement("div");
    ph.id = `phase-${i}`;
    ph.className = "character-phase";
    if (i !== 0) ph.style.display = "none";
    ph.innerHTML = phases[i];
    container.appendChild(ph);
  }

  wrap.appendChild(container);
  return wrap;
}

/* Přepne viditelnost na zadanou fázi, spustí .phase-enter (shake + fade).
   Při fázi 6 spustí .stamp-animate na .stamp-group uvnitř #phase-6. */
function _showPhase(container, mistakeCount) {
  const phases = container.querySelectorAll(".character-phase");
  phases.forEach((el) => { el.style.display = "none"; });

  const current = container.querySelector(`#phase-${mistakeCount}`);
  if (!current) return;

  current.style.display = "block";
  current.classList.remove("phase-enter");
  // force reflow, aby se animace spustila znovu
  void current.offsetWidth;
  current.classList.add("phase-enter");
  setTimeout(() => current.classList.remove("phase-enter"), 600);

  if (mistakeCount === 6) {
    const stamp = current.querySelector(".stamp-group");
    if (stamp) {
      stamp.classList.remove("stamp-animate");
      void stamp.getBoundingClientRect();
      stamp.classList.add("stamp-animate");
    }
  }
}

/* renderPenalty(mistakes, maxMistakes, _gender)
   _gender se ignoruje — nová sada PHASES nemá M/F variantu. Parametr
   zachován kvůli kompatibilitě s voláními v gameScreen.js a result.js. */
window.renderPenalty = function (mistakes, maxMistakes, _gender) {
  const stage = Math.max(0, Math.min(mistakes, 6));

  if (!_cachedWrap) {
    _cachedWrap = _buildContainer();
    _prevMistakes = -1;
  }

  const container = _cachedWrap.querySelector("#character-container");

  if (stage !== _prevMistakes) {
    // Class swap odložíme do dalšího animation frame — to už bude
    // kontejner znovu připojený k DOM (gameScreen.js destruuje a vytváří
    // root při každém renderu) a CSS animace skutečně proběhnou.
    const target = stage;
    const prev = _prevMistakes;
    requestAnimationFrame(() => {
      if (!container.isConnected) return;
      _showPhase(container, target);
      // Shake přes .phase-enter běží jen při zhoršení; při prvním renderu
      // (prev = -1) nebo při návratu do nižší fáze ho potlačíme.
      if (prev !== -1 && target <= prev) {
        const cur = container.querySelector(`#phase-${target}`);
        if (cur) cur.classList.remove("phase-enter");
      }
    });
    _prevMistakes = stage;
  }

  _cachedWrap.setAttribute("aria-label",
    `Postava advokáta — fáze ${stage} z ${maxMistakes}.`);
  return _cachedWrap;
};

/* Voláno z game.js při startu nové hry, aby se kontejner postavil znovu od fáze 0. */
window.resetPenaltyCache = function () {
  _cachedWrap = null;
  _prevMistakes = -1;
};

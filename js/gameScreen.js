/* GameScreen — herní obrazovka.
   - GOOD_FLASH se zobrazuje při správném písmenu (krátká soudní hláška).
   - Při špatném písmenu místo flash hlášky zobrazíme MaximCard
     (latinská maxima dne — viz maxims.js a Úkol 4). */

window.GOOD_FLASH = [
  "Důkaz proveden.",
  "Písmeno přijato do spisu.",
  "Knihovní stopa potvrzena.",
  "Soud bere na vědomí."
];
function pickMsg(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

/* Karta s latinskou maximou — varianta podle kontextu:
   - "card": malá karta v bočním sloupci pod soudcem
   - "hero": fullscreen overlay přes celou stránku (úvodní fáze) */
function renderMaximBlock(index, maxim, variant) {
  const root = document.createElement(variant === "hero" ? "div" : "aside");
  root.className = variant === "hero" ? "maxim-hero" : "maxim-card maxim-enter";
  root.setAttribute(variant === "hero" ? "aria-hidden" : "aria-live", variant === "hero" ? "true" : "polite");

  // hero má vlastní vnitřní obal kvůli animaci scale+translate
  const content = variant === "hero"
    ? (() => { const d = document.createElement("div"); d.className = "maxim-hero-content"; root.appendChild(d); return d; })()
    : root;

  const label = document.createElement("div");
  label.className = "maxim-label";
  label.textContent = `— Námitka č. ${index} —`;
  content.appendChild(label);

  const la = document.createElement("p");
  la.className = "maxim-la";
  la.textContent = maxim.la;
  content.appendChild(la);

  const cs = document.createElement("p");
  cs.className = "maxim-cs";
  cs.textContent = maxim.cs;
  content.appendChild(cs);

  return root;
}

/* Spustí animaci: hero (full-screen) se zmenší a doletí do pozice malé karty.
   Použijeme Web Animations API, abychom mohli přesně cílit DOM pozici card. */
function animateMaximHero(hero, card) {
  if (!hero || !card) return;
  const content = hero.querySelector(".maxim-hero-content");
  if (!content) return;

  // Měření až po layoutu (rAF zaručí, že už proběhl) — getBoundingClientRect
  // vrátí přesné pozice obou prvků v aktuálním viewportu.
  const heroRect = content.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const dx = (cardRect.left + cardRect.width / 2) - (heroRect.left + heroRect.width / 2);
  const dy = (cardRect.top + cardRect.height / 2) - (heroRect.top + heroRect.height / 2);
  const targetScale = Math.max(0.18, Math.min(0.45, cardRect.width / heroRect.width));

  // Celkem 4400 ms: ~300 ms entry, ~3500 ms hold velkého textu, ~600 ms shrink.
  const TOTAL = 4400;
  const ENTRY_END = 0.07;   // ≈ 308 ms
  const HOLD_END  = 0.86;   // ≈ 3784 ms  → hold trvá ~3476 ms

  // Backdrop (vnější hero div): fade in → hold → fade out
  hero.animate([
    { opacity: 0, offset: 0 },
    { opacity: 1, offset: ENTRY_END },
    { opacity: 1, offset: HOLD_END },
    { opacity: 0, offset: 1 }
  ], { duration: TOTAL, easing: "ease-out", fill: "forwards" });

  // Obsah: scale 0.94→1 (entry) → hold → scale-down + translate do pozice karty
  content.animate([
    { transform: "translate(0,0) scale(0.94)", opacity: 0, offset: 0 },
    { transform: "translate(0,0) scale(1)",    opacity: 1, offset: ENTRY_END },
    { transform: "translate(0,0) scale(1)",    opacity: 1, offset: HOLD_END },
    { transform: `translate(${dx}px, ${dy}px) scale(${targetScale})`, opacity: 0, offset: 1 }
  ], { duration: TOTAL, easing: "cubic-bezier(.4,0,.2,1)", fill: "forwards" });
}

window.renderGameScreen = function (state, actions) {
  const {
    tokens, guessed, mistakes, maxMistakes,
    titleLetterSet, lastResult, activeMaxim
  } = state;
  const remaining = maxMistakes - mistakes;
  // Sjednocené rozlišení „byla chyba" pro render maximy a pauzu baru.
  const isMissOrTimeout = (lastResult === "miss" || lastResult === "timeout");

  const root = document.createElement("section");
  root.className = "screen game";

  // Header
  const header = document.createElement("div");
  header.className = "game-header";

  const attempts = document.createElement("div");
  attempts.className = "attempts";
  attempts.innerHTML = `Opravné prostředky: <strong>${remaining}</strong> / ${maxMistakes}`;
  header.appendChild(attempts);

  const giveUpWrap = document.createElement("div");
  giveUpWrap.className = "game-actions";
  const newGame = document.createElement("button");
  newGame.className = "ghost-btn";
  newGame.type = "button";
  newGame.textContent = "Nové řízení";
  newGame.addEventListener("click", actions.onNewGame);
  giveUpWrap.appendChild(newGame);

  const giveUp = document.createElement("button");
  giveUp.className = "ghost-btn";
  giveUp.type = "button";
  giveUp.textContent = "Stáhnout žalobu";
  giveUp.addEventListener("click", actions.onGiveUp);
  giveUpWrap.appendChild(giveUp);

  header.appendChild(giveUpWrap);
  root.appendChild(header);

  // Dvousloupcový layout: vlevo titul + klávesnice, vpravo postavička + maxim.
  const stage = document.createElement("div");
  stage.className = "stage";

  // ===== STŘED — slovo k uhodnutí + klávesnice =====
  const center = document.createElement("div");
  center.className = "stage-center";

  center.appendChild(window.renderTitleGuess(tokens, guessed));

  // Wrapper, který drží časový bar nad klávesnicí v přesně stejné šířce
  // jako řada kláves (díky width: fit-content na .kb-stack).
  // KROK 1: statický plný bar bez logiky a animace.
  const kbStack = document.createElement("div");
  kbStack.className = "kb-stack";

  const timerBar = document.createElement("div");
  timerBar.className = "timer-bar";
  timerBar.setAttribute("role", "progressbar");
  timerBar.setAttribute("aria-label", "Časový limit na výběr písmena");
  const timerFill = document.createElement("div");
  timerFill.className = "timer-bar-fill";
  timerBar.appendChild(timerFill);
  kbStack.appendChild(timerBar);

  // KROK 3 + 4 — Napojení na herní logiku + timeout penalizace.
  //
  // Reset po akci: re-render destruuje DOM → nový .timer-bar-fill mountne
  // se s čerstvou animací (8 s shrink).
  //
  // Pauza během hero (4400 ms): při čerstvé chybě (miss / timeout) drží bar
  // plný a pauzovaný, po skončení hero se rozjede 8s odpočet.
  //
  // Timeout fire: setTimeout zavolá actions.onTimeout, který v app.js spustí
  // game.timeoutMiss() + render(). Hard stop při změně status (won/lost/start)
  // zařídí app.js cleanupem window.__timeoutTimerId na začátku každého renderu.
  const PAUSE_MS  = 4400;  // shoda s délkou hero animace v animateMaximHero
  const LIMIT_MS  = 8000;  // 8 s na výběr písmena dle zadání
  const pauseFirst = isMissOrTimeout;
  if (pauseFirst) {
    timerFill.style.animationPlayState = "paused";
    setTimeout(() => {
      // isConnected ošetří race: hráč mezitím klikl klávesu → nový render →
      // starý element už není v DOM, callback je tichý no-op.
      if (timerFill.isConnected) {
        timerFill.style.animationPlayState = "running";
      }
    }, PAUSE_MS);
  }
  // Cleanup případného předchozího naplánovaného fire (defenzivně i tady,
  // i když to dělá app.js — kdyby někdy přišel render bez něj).
  if (window.__timeoutTimerId) {
    clearTimeout(window.__timeoutTimerId);
    window.__timeoutTimerId = null;
  }
  const fireDelay = (pauseFirst ? PAUSE_MS : 0) + LIMIT_MS;
  window.__timeoutTimerId = setTimeout(function fireTimeout() {
    window.__timeoutTimerId = null;
    // Dvojnásobné pojištění proti race conditions: pokud bar element už není
    // v DOM (re-render proběhl), tichý no-op. Akce hráče tak vždy vyhrává.
    if (!timerFill.isConnected) return;
    if (typeof actions.onTimeout === "function") actions.onTimeout();
  }, fireDelay);

  kbStack.appendChild(window.renderKeyboard(guessed, titleLetterSet, actions.onPick));
  center.appendChild(kbStack);

  const used = document.createElement("div");
  used.className = "used-letters";
  if (guessed.size > 0) {
    const list = Array.from(guessed).join(" · ");
    used.innerHTML = `<span class="label">Vyloučené důkazy:</span> ${list}`;
  }
  center.appendChild(used);

  // ===== VPRAVO — postava + flash / maxim =====
  const side = document.createElement("aside");
  side.className = "stage-side";

  side.appendChild(window.renderPenalty(mistakes, maxMistakes, state.characterGender));

  // Pod postavou: buď karta maximy (po chybě nebo timeoutu), nebo flash hláška.
  // Zdroj maximy = state.activeMaxim (game.js ji nastavuje podle zdroje chyby).
  let smallCard = null;
  if (isMissOrTimeout && mistakes > 0 && activeMaxim) {
    smallCard = renderMaximBlock(mistakes, activeMaxim, "card");
    side.appendChild(smallCard);
  } else {
    const flash = document.createElement("div");
    flash.className = "flash" + (lastResult === "hit" ? " good" : "");
    if (lastResult === "hit") flash.textContent = pickMsg(window.GOOD_FLASH);
    else flash.textContent = "Předložte důkaz.";
    side.appendChild(flash);
  }

  stage.appendChild(center);
  stage.appendChild(side);
  root.appendChild(stage);

  // Hero overlay přes celou stránku — při čerstvé chybě i timeoutu.
  // Animuje se ze středu obrazovky do pozice malé karty pod soudcem.
  if (isMissOrTimeout && mistakes > 0 && activeMaxim) {
    const hero = renderMaximBlock(mistakes, activeMaxim, "hero");
    root.appendChild(hero);
    // Po layoutu změřit pozici karty a spustit animaci
    requestAnimationFrame(() => animateMaximHero(hero, smallCard));
  }

  return root;
};

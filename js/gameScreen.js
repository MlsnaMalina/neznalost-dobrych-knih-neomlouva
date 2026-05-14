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

/* Karta s latinskou maximou (Námitka č. X / Latina / Český překlad).
   Renderuje se s krátkým fade-in přes CSS animaci .maxim-enter. */
function renderMaximCard(index, maxim) {
  const card = document.createElement("aside");
  card.className = "maxim-card maxim-enter";
  card.setAttribute("aria-live", "polite");

  const label = document.createElement("div");
  label.className = "maxim-label";
  label.textContent = `— Námitka č. ${index} —`;
  card.appendChild(label);

  const la = document.createElement("p");
  la.className = "maxim-la";
  la.textContent = maxim.la;
  card.appendChild(la);

  const cs = document.createElement("p");
  cs.className = "maxim-cs";
  cs.textContent = maxim.cs;
  card.appendChild(cs);

  return card;
}

window.renderGameScreen = function (state, actions) {
  const {
    tokens, guessed, mistakes, maxMistakes,
    titleLetterSet, lastResult, maxims
  } = state;
  const remaining = maxMistakes - mistakes;

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

  // Postava advokáta
  root.appendChild(window.renderPenalty(mistakes, maxMistakes, state.characterGender));

  // Maxim card — zobrazí se po chybě, jinak skrytá / placeholder
  if (lastResult === "miss" && mistakes > 0 && maxims && maxims[mistakes - 1]) {
    root.appendChild(renderMaximCard(mistakes, maxims[mistakes - 1]));
  }

  // Slovo k uhodnutí
  root.appendChild(window.renderTitleGuess(tokens, guessed));

  // Krátká flash hláška — jen při správném tahu / na začátku
  const flash = document.createElement("div");
  flash.className = "flash" + (lastResult === "hit" ? " good" : "");
  if (lastResult === "hit") flash.textContent = pickMsg(window.GOOD_FLASH);
  else if (lastResult === "miss") flash.textContent = "";  // maxim card to zastupuje
  else flash.textContent = "Předložte důkaz.";
  root.appendChild(flash);

  // Klávesnice
  root.appendChild(window.renderKeyboard(guessed, titleLetterSet, actions.onPick));

  // Použitá / vyloučená písmena
  const used = document.createElement("div");
  used.className = "used-letters";
  if (guessed.size > 0) {
    const list = Array.from(guessed).join(" · ");
    used.innerHTML = `<span class="label">Vyloučené důkazy:</span> ${list}`;
  }
  root.appendChild(used);

  return root;
};

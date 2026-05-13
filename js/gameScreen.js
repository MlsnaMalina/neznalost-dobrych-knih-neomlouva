/* GameScreen — herní obrazovka. */

window.GOOD_FLASH = [
  "Důkaz proveden.",
  "Písmeno přijato do spisu.",
  "Knihovní stopa potvrzena.",
  "Soud bere na vědomí."
];
window.BAD_FLASH = [
  "Námitka se zamítá.",
  "Písmeno se v knize nevyskytuje.",
  "Knihovna nesouhlasí."
];
function pickMsg(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

window.renderGameScreen = function (state, actions) {
  const { tokens, guessed, mistakes, maxMistakes, titleLetterSet, lastResult } = state;
  const remaining = maxMistakes - mistakes;

  const root = document.createElement("section");
  root.className = "screen game";

  // Header (zbývající pokusy + vzdát titul)
  const header = document.createElement("div");
  header.className = "game-header";

  const attempts = document.createElement("div");
  attempts.className = "attempts";
  attempts.innerHTML = `Zbývající pokusy: <strong>${remaining}</strong> / ${maxMistakes}`;
  header.appendChild(attempts);

  const giveUpWrap = document.createElement("div");
  giveUpWrap.className = "game-actions";
  const newGame = document.createElement("button");
  newGame.className = "ghost-btn";
  newGame.type = "button";
  newGame.textContent = "Nová hra";
  newGame.addEventListener("click", actions.onNewGame);
  giveUpWrap.appendChild(newGame);

  const giveUp = document.createElement("button");
  giveUp.className = "ghost-btn";
  giveUp.type = "button";
  giveUp.textContent = "Vzdát titul";
  giveUp.addEventListener("click", actions.onGiveUp);
  giveUpWrap.appendChild(giveUp);

  header.appendChild(giveUpWrap);
  root.appendChild(header);

  // Penalty placeholder
  root.appendChild(window.renderPenalty(mistakes, maxMistakes));

  // Title guess
  root.appendChild(window.renderTitleGuess(tokens, guessed));

  // Flash (mikrotext po posledním tahu)
  const flash = document.createElement("div");
  flash.className = "flash" + (lastResult === "hit" ? " good" : lastResult === "miss" ? " bad" : "");
  if (lastResult === "hit") flash.textContent = pickMsg(window.GOOD_FLASH);
  else if (lastResult === "miss") flash.textContent = pickMsg(window.BAD_FLASH);
  else flash.textContent = "Vyberte písmeno.";
  root.appendChild(flash);

  // Keyboard
  root.appendChild(window.renderKeyboard(guessed, titleLetterSet, actions.onPick));

  // Used letters list
  const used = document.createElement("div");
  used.className = "used-letters";
  if (guessed.size > 0) {
    const list = Array.from(guessed).join(" · ");
    used.innerHTML = `<span class="label">Použito:</span>${list}`;
  }
  root.appendChild(used);

  return root;
};

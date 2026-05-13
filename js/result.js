/* GameResult — závěrečná obrazovka (výhra / prohra). */

window.WON_QUOTES = [
  "Výborná příprava, kolego/kolegyně.",
  "Obvinění z neznalosti se zamítá.",
  "Znalost kvalitní literatury prokázána.",
  "Titul uhodnut."
];

window.LOST_QUOTES = [
  "Neznalost dobrých knih neomlouvá.",
  "Doporučené opatření: doplnit právnickou knihovnu.",
  "Titul zůstal neuhodnut."
];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

window.renderResult = function ({ status, book, mistakes, maxMistakes, onAgain }) {
  const root = document.createElement("section");
  root.className = "screen result";

  const verdict = document.createElement("h2");
  verdict.className = "verdict " + (status === "won" ? "won" : "lost");
  verdict.textContent = status === "won"
    ? "Verdikt: znalost prokázána."
    : "Verdikt: neznalost dobrých knih neomlouvá.";
  root.appendChild(verdict);

  const quote = document.createElement("p");
  quote.className = "quote";
  quote.textContent = status === "won" ? pick(window.WON_QUOTES) : pick(window.LOST_QUOTES);
  root.appendChild(quote);

  const reveal = document.createElement("div");
  reveal.className = "reveal";
  reveal.textContent = book.title;
  root.appendChild(reveal);

  if (book.author || book.year) {
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = [book.author, book.year].filter(Boolean).join(" · ");
    root.appendChild(meta);
  }

  const meta2 = document.createElement("div");
  meta2.className = "meta";
  meta2.textContent = `Chybných pokusů: ${mistakes} / ${maxMistakes}`;
  root.appendChild(meta2);

  const actions = document.createElement("div");
  actions.className = "game-actions";
  const again = document.createElement("button");
  again.className = "btn";
  again.type = "button";
  again.textContent = status === "won" ? "Hrát znovu" : "Zkusit další titul";
  again.addEventListener("click", onAgain);
  actions.appendChild(again);
  root.appendChild(actions);

  return root;
};

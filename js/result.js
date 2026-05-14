/* GameResult — závěrečná obrazovka (výhra / prohra).
   - Při prohře: postava advokáta ve fázi 6 + razítko ZAMÍTNUTO překryté přes ni.
   - Latinská maxima (Úkol 4) doplní `quote` po prohře a `flash` v průběhu hry. */

window.renderResult = function ({ status, book, mistakes, maxMistakes, onAgain, characterGender, finalMaxim }) {
  const root = document.createElement("section");
  root.className = "screen result";

  // ===== Při prohře: postava + razítko =====
  if (status === "lost") {
    const stage = document.createElement("div");
    stage.className = "result-stamp-stage";
    // Postava ve fázi 6 (talár pryč, X oči, zoufalá ústa)
    stage.appendChild(window.renderPenalty(6, maxMistakes, characterGender));
    // Razítko ZAMÍTNUTO se vykreslí přes postavu
    const stamp = document.createElement("div");
    stamp.className = "verdict-stamp";
    stamp.textContent = "ZAMÍTNUTO";
    stage.appendChild(stamp);
    root.appendChild(stage);
  }

  const verdict = document.createElement("h2");
  verdict.className = "verdict " + (status === "won" ? "won" : "lost");
  verdict.textContent = status === "won"
    ? "Rozsudek: vyhráno. Případ uzavřen."
    : "Rozsudek: propadl(a) jste.";
  root.appendChild(verdict);

  if (status === "won") {
    const quote = document.createElement("p");
    quote.className = "quote";
    quote.textContent = "Tribunál uznává vaši erudici v oblasti AI práva.";
    root.appendChild(quote);
  } else if (finalMaxim) {
    // Po prohře — závěrečná latinská maxima jako karta
    const card = document.createElement("aside");
    card.className = "maxim-card maxim-final";
    const la = document.createElement("p");
    la.className = "maxim-la";
    la.textContent = finalMaxim.la;
    const cs = document.createElement("p");
    cs.className = "maxim-cs";
    cs.textContent = finalMaxim.cs;
    card.appendChild(la);
    card.appendChild(cs);
    root.appendChild(card);
  }

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
  again.textContent = status === "won" ? "Nové řízení" : "Podat odvolání";
  again.addEventListener("click", onAgain);
  actions.appendChild(again);
  root.appendChild(actions);

  return root;
};

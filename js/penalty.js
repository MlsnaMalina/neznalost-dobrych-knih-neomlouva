/* PenaltyDisplay — vizualizace chybných pokusů.
   PLACEHOLDER: jednoduchá řada slotů, kde každý chybný pokus vyplní jeden slot
   tematickým glyfem (§, knížka, paragraf, razítko, kladívko, archiv).
   Tento modul je záměrně izolovaný — později ho lze nahradit animovanou
   verzí (mizející právníci, padající knihy atd.) beze změny zbytku hry. */

window.PENALTY_GLYPHS = ["§", "📕", "📘", "📗", "📒", "📚"];

window.renderPenalty = function (mistakes, maxMistakes) {
  const root = document.createElement("div");
  root.className = "penalty";
  root.setAttribute("role", "img");
  root.setAttribute("aria-label",
    `Chybné pokusy: ${mistakes} z ${maxMistakes}`);

  for (let i = 0; i < maxMistakes; i++) {
    const slot = document.createElement("div");
    slot.className = "penalty-slot" + (i < mistakes ? " taken" : "");
    const glyph = document.createElement("span");
    glyph.className = "glyph";
    glyph.textContent = i < mistakes
      ? (window.PENALTY_GLYPHS[i % window.PENALTY_GLYPHS.length])
      : "·";
    slot.appendChild(glyph);
    root.appendChild(slot);
  }
  return root;
};

/* Česká abeceda + utility pro tokenizaci názvu na "písmena".
   CH je samostatné písmeno (digraf). Diakritika se rozlišuje (Á ≠ A).
   Kliknutí na C neodhalí C uvnitř CH; kliknutí na H neodhalí H uvnitř CH. */

window.CZ_ALPHABET = [
  "A","Á","B","C","Č","D","Ď","E","É","Ě","F","G","H","CH",
  "I","Í","J","K","L","M","N","Ň","O","Ó","P","Q","R","Ř",
  "S","Š","T","Ť","U","Ú","Ů","V","W","X","Y","Ý","Z","Ž"
];

window.isAlphabetic = function (ch) {
  // jakýkoliv Unicode písmenný znak
  return /\p{L}/u.test(ch);
};

/**
 * Tokenizuje řetězec na pole "tokenů" pro účely hry.
 * Každý token: { kind: "letter" | "punct" | "space", value: string, upper: string }
 *   - letter: jedno písmeno (nebo dvojznak CH) k hádání
 *   - punct:  interpunkce, číslice, ostatní znaky — zobrazí se automaticky
 *   - space:  mezera
 */
window.tokenizeTitle = function (title) {
  const tokens = [];
  const chars = Array.from(title);
  let i = 0;
  while (i < chars.length) {
    const c = chars[i];
    if (c === " ") {
      tokens.push({ kind: "space", value: " ", upper: " " });
      i++;
      continue;
    }
    // CH digraph (case-insensitive)
    const next = chars[i + 1];
    if (next && (c === "c" || c === "C") && (next === "h" || next === "H")) {
      const value = c + next;
      tokens.push({ kind: "letter", value, upper: "CH" });
      i += 2;
      continue;
    }
    if (isAlphabetic(c)) {
      tokens.push({ kind: "letter", value: c, upper: c.toUpperCase() });
      i++;
      continue;
    }
    // vše ostatní: interpunkce, číslice, pomlčky, dvojtečky…
    tokens.push({ kind: "punct", value: c, upper: c });
    i++;
  }
  return tokens;
};

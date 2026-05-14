/* AlphabetKeyboard — klikací abeceda ve čtyřech řádcích (11 + 11 + 10 + 10 = 42).
   Rozdělení do řádkových wrapperů (.kb-row) místo flex-wrap, aby zalomení
   nezáviselo na šířce kontejneru. */
const KB_ROW_SPLIT = [11, 11, 10, 10];

window.renderKeyboard = function (guessedSet, titleLetterSet, onPick) {
  const root = document.createElement("div");
  root.className = "keyboard";

  let i = 0;
  KB_ROW_SPLIT.forEach((count) => {
    const row = document.createElement("div");
    row.className = "kb-row";

    for (let k = 0; k < count; k++) {
      const letter = window.CZ_ALPHABET[i++];
      if (!letter) break;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "key" + (letter.length > 1 ? " digraph" : "");
      btn.textContent = letter;

      if (guessedSet.has(letter)) {
        btn.disabled = true;
        btn.classList.add(titleLetterSet.has(letter) ? "used-correct" : "used-wrong");
      } else {
        btn.addEventListener("click", () => onPick(letter));
      }
      row.appendChild(btn);
    }
    root.appendChild(row);
  });

  return root;
};

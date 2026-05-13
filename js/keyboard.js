/* AlphabetKeyboard — klikací abeceda. */
window.renderKeyboard = function (guessedSet, titleLetterSet, onPick) {
  const root = document.createElement("div");
  root.className = "keyboard";

  window.CZ_ALPHABET.forEach((letter) => {
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
    root.appendChild(btn);
  });

  return root;
};

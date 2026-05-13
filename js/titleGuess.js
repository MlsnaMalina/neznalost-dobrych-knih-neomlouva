/* BookTitleGuess — renderuje skrytý / částečně odhalený název knihy. */
window.renderTitleGuess = function (tokens, guessedSet) {
  const root = document.createElement("div");
  root.className = "title-guess";

  // Skupiny po slovech (oddělené 'space' tokeny) — kvůli zalomení
  let currentWord = document.createElement("span");
  currentWord.className = "tg-word";
  root.appendChild(currentWord);

  tokens.forEach((t) => {
    if (t.kind === "space") {
      const sp = document.createElement("span");
      sp.className = "tg-slot space";
      sp.textContent = " ";
      root.appendChild(sp);
      currentWord = document.createElement("span");
      currentWord.className = "tg-word";
      root.appendChild(currentWord);
      return;
    }
    const slot = document.createElement("span");
    if (t.kind === "punct") {
      slot.className = "tg-slot punct";
      slot.textContent = t.value;
    } else {
      const revealed = guessedSet.has(t.upper);
      slot.className = "tg-slot" + (revealed ? " revealed" : "");
      slot.textContent = revealed ? t.value : " ";
    }
    currentWord.appendChild(slot);
  });

  return root;
};

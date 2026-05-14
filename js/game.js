/* Game — stavový stroj hry + výběr knihy.
   Stavy: "start" | "playing" | "won" | "lost" */

window.MAX_MISTAKES = 6;

window.createGame = function () {
  let state = {
    status: "start",   // "start" | "playing" | "won" | "lost"
    book: null,
    tokens: [],
    titleLetterSet: new Set(),  // všechna písmena/CH v názvu (upper)
    guessed: new Set(),          // všechna kliknutá písmena (upper)
    mistakes: 0,
    maxMistakes: window.MAX_MISTAKES,
    lastResult: null,            // "hit" | "miss" | null
    lastBookId: null,
    // Náhodně zvolená pohlavní varianta postavy advokáta pro tuto hru.
    characterGender: "m",        // "m" | "f"
    // Latinské maximy pro tuto hru (6 ks pro chyby + 1 závěrečná).
    maxims: [],
    finalMaxim: null
  };

  function pickBook() {
    const books = window.booksData;
    if (!books || books.length === 0) return null;
    if (books.length === 1) return books[0];
    let next;
    do { next = books[Math.floor(Math.random() * books.length)]; }
    while (next.id === state.lastBookId);
    return next;
  }

  function startNewGame() {
    const book = pickBook();
    const tokens = window.tokenizeTitle(book.title);
    const titleLetterSet = new Set(
      tokens.filter(t => t.kind === "letter").map(t => t.upper)
    );
    // Zahodit cache postavy advokáta — nová hra = nová identita.
    if (window.resetPenaltyCache) window.resetPenaltyCache();
    state = {
      ...state,
      status: "playing",
      book,
      tokens,
      titleLetterSet,
      guessed: new Set(),
      mistakes: 0,
      maxMistakes: window.MAX_MISTAKES,
      lastResult: null,
      lastBookId: book.id,
      characterGender: Math.random() < 0.5 ? "m" : "f",
      maxims: window.pickMaxims(window.MAX_MISTAKES),  // 6 ks, bez opakování
      finalMaxim: window.pickFinalMaxim()
    };
  }

  function pickLetter(letter) {
    if (state.status !== "playing") return;
    if (state.guessed.has(letter)) return;
    state.guessed.add(letter);

    if (state.titleLetterSet.has(letter)) {
      state.lastResult = "hit";
      // Výhra? Všechna písmena z titulu uhodnuta?
      const allRevealed = Array.from(state.titleLetterSet)
        .every(l => state.guessed.has(l));
      if (allRevealed) state.status = "won";
    } else {
      state.lastResult = "miss";
      state.mistakes += 1;
      if (state.mistakes >= state.maxMistakes) state.status = "lost";
    }
  }

  function giveUp() {
    if (state.status === "playing") state.status = "lost";
  }

  function toStart() {
    state.status = "start";
    state.lastResult = null;
  }

  return {
    getState: () => state,
    startNewGame,
    pickLetter,
    giveUp,
    toStart
  };
};

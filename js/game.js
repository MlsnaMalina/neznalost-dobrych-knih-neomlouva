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
    finalMaxim: null,
    // Aktuálně zobrazená maxima — buď z herního poolu (po miss), nebo
    // z TIMEOUT_MAXIMS (po timeoutu). gameScreen renderuje přímo tuto.
    activeMaxim: null,
    // Oddělený čítač spotřebovaných herních maxim (0..5). Roste jen při
    // miss-letter, ne při timeoutu — aby timeout nečerpal z předvybraných 6.
    gameMaximIndex: 0
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
      finalMaxim: window.pickFinalMaxim(),
      activeMaxim: null,
      gameMaximIndex: 0
    };
  }

  function pickLetter(letter) {
    if (state.status !== "playing") return;
    if (state.guessed.has(letter)) return;
    state.guessed.add(letter);

    if (state.titleLetterSet.has(letter)) {
      state.lastResult = "hit";
      state.activeMaxim = null;
      // Výhra? Všechna písmena z titulu uhodnuta?
      const allRevealed = Array.from(state.titleLetterSet)
        .every(l => state.guessed.has(l));
      if (allRevealed) state.status = "won";
    } else {
      state.lastResult = "miss";
      state.mistakes += 1;
      if (state.mistakes >= state.maxMistakes) {
        // 6. chyba → verdikt, žádné hero (result screen použije finalMaxim).
        state.status = "lost";
        state.activeMaxim = null;
      } else {
        // Vybíráme z předvybraného poolu po pořadí přes vlastní čítač.
        state.activeMaxim = state.maxims[state.gameMaximIndex];
        state.gameMaximIndex += 1;
      }
    }
  }

  /* Penalizace za překročení časového limitu.
     Sémanticky stejné jako miss (+1 chyba, případně lost), ale:
     - lastResult = "timeout" (gameScreen rozliší zdroj maximy)
     - maxima se losuje z TIMEOUT_MAXIMS (NE z herního poolu)
     - gameMaximIndex se NEZVYŠUJE — herní pool zůstane nedotčen */
  function timeoutMiss() {
    if (state.status !== "playing") return;
    state.lastResult = "timeout";
    state.mistakes += 1;
    if (state.mistakes >= state.maxMistakes) {
      // 6. chyba (i z timeoutu) → verdikt, žádné hero.
      state.status = "lost";
      state.activeMaxim = null;
    } else {
      state.activeMaxim = window.pickTimeoutMaxim();
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
    timeoutMiss,
    giveUp,
    toStart
  };
};

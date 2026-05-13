/* App — entry point + render loop. */
(function () {
  const root = document.getElementById("app");
  const game = window.createGame();

  function render() {
    const state = game.getState();
    root.innerHTML = "";

    if (state.status === "start") {
      root.appendChild(window.renderStartScreen(() => {
        game.startNewGame();
        render();
      }));
      return;
    }

    if (state.status === "playing") {
      root.appendChild(window.renderGameScreen(state, {
        onPick: (letter) => { game.pickLetter(letter); render(); },
        onNewGame: () => { game.startNewGame(); render(); },
        onGiveUp: () => { game.giveUp(); render(); }
      }));
      return;
    }

    // won / lost
    root.appendChild(window.renderResult({
      status: state.status,
      book: state.book,
      mistakes: state.mistakes,
      maxMistakes: state.maxMistakes,
      onAgain: () => { game.startNewGame(); render(); }
    }));
  }

  // Theme toggle (light/dark) — uloženo v localStorage
  function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    const label = document.querySelector("[data-theme-label]");
    if (label) label.textContent = theme === "dark" ? "Světlý režim" : "Tmavý režim";
  }
  const saved = localStorage.getItem("ndk-theme");
  applyTheme(saved === "dark" ? "dark" : "light");

  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("ndk-theme", next);
    applyTheme(next);
  });

  render();
})();

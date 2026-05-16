/* App — entry point + render loop.
   Drží předchozí stav, aby mohl detekovat přechody (hit / miss / won / lost)
   a podle nich pouštět zvukové efekty. */
(function () {
  const root = document.getElementById("app");
  const game = window.createGame();

  // ===== Zvuky reagují na změny stavu =====
  let prev = { status: "start", mistakes: 0, lastResult: null };

  function fireSoundFor(state) {
    if (!window.sound) return;
    // Status change: výhra / prohra
    if (state.status === "won" && prev.status !== "won") {
      window.sound.playWin();
    } else if (state.status === "lost" && prev.status !== "lost") {
      window.sound.playLose();
    } else if (state.status === "playing") {
      // Hit / miss — odlišit přes lastResult + změnu mistakes
      if (state.lastResult === "hit" && prev.lastResult !== "hit") {
        // hit detekujeme přes guessed.size; mistakes se nemění → použijeme lastResult
        // (každé pickLetter vytváří nový lastResult, takže porovnání referencí stačí)
        window.sound.playHit();
      } else if ((state.lastResult === "miss" || state.lastResult === "timeout")
                 && state.mistakes > prev.mistakes) {
        // Timeout je sémanticky penalizace jako špatné písmeno → stejný zvuk.
        window.sound.playMiss();
      }
    }
    prev = {
      status: state.status,
      mistakes: state.mistakes,
      lastResult: state.lastResult
    };
  }

  function render() {
    // Hard stop časového limitu — každý render začíná čistě. Zaručuje,
    // že naplánovaný timeout fire nepřežije přechod na result / start
    // ani „Stáhnout žalobu" / „Nové řízení". gameScreen.js si pak
    // v případě potřeby naplánuje nový.
    if (window.__timeoutTimerId) {
      clearTimeout(window.__timeoutTimerId);
      window.__timeoutTimerId = null;
    }
    const state = game.getState();
    root.innerHTML = "";

    if (state.status === "start") {
      // start = reset paměti přechodů
      prev = { status: "start", mistakes: 0, lastResult: null };
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
        onGiveUp: () => { game.giveUp(); render(); },
        // Časový limit doběhl bez akce → penalizace + maxima z TIMEOUT_MAXIMS.
        onTimeout: () => { game.timeoutMiss(); render(); }
      }));
      fireSoundFor(state);
      return;
    }

    // won / lost
    root.appendChild(window.renderResult({
      status: state.status,
      book: state.book,
      mistakes: state.mistakes,
      maxMistakes: state.maxMistakes,
      characterGender: state.characterGender,
      finalMaxim: state.finalMaxim,
      onAgain: () => { game.startNewGame(); render(); }
    }));
    fireSoundFor(state);
  }

  // ===== Theme toggle (light / dark) =====
  function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    const label = document.querySelector("[data-theme-label]");
    if (label) label.textContent = theme === "dark" ? "Denní služba" : "Noční služba";
  }
  const savedTheme = localStorage.getItem("ndk-theme");
  applyTheme(savedTheme === "dark" ? "dark" : "light");

  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("ndk-theme", next);
    applyTheme(next);
  });

  // ===== Sound toggle (off by default) =====
  const soundBtn = document.getElementById("soundToggle");
  function refreshSoundIcon() {
    const on = window.sound && window.sound.isEnabled();
    soundBtn.querySelector('[data-icon="off"]').style.display = on ? "none" : "block";
    soundBtn.querySelector('[data-icon="on"]').style.display  = on ? "block" : "none";
    soundBtn.setAttribute("aria-pressed", on ? "true" : "false");
    soundBtn.title = on ? "Zvuk zapnut" : "Zvuk vypnut";
  }
  soundBtn.addEventListener("click", () => {
    if (!window.sound) return;
    window.sound.toggle();
    refreshSoundIcon();
  });
  refreshSoundIcon();

  render();
})();

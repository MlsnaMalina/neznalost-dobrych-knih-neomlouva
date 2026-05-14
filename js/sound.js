/* Zvukové efekty — generované přes Web Audio API.
   Default = vypnuto (konference, hluk). Stav v localStorage. */

(function () {
  const LS_KEY = "ndk-sound";
  let ctx = null;
  let enabled = localStorage.getItem(LS_KEY) === "on";

  function getCtx() {
    if (!ctx) {
      const Ctor = window.AudioContext || window.webkitAudioContext;
      if (!Ctor) return null;
      ctx = new Ctor();
    }
    // Některé prohlížeče vyžadují resume po user gestu.
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  /* Jednoduchý oscilátor s envelopem (attack-decay).
     freq: Hz, dur: ms, type: oscillator type, peak: 0–1. */
  function tone({ freq, dur, type = "sine", peak = 0.18, slideTo = null }) {
    const c = getCtx();
    if (!c) return;
    const t0 = c.currentTime;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo !== null) {
      osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur / 1000);
    }
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(peak, t0 + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur / 1000);
    osc.connect(gain).connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur / 1000 + 0.05);
  }

  /* Krátký, jemný „ping" — správný tah. */
  function playHit() {
    if (!enabled) return;
    tone({ freq: 1320, dur: 180, type: "sine", peak: 0.18, slideTo: 1760 });
  }

  /* Tupé „thud" / buzz — špatný tah. */
  function playMiss() {
    if (!enabled) return;
    tone({ freq: 220, dur: 260, type: "square", peak: 0.10, slideTo: 140 });
  }

  /* Krátká fanfára — výhra. Tři tóny dur akordu (C5-E5-G5). */
  function playWin() {
    if (!enabled) return;
    tone({ freq: 523, dur: 220, type: "triangle", peak: 0.16 });           // C5
    setTimeout(() => tone({ freq: 659, dur: 220, type: "triangle", peak: 0.16 }), 180); // E5
    setTimeout(() => tone({ freq: 784, dur: 520, type: "triangle", peak: 0.18 }), 360); // G5
  }

  /* „Thump" razítka + krátký smutný tón — prohra. */
  function playLose() {
    if (!enabled) return;
    // thump — krátký nízký útok
    tone({ freq: 110, dur: 220, type: "square", peak: 0.22, slideTo: 60 });
    // smutná sekunda
    setTimeout(() => tone({ freq: 330, dur: 700, type: "sine", peak: 0.14, slideTo: 220 }), 200);
  }

  function isEnabled() { return enabled; }
  function setEnabled(v) {
    enabled = !!v;
    localStorage.setItem(LS_KEY, enabled ? "on" : "off");
    if (enabled) getCtx(); // probudit kontext při zapnutí
  }
  function toggle() { setEnabled(!enabled); return enabled; }

  window.sound = { playHit, playMiss, playWin, playLose, isEnabled, setEnabled, toggle };
})();

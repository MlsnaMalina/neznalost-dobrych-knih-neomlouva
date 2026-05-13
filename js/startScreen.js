/* StartScreen — úvodní obrazovka. */
window.renderStartScreen = function (onStart) {
  const root = document.createElement("section");
  root.className = "screen start";

  // Decentní knihovní doodle (SVG inline, ladí s černobílým stylem)
  const doodle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  doodle.setAttribute("viewBox", "0 0 240 80");
  doodle.setAttribute("width", "240");
  doodle.setAttribute("height", "80");
  doodle.setAttribute("aria-hidden", "true");
  doodle.classList.add("doodle");
  doodle.innerHTML = `
    <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="10"  y="20" width="14" height="50"/>
      <rect x="26"  y="14" width="14" height="56"/>
      <rect x="42"  y="22" width="14" height="48"/>
      <rect x="60"  y="10" width="14" height="60"/>
      <rect x="76"  y="24" width="14" height="46"/>
      <path d="M100 70 h60 v-44 l-30 -10 -30 10 z"/>
      <path d="M130 26 v44"/>
      <rect x="170" y="14" width="14" height="56"/>
      <rect x="186" y="20" width="14" height="50"/>
      <rect x="202" y="12" width="14" height="58"/>
      <rect x="218" y="22" width="14" height="48"/>
      <path d="M6 74 h232"/>
    </g>
  `;
  root.appendChild(doodle);

  const h1 = document.createElement("h1");
  h1.textContent = "Neznalost dobrých knih neomlouvá";
  root.appendChild(h1);

  const lead = document.createElement("p");
  lead.className = "lead";
  lead.textContent = "V právu platí, že neznalost zákona neomlouvá. Tady platí ještě něco horšího: neznalost dobrých knih neomlouvá.";
  root.appendChild(lead);

  const sub = document.createElement("p");
  sub.className = "sub";
  sub.textContent = "Uhodněte název odborné knihy z oblasti AI práva dřív, než vyčerpáte všechny pokusy.";
  root.appendChild(sub);

  const btn = document.createElement("button");
  btn.className = "btn";
  btn.type = "button";
  btn.textContent = "Zahájit hru";
  btn.addEventListener("click", onStart);
  root.appendChild(btn);

  return root;
};

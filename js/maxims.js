/* Latinské maximy — pool pro chybné tahy + 5 závěrečných pro prohru.
   Při startu hry se vylosuje 6 maxim z poolu + 1 závěrečná.
   Pořadí maxim v rámci hry odpovídá pořadí chyb (Námitka č. 1, 2, …, 6). */

window.MAXIMS_POOL = [
  // Klasické zkroucené latinismy + AI/IT parodie (původních 17)
  { la: "Ignorantia librorum non excusat.",  cs: "Neznalost knih neomlouvá." },
  { la: "In dubio pro lectore.",             cs: "V pochybnostech ve prospěch čtenáře." },
  { la: "In dubio pro caffeine.",            cs: "V pochybnostech ve prospěch kofeinu." },
  { la: "Habeas corpus, sed non habeas knihu.", cs: "Máš tělo, ale nemáš knihu." },
  { la: "Cogito, ergo legendum.",            cs: "Myslím, tedy je třeba číst." },
  { la: "Veni, vidi, non legi.",             cs: "Přišel jsem, viděl, nepřečetl." },
  { la: "Carpe librum.",                     cs: "Chop se knihy." },
  { la: "Mens sana in libro sano.",          cs: "Zdravý duch ve zdravé knize." },
  { la: "Lorem ipsum dolor sit AI.",         cs: "Lorem ipsum bolí — sit AI." },
  { la: "In dubio pro Netflix.",             cs: "V pochybnostech ve prospěch Netflixu." },
  { la: "Stack overflow in paragraphis.",    cs: "Přetečení zásobníku v paragrafech." },
  { la: "GPT-7 dixit: arrendite vos.",       cs: "GPT-7 pravil: vzdejte se." },
  { la: "Nullum crimen sine prompt.",        cs: "Žádný zločin bez promptu." },
  { la: "Ad astra per chatbot.",             cs: "Ke hvězdám skrze chatbota." },
  { la: "Et tu, ChatGPT?",                   cs: "I ty, ChatGPT?" },
  { la: "Veritas vincit. Halucinatio quoque.", cs: "Pravda vítězí. Halucinace také." },
  { la: "Ignorantia AI non excusat.",        cs: "Neznalost AI neomlouvá." },

  // Harry Potter
  { la: "Expelliarmus libri.",               cs: "Odzbroj knihu kouzlem." },
  { la: "Wingardium leviosa lex.",           cs: "Ať se zákon vznese (a kéž bys ho znal)." },
  { la: "Avada kedavra ignorantiae.",        cs: "Smrtící kletba na neznalost." },
  { la: "Lumos in bibliotheca.",             cs: "Rozsviť v knihovně." },
  { la: "Accio liber!",                      cs: "Knihu sem!" },
  { la: "Quod patronus tuus est?",           cs: "Jaký je tvůj patron? (Snad odborná literatura.)" },

  // Pán prstenů / Hobit
  { la: "Unus liber omnes regit.",           cs: "Jedna kniha vládne všem." },
  { la: "Non omnes qui errant perduntur. Sed lectores certe.", cs: "Ne všichni, kdo bloudí, jsou ztraceni. Čtenáři však ano." },
  { la: "Mordor in tribunali.",              cs: "Mordor u soudu." },
  { la: "Mellon — amice, intra.",            cs: "Mellon — příteli, vstup." },
  { la: "Praecipitium habet pulchrum nomen.", cs: "Propast má krásné jméno." },
  { la: "Tolle anulum, lege librum.",        cs: "Vezmi prsten, čti knihu." },

  // Star Wars
  { la: "Sit tecum vis bibliothecae.",       cs: "Nechť je s tebou síla knihovny." },
  { la: "Magister Yoda dixit: aut legis, aut non legis. Conatus non est.", cs: "Mistr Yoda pravil: buď čteš, nebo nečteš. Pokus neexistuje." },
  { la: "Imperium contra librum.",           cs: "Impérium proti knize." },
  { la: "Princeps Leia in bibliotheca.",     cs: "Princezna Leia v knihovně." },
  { la: "Ad astra per litteras.",            cs: "Ke hvězdám skrze písmenka." }
];

/* Závěrečné maximy — vybírá se 1 ze 5 při startu hry, zobrazí se po prohře. */
window.FINAL_MAXIMS = [
  { la: "Lex dura, sed quiz durior.",        cs: "Zákon je tvrdý, ale kvíz tvrdší." },
  { la: "Casus belli: ignorantia.",          cs: "Důvod k válce: neznalost." },
  { la: "Ad acta. Definitive.",              cs: "K aktům. Definitivně." },
  { la: "Causa finita est.",                 cs: "Případ uzavřen." },
  { la: "Requiescat in pace, candidate.",    cs: "Odpočívej v pokoji, kandidáte." }
];

/* Náhodný výběr N položek z pole (Fisher-Yates shuffle, beze změny vstupu). */
window.pickMaxims = function (count) {
  const pool = window.MAXIMS_POOL.slice();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
};

window.pickFinalMaxim = function () {
  return window.FINAL_MAXIMS[Math.floor(Math.random() * window.FINAL_MAXIMS.length)];
};

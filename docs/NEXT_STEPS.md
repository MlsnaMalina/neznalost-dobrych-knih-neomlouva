# NEXT_STEPS.md

## Priorita: NUTNÉ — okamžitě navázat (zbytek session 2)

### 0a. Dokončit Úkol 2 ze session 2: 1 nová závěrečná maxima
- **Co:** Do `FINAL_MAXIMS` v `js/maxims.js` přidat položku:
  ```js
  { la: "Hoc non est liber quem quaeris.", cs: "Toto není kniha, kterou hledáš." }
  ```
- **Proč:** Uživatelka chtěla doplnit Star Wars reference (Obi-Wan). Session 2 končila po Úkolu 1, Úkol 2 zůstal nedokončený.
- **Kde:** `js/maxims.js`, pole `FINAL_MAXIMS` — přidat jako 6. položku.
- **Hotovo když:** `FINAL_MAXIMS.length === 6`.

### 0b. Dokončit Úkol 3 ze session 2: `TIMEOUT_MAXIMS` pool
- **Co:** Vytvořit nový pool `window.TIMEOUT_MAXIMS` v `js/maxims.js` se 9 maximami **a** helper `window.pickTimeoutMaxim`. Samotnou timeout logiku (8 s na výběr) NEdělat — uživatelka to chce řešit samostatným promptem.
- **9 položek (zadání uživatelky, doslovně):**
  1. *Festina lente. Sed festina.* / Spěchej pomalu. Ale spěchej.
  2. *Mora trahit periculum.* / Otálení přináší nebezpečí.
  3. *Octo secundae sunt aeternitas in iure.* / Osm sekund je věčnost v právu.
  4. *Praeclusio temporis.* / Promlčení času.
  5. *Dum dubitas, tempus fugit.* / Zatímco váháš, čas letí.
  6. *Cunctator vincitur.* / Váhavec prohrává.
  7. *Carpe secundum.* / Chop se sekundy.
  8. *Tempus est advocatus crudelissimus.* / Čas je nejkrutější advokát.
  9. *Procrastinatio mater erroris.* / Prokrastinace je matka chyby.
- **Kde:** `js/maxims.js`. Strukturu analogickou k `FINAL_MAXIMS` + helper `pickTimeoutMaxim`.
- **Pravidla:**
  - Losování VÝHRADNĚ při timeout, NIKDY při běžné chybě.
  - Pool je samostatný (mimo `MAXIMS_POOL` i `FINAL_MAXIMS`).
- **Hotovo když:** `TIMEOUT_MAXIMS.length === 9`, `pickTimeoutMaxim` funguje, žádná timeout integrace v `game.js` nebo `gameScreen.js`.

### 0c. Verdikt em-dash u maximy „Mellon"
- **Co:** Maxima na pozici 27 v `MAXIMS_POOL` zní *„Mellon — amice, intra."* (em-dash). Uživatelka v zadání měla obyčejnou pomlčku `-`. Změna proběhla autonomně, **potvrzení / zamítnutí zatím nebylo**.
- **Akce:** Zeptat se uživatelky, jestli zachovat em-dash, nebo vrátit `-`. Drobnost na 30 vteřin.

---

## Priorita: NUTNÉ (před konferencí by mělo být hotové)

### 1. Ověřit, že Vercel deploy funguje
- **Co:** Otevřít Vercel dashboard (přihlášený přes GitHub `MlsnaMalina`) a zkontrolovat, zda je projekt `neznalost-dobrych-knih-neomlouva` nalinkovaný a auto-deployuje z `main`.
- **Proč:** Hra na konferenci nepoběží lokálně. Bez funkčního deploy uživatelka nemá produkční URL.
- **Kde:** [vercel.com](https://vercel.com). Pokud projekt neexistuje, postup je v `PROJECT_CONTEXT.md` (Framework Preset `Other`, prázdné Build/Install, Output `./`).
- **Hotovo když:** Existuje produkční URL (např. `*.vercel.app`), poslední commit `f120fe6` (nebo novější) je deployovaný a hra v ní funguje.

### 2. End-to-end test na cílovém zařízení
- **Co:** Otevřít produkční URL na zařízení / prohlížeči, ze kterého poběží konference (laptop + projektor; ideálně Chrome i Firefox; vyzkoušet i mobilní telefon).
- **Proč:** Vyvíjeno v Launch preview panelu (Chromium-based). Některé efekty (Web Audio, `backdrop-filter`) se v ostatních prohlížečích chovají odlišně.
- **Kde:** Cílový hardware konference + testovací mobil.
- **Hotovo když:** Hra funguje bez vizuálních / herních chyb v obou prohlížečích, na desktopu i mobilu. Zvuky lze zapnout, fungují. Hero animace plyne. Razítko ZAMÍTNUTO se zobrazí. Theme toggle funguje a persistuje.

### 3. Test čitelnosti z dálky
- **Co:** Otevřít hru na velkém displeji / projektoru ze vzdálenosti, jakou bude mít publikum na konferenci. Vyzkoušet, zda jsou klávesy a slovo k uhodnutí čitelné.
- **Proč:** Konferenční přestávky = lidé okolo. Pokud je text moc malý, hra nefunguje jako sociální moment.
- **Kde:** `styles.css` — proměnné `font-size` pro `.tg-slot`, `.key`. Lze zvětšit přes media query.
- **Hotovo když:** Slovo k uhodnutí čitelné minimálně z 5 m při HD projekci.

---

## Priorita: DOPORUČENÉ (zvýší kvalitu, ale ne blokátor)

### 4. Doplnit chybějící latinské maximy
- **Co:** Uživatelka původně mluvila o 30 maximách, ale dodala 17 (mezery 3–8, 14–15, 17, 20–21, 29–30). Přidat zbývající.
- **Proč:** Při 6 výběrech ze 17 se „repertoáry" rychle opakují mezi hrami. Větší pool = lepší pestrost.
- **Kde:** `js/maxims.js`, pole `MAXIMS_POOL`. Stačí přidat objekty `{ la: "...", cs: "..." }`.
- **Hotovo když:** Pool má alespoň 25–30 položek a uživatelka schválí seznam.
- **POZOR:** Bez konzultace s uživatelkou nevkládat vlastní vymyšlené maximy. Latina musí ladit s tonem konference.

### 5. Závěrečná kontrola GOOD_FLASH
- **Co:** V `js/gameScreen.js` existuje pole `GOOD_FLASH` se 4 hláškami pro správné písmeno („Důkaz proveden." atd.). BAD_FLASH byl nahrazen maximami. Uživatelka chtěla ověřit, jestli GOOD_FLASH zachovat — viz `~/.claude/projects/.../memory/project_todo_endgame.md`.
- **Proč:** Pravidlo „udělat si revizi na konci".
- **Kde:** `js/gameScreen.js`, pole `GOOD_FLASH`.
- **Hotovo když:** Uživatelka rozhodne (zachovat / zredukovat / odstranit).

### 6. Zahrnout 6. „pool" maximu jako hero při prohře
- **Co:** Aktuálně 6. chyba okamžitě přepne na výsledkovou obrazovku, takže 6. „pool" maxima se nikdy nezobrazí. Místo ní hraje statická závěrečná maxima.
- **Proč:** Uživatelka explicitně chtěla „hero overlay při každé chybě". Aktuální chování není striktně dle zadání.
- **Kde:** Logika v `js/game.js` (`pickLetter`) — okamžitě nastavuje status na lost. Možná řešení:
  - (a) Krátké zpoždění mezi 6. miss a přechodem na výsledek (nechat hero přehrát, pak přejít).
  - (b) Hero overlay vykreslit i na výsledkové obrazovce (přerenderovat `result.js` aby přehrál hero).
- **Hotovo když:** 6. chyba zobrazí 6. pool maximu jako hero a teprve potom přejde na razítko + závěrečnou maximu.

### 7. `.gitattributes` proti CRLF/LF warningu
- **Co:** Vytvořit soubor `.gitattributes` v rootu se základní normalizací konců řádků.
- **Proč:** Každý commit hlásí 8+ warningu „LF will be replaced by CRLF". Není to chyba, ale ruší.
- **Kde:** Vytvořit `.gitattributes` v rootu s obsahem např.:
  ```
  * text=auto eol=lf
  *.bat text eol=crlf
  ```
- **Hotovo když:** Commit neukazuje warningy.

---

## Priorita: VOLITELNÉ (vylepšení nad rámec)

### 8. Persistence skóre / žebříček
- **Co:** Ukládat počet vyhraných her, průměrný počet chyb, atd. do `localStorage` a zobrazit na úvodní obrazovce.
- **Proč:** Soutěžní motiv pro konferenci (kdo má víc výher).
- **Kde:** Nové `js/stats.js` + render na `startScreen.js`.
- **Hotovo když:** Po reloadu se zobrazí kumulované statistiky.

### 9. Sdílení / náhled posledního výsledku
- **Co:** Tlačítko „Sdílet výsledek" na výsledkové obrazovce, které zkopíruje text typu „Uhodl(a) jsem 'Umělá inteligence & právo' za 3 pokusy".
- **Proč:** Virální moment na konferenci.
- **Kde:** `js/result.js`, použít `navigator.clipboard.writeText`.
- **Hotovo když:** Klik na tlačítko zkopíruje text, krátký toast „Zkopírováno".

### 10. Filtr obtížnosti při startu
- **Co:** Na úvodní obrazovce nabídnout výběr „Lehká / Těžká / Vše" (data již mají `difficulty`).
- **Proč:** Pole `difficulty` v `books.js` zatím nemá využití.
- **Kde:** `js/startScreen.js`, předat filter do `game.startNewGame`.
- **Hotovo když:** Volba je viditelná, ovlivňuje výběr knih.

### 11. Klávesové ovládání
- **Co:** Hráč může psát písmena na fyzické klávesnici místo klikání.
- **Proč:** Rychlejší hraní, intuitivní pro laptopové uživatele.
- **Kde:** `js/gameScreen.js` — `keydown` listener na document, mapovat na `keyboard` klávesy.
- **Hotovo když:** Stisk A na klávesnici vyvolá totéž co klik na tlačítko A. Případně vizuální „přitlačení" klávesy.

### 12. Animace 6. fáze postavy (pád spisu) detailněji
- **Co:** Spisy ve fázi 4 sjedou shora na zem (CSS animation). Talár ve fázi 5 spadne s rotací.
- **Proč:** Eskalace je teď „skoková" mezi fázemi. Více motion = víc zábavy.
- **Kde:** `styles.css`, sekce `.advokat.stage-4`, `.stage-5`. Přidat keyframes pro `part-papers` a `robe`.
- **Hotovo když:** Při přechodu do fáze 4 spisy „spadnou" shora dolů. Při fázi 5 talár rotuje dolů.

### 13. Star Wars / PlayStation easter eggy
- **Co:** Uživatelka zmínila, že cílovka má rády Star Wars a PlayStation. Možný easter egg: Konami code → zobrazit speciální maximu („Use the source, Luke."). Nebo náhodně 1 v 50 hrách se objeví Yoda-style hláška.
- **Proč:** Loajalita cílovky + zapamatovatelnost.
- **Kde:** `js/app.js` (event listener pro Konami) nebo `js/maxims.js` (tier 4 — rare).
- **Hotovo když:** Easter egg lze najít, ale není rušivý.

---

---

## DŮLEŽITÁ POZNÁMKA: `character-phases.js` v rootu

V rootu projektu leží soubor `character-phases.js` (~925 řádků). **To není mrtvý kód ani duplicita** — je to **pracovní zdrojový soubor uživatelky**, který přinesla do projektu pro další iteraci postavy advokáta. Bude se používat při pokračování práce na SVG postavě.

**Nikdy ho nesmaž, nepřepiš ani „neoptimalizuj" bez výslovného pokynu uživatelky.** Než s ním začneš cokoli dělat, počkej, až ti uživatelka řekne, jak ho integrovat (např. „převezmi z `character-phases.js` definice fází místo aktuálních v `js/penalty.js`").

Aktuální `js/penalty.js` zůstává v provozu, dokud uživatelka neřekne jinak.

---

## Co NIKDY nedělat bez konzultace
Viz `DO_NOT_CHANGE.md`. Stručně:
- Měnit paletu.
- Přepisovat texty maxim, mikrokopií.
- Push do `main` bez výslovného pokynu.
- Měnit strukturu souborů.
- Přidávat externí JS knihovny.

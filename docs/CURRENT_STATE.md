# CURRENT_STATE.md

## Co aktuálně funguje (HOTOVÉ)

### Herní logika
- Stavový stroj: `start` → `playing` → `won` / `lost`.
- Náhodný výběr knihy, neopakuje se za sebou (`game.js`, `pickBook`).
- Tokenizace názvu: CH digraf, diakritika rozlišena, mezery/interpunkce/číslice/`&`/`—`/závorky auto-zobrazeny (`alphabet.js`).
- Case-insensitive vyhodnocení.
- Limit 6 chyb (`MAX_MISTAKES` v `game.js`).
- Stav výhry: všechna písmena z titulu (`titleLetterSet`) jsou ve `guessed`.
- „Stáhnout žalobu" = okamžitý přechod na lost.

### Vizuál
- Striktní paleta + 2 schválené pleťové výjimky (viz DO_NOT_CHANGE).
- Light + Dark mód, přepínač v topbaru („Noční služba" / „Denní služba"), persistence v `localStorage` (klíč `ndk-theme`).
- Dvojice fontů: Cormorant Garamond + JetBrains Mono přes Google Fonts.
- Responzivní: desktop 2 sloupce (klávesnice | postava), mobil ≤780 px stack.
- Kulaté klávesy 44×44 px ve stylu psacího stroje.

### Postava advokáta (penalty)
- SVG s 6 fázemi + razítko ZAMÍTNUTO.
- Náhodná M/F varianta při startu hry.
- Plynulé CSS transitions mezi fázemi (cache instance + rAF class swap).
- Shake animace při zhoršení (220 ms).
- Razítko ZAMÍTNUTO se zobrazuje na výsledkové obrazovce přes postavu ve fázi 6.

### Latinské maximy
- Pool **34 herních** + 5 závěrečných v `maxims.js` (po session 2 rozšířeno z původních 17).
- Herní pool organizován do 4 kategorií v komentářích, ale technicky jeden plochý seznam: Klasické zkroucené latinismy + AI/IT parodie (17) · Harry Potter (6) · Pán prstenů / Hobit (6) · Star Wars (5).
- Při startu hry: shuffle pool → vyber 6 + 1 závěrečnou. Bez opakování v rámci hry.
- **Hero overlay**: při chybě maxima nejdřív přes celou stránku (3,5 s hold), pak shrink + translate do pozice malé karty pod soudcem (Web Animations API, `getBoundingClientRect`).
- Poloprůhledné pozadí hero (`--hero-veil`, 82 % bg, blur 2 px).
- Závěrečná maxima na výsledkové obrazovce při prohře.
- **`TIMEOUT_MAXIMS` pool neexistuje** — čeká na realizaci v další session.

### Zvuky
- Web Audio API, generované programaticky (sinusovky, square wave, triangle).
- 4 efekty: hit, miss, win, lose.
- **Default vypnuto.** Persistence v `localStorage` (klíč `ndk-sound`).
- Ikona-přepínač v topbaru (SVG s dvěma stavy on/off).

### Git + deploy
- Lokální repo s autorem `MlsnaMalina <zlatenkak@gmail.com>`.
- `origin` = https://github.com/MlsnaMalina/neznalost-dobrych-knih-neomlouva (public).
- Aktuální commit na `main`: `f120fe6` („Hero maxim: poloprůhledné pozadí + delší hold").
- Vercel: nastavení popsáno, ale aktivace nepotvrzena (viz Co je potřeba zkontrolovat).

## Co je rozpracované
**Nic není „rozpracované" v polovině** — vše commitnuté funguje. Otevřené body jsou pouze otázky budoucího směru.

## Co je pouze navržené, ale ještě neprovedené
- 6. „pool" maxima jako hero overlay (dnes 6. chyba okamžitě skočí na výsledek).
- Závěrečná kontrola GOOD_FLASH v `gameScreen.js`.
- Doplnění chybějících maxim do `MAXIMS_POOL` (mezery 3–8, 14–15, 17, 20–21, 29–30).
- `.gitattributes` proti CRLF/LF warningu.

## Co je potřeba zkontrolovat
- **Vercel deploy**: po `vercel logs` nebo otevření Vercel dashboard zkontrolovat, jestli projekt opravdu auto-deployuje z `main`. Uživatelka to explicitně nepotvrdila.
- **Funkčnost na konferenčním projektoru** — testováno pouze v Launch preview panelu, ne na reálném 1080p+ projektoru.
- **Funkčnost ve Firefoxu/Safari** — vyvíjeno v prostředí Chromium-based náhledu.
- **Web Audio API**: některé prohlížeče blokují AudioContext do prvního user gestu. `sound.js` to řeší `ctx.resume()` v `getCtx()`. Mělo by fungovat, ale neověřeno end-to-end.
- **Wrap dlouhých názvů knih**: při titulech jako *„Postavení spotřebitele v oblasti distribuce pojištění v digitální době"* — testovat na různých šířkách.
- **Backdrop blur**: Safari < 16 ho nepodporuje plně. Fallback: bez blur funguje (jen poloprůhledné pozadí). Ne kritické.

## Co je potřeba opravit
**Nic akutního.** Aktuální stav podle uživatelky funkční (jednotlivé úpravy iterativně schvalovala a commitovala).

## Co NESMÍ být změněno bez výslovného souhlasu
Detailní seznam v `DO_NOT_CHANGE.md`. Stručně:
- Paleta barev.
- Mikrokopie v právní hantýrce.
- Texty latinských maxim.
- Pravidlo „push jen na pokyn".
- Postava advokáta — pohlavní varianty, klobouk = biret, 6 fází eskalace.
- Časování hero animace (4400 ms, 3,5 s hold).
- Git author email `zlatenkak@gmail.com`.

## Struktura složek

```
pravnici-hra/
├── index.html
├── styles.css
├── .gitignore
├── js/
│   ├── alphabet.js
│   ├── app.js
│   ├── books.js
│   ├── game.js
│   ├── gameScreen.js
│   ├── keyboard.js
│   ├── maxims.js
│   ├── penalty.js
│   ├── result.js
│   ├── sound.js
│   ├── startScreen.js
│   └── titleGuess.js
└── docs/                              ← handoff dokumentace
    ├── PROJECT_CONTEXT.md
    ├── SESSION_SUMMARY.md
    ├── CURRENT_STATE.md
    ├── NEXT_STEPS.md
    ├── FILES_AND_MATERIALS.md
    ├── PROMPT_FOR_NEXT_MODEL.md
    └── DO_NOT_CHANGE.md
```

Mimo repo (lokální AI paměť v `~/.claude/projects/.../memory/`):
- `MEMORY.md`
- `feedback_git_email.md`
- `feedback_palette.md`
- `project_repo.md`
- `project_todo_endgame.md`

## Důležité soubory (rychlý průvodce)

| Soubor | Účel | Závislosti / vazby |
|---|---|---|
| `index.html` | Vstupní bod, načítá fonty + všechny `js/*.js` v pořadí. | Pořadí scriptů důležité (data → utils → komponenty → app). |
| `styles.css` | Veškeré CSS. CSS proměnné v `:root` a `[data-theme="dark"]`. | Tokeny: `--bg`, `--paper`, `--ink`, `--ink-soft`, `--line`, `--line-soft`, `--accent`, `--good`, `--bad`, `--hero-veil`, `--font-display`, `--font-mono`, `--font-body`. |
| `js/books.js` | Pole `booksData` s tituly. | Konzumuje `game.js`. |
| `js/maxims.js` | Pool latinských maxim + helpery `pickMaxims`, `pickFinalMaxim`. | Konzumuje `game.js`. |
| `js/alphabet.js` | `CZ_ALPHABET` (42 znaků včetně CH), `tokenizeTitle()`. | Konzumuje `game.js` (tokenizace) a `keyboard.js` (render abecedy). |
| `js/sound.js` | Web Audio API generátor zvuků. Globální `window.sound`. | Volá `app.js` v `fireSoundFor`. |
| `js/game.js` | Stavový stroj. `createGame()` vrací `{ getState, startNewGame, pickLetter, giveUp, toStart }`. | Volá `app.js`. |
| `js/penalty.js` | SVG postava advokáta. Cache instance napříč rendery. Exporty: `renderPenalty(mistakes, max, gender)`, `resetPenaltyCache()`. | Volá `gameScreen.js` a `result.js`. |
| `js/titleGuess.js` | Render hádaného slova s tokeny. | Volá `gameScreen.js`. |
| `js/keyboard.js` | Render abecedy. | Volá `gameScreen.js`. |
| `js/gameScreen.js` | Herní obrazovka (header, stage = center + side). Render maxim card a hero overlay. Animace přes Web Animations API. | Volá `app.js`. |
| `js/result.js` | Výsledková obrazovka (won/lost). Razítko ZAMÍTNUTO + závěrečná maxima. | Volá `app.js`. |
| `js/startScreen.js` | Úvodní obrazovka. | Volá `app.js`. |
| `js/app.js` | Render loop + theme toggle + sound toggle + propagace state change → zvuky. | Vstupní bod runtime. |

## Známé slabé body

1. **Hero animace má pevně dané offsety**. Pokud uživatelka chce kratší/delší hold, je to v `gameScreen.js` v `animateMaximHero` (konstanty `TOTAL`, `ENTRY_END`, `HOLD_END`).
2. **Pool maxim je menší než plánovaných 30**. Pravděpodobnost opakování v rámci jedné hry je 0 (Fisher-Yates), ale opakování mezi hrami roste (17 maxim / 6 výběrů = jen ~3 různé „repertoáry").
3. **Razítko ZAMÍTNUTO se nikdy nezobrazí na herní obrazovce**, jen na výsledku. To je rozhodnutí, ne bug — ale stojí za zmínku.
4. **`window.*` globální namespace** pro všechno (žádné ES moduly). Při růstu kódu může kolidovat. Pro aktuální velikost OK.
5. **Žádné testy**. Logika je jednoduchá, ale `tokenizeTitle` (s CH digrafem a edge case znaky) by si zasloužila pár unit testů.
6. **`role="img"` na `.penalty` může matoucí pro screen reader** — postava se mění, ale `aria-label` se aktualizuje při každém renderu.
7. **Mobil**: penalty SVG 160×224 v media query — testováno jen v náhledu, ne na reálném telefonu.

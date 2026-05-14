# FILES_AND_MATERIALS.md

## Hlavní soubory (produkční kód hry)

### Root
| Soubor | Účel | Hlavní / pomocný | Zasahovat? |
|---|---|---|---|
| `index.html` | Vstupní bod. Načítá Google Fonts (Cormorant Garamond + JetBrains Mono), `styles.css` a všechny `js/*.js` v určeném pořadí. | Hlavní | Ano, opatrně. Pořadí scriptů důležité. |
| `styles.css` | Veškeré CSS hry. Tokeny v `:root` + dark mód v `[data-theme="dark"]`. ~520 řádků. | Hlavní | Ano. Měnit konzistentně přes tokeny. |
| `.gitignore` | Standardní (OS, editor, .env, Vercel, log). | Pomocný | Pouze při zavádění nových nástrojů. |

### `js/`
| Soubor | Účel | Závislosti | Pořadí v `index.html` |
|---|---|---|---|
| `books.js` | Pole `window.booksData` — 18 reálných titulů (easy/hard). | Žádné. | 1. |
| `maxims.js` | Pool 17 latinských maxim + 5 závěrečných. Helpery `pickMaxims`, `pickFinalMaxim`. | Žádné. | 2. |
| `sound.js` | Web Audio API generátor zvuků. Globální `window.sound`. | Žádné. | 3. |
| `alphabet.js` | `CZ_ALPHABET`, `tokenizeTitle()`, `isAlphabetic()`. | Žádné. | 4. |
| `titleGuess.js` | `renderTitleGuess(tokens, guessedSet)`. | `alphabet.js` (tokens). | 5. |
| `keyboard.js` | `renderKeyboard(guessed, titleLetterSet, onPick)`. | `alphabet.js` (CZ_ALPHABET). | 6. |
| `penalty.js` | SVG postava advokáta. `renderPenalty(mistakes, max, gender)`, `resetPenaltyCache()`. Cache instance napříč rendery. | Žádné. | 7. |
| `result.js` | `renderResult({...})`. Výsledková obrazovka. | `penalty.js` (postava ve fázi 6 při prohře). | 8. |
| `startScreen.js` | `renderStartScreen(onStart)`. Úvod. | Žádné. | 9. |
| `gameScreen.js` | `renderGameScreen(state, actions)`. Hlavní herní obrazovka. Render hero overlay + animace. | `penalty.js`, `titleGuess.js`, `keyboard.js`. | 10. |
| `game.js` | `createGame()` — stavový stroj. | `books.js`, `maxims.js`, `alphabet.js`, `penalty.js` (cache reset). | 11. |
| `app.js` | Render loop + theme toggle + sound toggle + propagace stavu na zvuky. | Vše. | 12. (poslední) |

**Pravidlo:** Při přidávání nového scriptu se zařazuje dle závislostí. Data dříve než utility, utility dříve než komponenty, komponenty dříve než kontroler. `app.js` je vždy poslední.

### `docs/` (handoff dokumentace)
| Soubor | Účel |
|---|---|
| `PROJECT_CONTEXT.md` | Hlavní orientační dokument. Cíle, paleta, preference. |
| `SESSION_SUMMARY.md` | Co se v poslední session dělalo. |
| `CURRENT_STATE.md` | Aktuální stav projektu. |
| `NEXT_STEPS.md` | Prioritizovaný seznam dalších kroků. |
| `FILES_AND_MATERIALS.md` | Tento soubor. |
| `PROMPT_FOR_NEXT_MODEL.md` | Připravený prompt pro nové AI. |
| `DO_NOT_CHANGE.md` | Neměnné prvky. |

## Externí závislosti

| Závislost | Účel | Kde |
|---|---|---|
| **Cormorant Garamond** (Google Fonts) | Knižní/právní serif. | `index.html`, `<link>` v `<head>`. |
| **JetBrains Mono** (Google Fonts) | UI mono. | Tamtéž, ve stejném `<link>`. |
| **Web Audio API** | Generování zvuků. | Built-in v prohlížeči, `js/sound.js`. |
| **Web Animations API** | Hero animace. | Built-in v prohlížeči, `js/gameScreen.js`. |

**Žádná npm závislost.** Žádný build krok.

## Materiály mimo repo

### AI paměť (Claude Code)
Cesta: `C:\Users\merit\.claude\projects\C--Users-merit-OneDrive-Desktop-AI-Ostatn--pravnici-hra\memory\`

| Soubor | Účel |
|---|---|
| `MEMORY.md` | Rejstřík ostatních souborů paměti. |
| `feedback_git_email.md` | Pravidlo: git author v tomto projektu = `zlatenkak@gmail.com`. |
| `feedback_palette.md` | Pravidlo: paleta + povolená šedá. |
| `project_repo.md` | GitHub URL + Vercel postup. |
| `project_todo_endgame.md` | Závěrečná kontrola GOOD_FLASH. |

Pokud převezme práci nový Claude agent, tyto paměťové soubory se mu zobrazí automaticky v systémovém kontextu (skrz mechanismus `userMemory`).

### Global CLAUDE.md
Cesta: `C:\Users\merit\.claude\CLAUDE.md`

Obsahuje obecná pravidla uživatelky (bezpečnost, code style, git/deploy). **Tento projekt přepisuje `Git author email` na `zlatenkak@gmail.com`** (uloženo v project memory).

### GitHub repozitář
URL: `https://github.com/MlsnaMalina/neznalost-dobrych-knih-neomlouva`

Public. Branch `main`. Žádné jiné větve. Posledních ~10 commitů reflektuje vývoj v této session.

### Vercel projekt
Předpokládá se, že existuje a auto-deployuje z `main` — **NEPOTVRZENO uživatelkou**. Viz `NEXT_STEPS.md` bod 1.

## Materiály k případnému doplnění (chybějící informace)

| Co chybí | Pravděpodobně někde | Akce |
|---|---|---|
| Vercel projekt URL | Vercel dashboard uživatelky. | Zeptat se uživatelky / otevřít Vercel. |
| Vlastní logo / branding pro konferenci | Nepřibrálo se zatím. | Pokud je potřeba, zeptat se a doplnit do `index.html` headeru. |
| Zbývající latinské maximy (do 30) | Uživatelka v hlavě / poznámkách. | Vyžádat od uživatelky. |
| Konkrétní datum konference | Nezmíněno. | Pokud relevantní pro deadline, zeptat se. |

## Soubory, do kterých zasahovat OPATRNĚ

- **`js/maxims.js`** — texty maxim jsou pečlivě zvolené. Bez konzultace nepřepisovat.
- **`js/penalty.js`** — SVG geometrie postavy. Drobné úpravy OK, ale zachovat strukturu skupin (`part-hat`, `part-tie`, atd.) a třídy stage.
- **`styles.css` — sekce `Maxim hero`** — časování animace dohodnuto s uživatelkou (4400 ms, 3,5 s hold). Nesahat bez pokynu.
- **`index.html` — `<link>` na fonts** — pokud se přidává jiný font, ladit s knižním/mono kontrastem.

## Soubory, kam přidávat nový obsah

- **`js/books.js`** — nové tituly knih.
- **`js/maxims.js`** — nové maximy (po konzultaci).
- **`docs/*.md`** — nová dokumentace.
- **Nový komponentový soubor** v `js/` — pokud se přidává nová obrazovka / widget. Pak doplnit `<script>` do `index.html`.

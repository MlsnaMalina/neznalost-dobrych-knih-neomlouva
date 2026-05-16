# SESSION_SUMMARY.md

## Původní zadání
Vytvořit jednoduchou webovou mikrohru ve stylu hangmanu (bez šibenice) pro konferenci právníků o AI. Hráč hádá název odborné knihy. Postupně dostala podobu „právního dokumentu s technologickým akcentem", s eskalující SVG postavou, latinskými maximami a zvukovými efekty.

## Časový průběh session

### Fáze 1 — Základní postavení hry
Vytvořen kompletní skelet jako vanilla JS single-page aplikace bez build kroku:
- `index.html`, `styles.css`
- `js/`: `app.js`, `game.js`, `alphabet.js`, `books.js`, `keyboard.js`, `titleGuess.js`, `penalty.js`, `result.js`, `startScreen.js`, `gameScreen.js`
- Tokenizace názvu: CH jako digraf, diakritika rozlišena, mezery/interpunkce auto-zobrazeny.
- Stavy `start` / `playing` / `won` / `lost`.
- Náhodný výběr knihy (nikdy stejná dvakrát po sobě).
- Penalty: prozatím slotová dlaždice (placeholder).

### Fáze 2 — Paleta
- Uživatelka odmítla béžovou. Striktní 5-barev (bílá, černá, magenta, modrá, zelená).
- Po krátké diskuzi povolena podpůrná šedá (CSS proměnné `--ink-soft`, `--line-soft`).

### Fáze 3 — Git + GitHub + Vercel
- Lokální repo + první commit pod author `MlsnaMalina <zlatenkak@gmail.com>` (přepis global CLAUDE.md instrukce, která říká `k.schmiedtova@seznam.cz`).
- Push do `https://github.com/MlsnaMalina/neznalost-dobrych-knih-neomlouva` (public).
- Vercel připojení doporučeno přes web UI s presetem `Other`, bez build kroku.

### Fáze 4 — Reálné názvy knih
- Uživatelka dodala 18 reálných titulů z oblasti AI práva.
- Rozděleny do `easy` (9) a `hard` (9) podle délky/složitosti názvu.
- Edge case texty: ampersand `&`, číslice (`3D`, `2.`), em-dash `—`, závorky `(MiCA)` — vše se zobrazí automaticky díky tokenizeru.

### Fáze 5 — Velký redesign (úkoly 1–6 v zadání uživatelky)
Po sobě realizováno v tomto pořadí:

1. **Mikrokopie (Úkol 2)** — všechny UI texty přeloženy do právní hantýrky.
2. **Slovo k uhodnutí (Úkol 6)** — větší písmo, vlasové šedé linky místo plných, výraznější mezery.
3. **Typografie (Úkol 1)** — JetBrains Mono + Cormorant Garamond přes Google Fonts. Mono na UI, serif na obsah a klávesnici.
4. **Postava advokáta (Úkol 3)** — SVG s 6 fázemi, M/F varianta, CSS transitions přes `requestAnimationFrame` swap třídy `.stage-N`. Razítko ZAMÍTNUTO jako HTML overlay na výsledkové obrazovce.
5. **Latinské maximy (Úkol 4)** — `js/maxims.js`, pool 17 + 5 závěrečných, shuffle při startu, karta s NÁMITKA Č. X.
6. **Zvuky (Úkol 5)** — `js/sound.js`, Web Audio API, default vypnuto, ikona-přepínač v topbaru.

### Fáze 6 — Layout napravo + kulaté klávesy
- Postava přesunuta do bočního sloupce (vpravo), uprostřed jen slovo + klávesnice.
- Klávesy překresleny do kruhu 44×44 px se „psacího stroje" prstencem přes `box-shadow inset`.
- Mobile fallback: stack pod sebou, postava nahoře.

### Fáze 7 — Hero overlay maxim
- Při chybě se latinská maxima nejdřív zobrazí přes celou stránku velkým písmem.
- Po `requestAnimationFrame` se přes Web Animations API zmenší a doletí přesně do pozice malé karty pod soudcem (změřeno přes `getBoundingClientRect`).
- Iterace č. 2: pozadí přepnuto na poloprůhledné (`--hero-veil`, 82% bg + 2px blur), aby klávesnice prosvítala.
- Iterace č. 3: prodloužen hold velkého textu na ~3,5 s (celkem 4400 ms).

### Fáze 8 — Drobnost (modré odhalené)
- Odhalená písmena v hádaném titulu nyní vykreslena modrou `#4072ad` (původně černou).

## Zvažované alternativy

- **Postava: cartoon vs. silueta.** Zvolen kompromis — geometrické SVG s pleťovou výjimkou, ale bez dětských znaků (žádné velké oči, žádné růžové tváře).
- **Razítko ZAMÍTNUTO:** zvažováno přes herní obrazovku při 6. chybě. Rozhodnuto pro výsledkovou obrazovku, aby hráč viděl všech 5 mezifází postavy a pak teprve razítko.
- **Zvuky:** zvažována externí knihovna (Tone.js). Zvoleno čisté Web Audio API generování, aby žádná externí závislost.
- **Hero overlay vs. malá karta:** první iterace ukazovala jen malou kartu. Uživatelka po review chtěla velký moment + zmenšení → implementace přes Web Animations API.

## Padlá rozhodnutí
- Paleta: 5 barev + podpora šedé + 2 výjimky v SVG postavě.
- Git author email: `zlatenkak@gmail.com`.
- Vanilla JS, žádné externí knihovny.
- Maximy: pool 17 nyní, dorovnání později uživatelkou.
- Tlačítko po prohře: „Podat odvolání", po výhře: „Nové řízení".
- Razítko ZAMÍTNUTO jen na výsledkové obrazovce.
- Zvuky default OFF.

## Problémy a jejich řešení

| Problém | Řešení |
|---|---|
| CSS transitions na SVG postavě nefungovaly, protože gameScreen.js destruoval root při každém renderu. | Cache instance SVG napříč rendery (`_cachedWrap`), class swap odložený do `requestAnimationFrame`. |
| Hero overlay přes celou stránku potřeboval přesné cílení malé karty. | `getBoundingClientRect()` měření po layoutu + Web Animations API s dynamickými `translate`/`scale`. |
| Backdrop hero blokoval pohled na klávesnici. | `--hero-veil` (82% alpha) + `backdrop-filter: blur(2px)`. |
| 3,5 s hold textu. | Klíčové offsety přerovnány: entry 0–7 %, hold 7–86 %, shrink 86–100 % na 4400 ms. |
| Šedá v původně striktní paletě. | Uživatelka povolila po krátké diskuzi. Zavedeny tokeny `--ink-soft`, `--line-soft`. |
| Pleť a kávová skvrna. | Schválené výjimky (`#e6c9a8`, `#6b3a1f`). |

## Otevřené body (po session 1)
- Kontrola GOOD_FLASH (v `gameScreen.js`) — zachovat / odstranit? Plánovaná na úplný konec hry.
- Pool maxim: doplnění zbývajících (mezery 3–8, 14–15, 17, 20–21, 29–30).
- Vercel: ověřit, že je projekt skutečně nalinkovaný a auto-deployuje.
- Postavička při velmi dlouhých názvech může vizuálně přebíjet sloupec — ale to nikdo z uživatelky zatím nehlásil.
- Razítko ZAMÍTNUTO i pro 6. „pool" maximu? (zatím se 6. pool-maxima neukáže — místo ní FINAL_MAXIM.)

---

# SESSION 2 (datum: 2026-05-14 → 2026-05-16)

## Co se v session 2 dělalo

### Rozšíření poolu maxim (Úkol 1 ze 3 dokončen)
Uživatelka přinesla nový zadávací prompt rozdělený na 3 úkoly:

1. **ÚKOL 1 — Rozšíření herního poolu** ✅ HOTOVO.
   - Tier struktura v `MAXIMS_POOL` zrušena, sloučeno do plochého pole.
   - Přidáno **17 nových maxim** (6 Harry Potter + 6 Pán prstenů/Hobit + 5 Star Wars).
   - Celkem nyní **34 herních maxim**.
   - Organizační komentáře v kódu (Klasické / HP / LOTR / SW), ale technicky jeden plochý pool.

2. **ÚKOL 2 — Přidat 1 novou závěrečnou maximu** ⏸ NEDOKONČENO.
   - Text: *„Hoc non est liber quem quaeris."* / „Toto není kniha, kterou hledáš." (reference na Obi-Wana).
   - Čeká na pokyn pokračovat (uživatelka session ukončila po Úkolu 1).

3. **ÚKOL 3 — Vytvořit `TIMEOUT_MAXIMS` pool** ⏸ NEDOKONČENO.
   - Zatím jen datová struktura, **NE samotný 8s timeout** (ten bude samostatným promptem).
   - 9 maxim připravených v zadávacím promptu (viz `NEXT_STEPS.md`, sekce „Timeout maximy").
   - Helper `pickTimeoutMaxim` analogický k `pickFinalMaxim`.

### Drobné otevřené rozhodnutí
- V přidané maximě **„Mellon — amice, intra."** byla zadána obyčejná pomlčka `-`, ale použit em-dash `—` (ladí s typografií zbytku hry, ale to bylo autonomní rozhodnutí). Uživatelka to **nepotvrdila ani nezamítla** — počkat na verdikt v další session.

## Otevřené po session 2
- Úkol 2 (1 nová závěrečná maxima)
- Úkol 3 (TIMEOUT_MAXIMS pool, **ne** samotná timeout funkcionalita)
- Verdikt k em-dash vs. obyčejné pomlčce u maximy „Mellon".
- Vše z „Otevřené body (po session 1)" zůstává v platnosti.

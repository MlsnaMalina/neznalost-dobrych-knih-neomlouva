# DO_NOT_CHANGE.md

Tento dokument je seznam **neměnných prvků**. Pokud něco z tohoto seznamu chceš změnit, **nejdřív se zeptej uživatelky.**

---

## SCHVÁLENÁ ROZHODNUTÍ — neměnit

### Paleta
- Hlavní barvy: bílá `#ffffff`, černá `#000000`, magenta `#b11e54`, modrá `#4072ad`, zelená `#98c451`.
- Podpůrná šedá: `--ink-soft` (light `#6b6b6b`, dark `#9a9a9a`), `--line-soft` (light `#cfcfcf`, dark `#3a3a3a`).
- Hero veil: `--hero-veil` (light `rgba(255,255,255,0.82)`, dark `rgba(0,0,0,0.82)`).
- Schválené výjimky v SVG postavě: pleť `#e6c9a8`, kávová skvrna `#6b3a1f`.

**Nikdy nepřidávat** béžovou, žlutou, fialovou ani žádnou jinou barvu. Pokud designově potřebuješ akcentní jinou barvu, **zeptej se**.

### Mikrokopie (právní hantýrka)
Tyto formulace jsou závazné:
- „Zahájit řízení" (NE „Zahájit hru")
- „Stáhnout žalobu" (NE „Vzdát titul")
- „Nové řízení" (NE „Nová hra")
- „Podat odvolání" (= tlačítko po prohře)
- „Opravné prostředky: N / 6" (= zbývající pokusy)
- „Předložte důkaz." (= výchozí pokyn)
- „Vyloučené důkazy:" (= použitá písmena)
- „Noční služba" / „Denní služba" (= dark/light toggle)
- „— Námitka č. X —" (= štítek karty maximy)
- „Rozsudek: vyhráno. Případ uzavřen." (= verdikt po výhře)
- „Tribunál uznává vaši erudici v oblasti AI práva." (= podnadpis po výhře)
- „Rozsudek: propadl(a) jste." (= verdikt po prohře)
- „ZAMÍTNUTO" (= razítko)

Nepřepisuj žádný z těchto textů. Pokud chceš jiný tón, **zeptej se**.

### Latinské maximy
Texty v `js/maxims.js` jsou pečlivě zvolené uživatelkou. **Nikdy nepřepisovat** latinu ani český překlad. Lze pouze **přidávat** nové (po schválení uživatelkou).

Nevymýšlej vlastní latinské maximy — i kdyby byly „lepší". Tón konference je pečlivě nastavený.

### Postava advokáta — výtvarná koncepce
- 6 fází + razítko ZAMÍTNUTO: klobouk → kravata → káva → spis → talár → finále (vždy v tomto pořadí).
- Klobouk = biret (rectangulární, ne kovbojský).
- Talár = černý plný plášť s bílým kolárkem.
- Kravata = vínová (magenta z palety).
- Spodní prádlo s motivem `§`.
- M/F varianta — náhodně losovaná při startu, NE volitelná hráčem.
- Žádný cartoon, žádné velké oči, žádný roztomilý výraz.

### Pravidla hry
- 6 chybných pokusů, ne víc, ne míň (`MAX_MISTAKES` v `js/game.js`).
- CH je samostatné písmeno (digraph).
- Diakritika rozlišena (Á ≠ A).
- Mezery, interpunkce, číslice, závorky a další non-letter znaky se zobrazují automaticky.
- Náhodný výběr knihy nikdy nevybere stejnou dvakrát po sobě.

### Časování hero animace
- Celkem 4400 ms.
- Entry 0–7 %.
- Hold 7–86 % (~3500 ms — klíčové, aby uživatel maximu přečetl).
- Shrink 86–100 %.

Nezkracovat hold pod 3,5 s bez výslovného pokynu uživatelky.

### Architektura
- Vanilla JS, žádný build krok, žádné moduly (vše přes `window.*`).
- Žádné externí JS knihovny (pouze Google Fonts).
- Soubory komponent oddělené.
- Komentáře v češtině.

### Git / GitHub / Vercel
- **Author email v projektu: `zlatenkak@gmail.com`** (NE `k.schmiedtova@seznam.cz` z global CLAUDE.md).
- Author name: `MlsnaMalina`.
- **Push do `main` JEN na explicitní pokyn uživatelky** („pushni", „nahraj", apod.).
- Vždy commit, pak ZEPTAT SE na push.
- Vercel preset `Other`, žádný build command.

---

## VYŽADUJE POTVRZENÍ PŘED ZMĚNOU

Tyto věci nejsou striktně zakázány, ale potřebují schválení:

- **Velikost SVG postavy** (200×280 px desktop, 160×224 mobil) — schválené, ale lze diskutovat.
- **Šířka bočního sloupce** (240 px) — schválené, lze diskutovat.
- **Hover stavy tlačítek a kláves** — modrá `--accent`.
- **Razítko ZAMÍTNUTO** se zobrazuje jen na výsledkové obrazovce, ne při 6. chybě. Lze přesunout, ale je to designové rozhodnutí.
- **Default OFF zvuků.** Pokud uživatelka řekne „ať jsou defaultně zapnuté", změnit. Jinak ne.
- **Pole `GOOD_FLASH`** v `gameScreen.js` (4 hlášky po správném písmenu) — uživatelka chce ověřit na konci, jestli zachovat. **NIKDY nemazat bez konzultace.**
- **Mapování zvuků na stavy** (`fireSoundFor` v `app.js`) — funguje, ale lze ladit hlasitost / barvu.

---

## STRUKTURA SOUBORŮ — neměnit bez konzultace

- Rozdělení `js/` na komponenty (každá obrazovka, každý widget).
- `index.html` v rootu.
- `styles.css` v rootu (žádné CSS-in-JS, žádné CSS moduly).
- `docs/` pro handoff dokumenty.

Pokud chceš sloučit / rozdělit soubory, **zeptej se**.

---

## CO NIKDY NEDĚLAT

1. **Nikdy `git push --force`** na main bez výslovného souhlasu.
2. **Nikdy `git reset --hard`** bez backupu.
3. **Nikdy** mazat commit historii.
4. **Nikdy** přepisovat texty maxim, mikrokopií, nebo verdikt hlášek.
5. **Nikdy** přidávat externí JS závislost přes CDN nebo npm bez konzultace.
6. **Nikdy** dělat větší designovou změnu (font, layout, paleta) bez explicitního pokynu.
7. **Nikdy** přidávat trackery, analytiku, nebo telemetrii.
8. **Nikdy** ukládat osobní data hráče (jméno, e-mail) — hra je anonymní.
9. **Nikdy** opouštět striktní paletu bez schválení.
10. **Nikdy** používat `type: any` v JS (zatím není TypeScript, ale platí pro budoucí migraci).

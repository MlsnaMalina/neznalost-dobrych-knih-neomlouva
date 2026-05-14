# PROJECT_CONTEXT.md

## Název projektu
**Neznalost dobrých knih neomlouvá**

## Stručný popis
Webová mikrohra — varianta klasické šibenice bez motivu šibenice. Hráč hádá název odborné knihy z oblasti AI práva po písmenech české abecedy. Při chybě eskaluje SVG postava advokáta (klobouk → kravata → káva → spis → talár → razítko ZAMÍTNUTO) a každá chyba zobrazí latinskou maximu (parodii právních frází) — nejdřív přes celou stránku, pak zmenšenou do karty pod postavou.

## Cíl projektu
Soutěžní hříčka na **konferenci právníků o umělé inteligenci**, ke hraní během přestávek. Cíl: zapamatovatelný moment, právnický humor, ne edukace.

## Cílová skupina
Právníci ~ 40 let, milovníci Star Wars a PlayStationu (informace dodaná uživatelkou). Tón: suchý humor à la Black Books / Better Call Saul. Důstojná postava, kterou potkávají nedůstojné věci. **Žádný cartoon, žádné dětské pojetí, žádné morbidní pojetí (žádná šibenice).**

## Celkový směr a záměr
- Působit jako **právní dokument s technologickým akcentem** (ne jako technologický web s právní polevou).
- Knižní serif (Cormorant Garamond) pro obsah × monospace (JetBrains Mono) pro UI ovládací prvky.
- Mikrokopie striktně v **právní hantýrce** (viz DO_NOT_CHANGE.md).
- Náhodnost: kniha, gender postavy, výběr maxim — vše losováno při startu hry, neopakuje se v jednom kole.

## Důležité preference uživatele

### Paleta (POVINNÁ)
- **bílá** `#ffffff`
- **černá** `#000000`
- **magenta** `#b11e54` (prohra, špatné písmeno, akcent)
- **modrá** `#4072ad` (CTA, hover, odhalená písmena v titulu)
- **zelená** `#98c451` (výhra, správné písmeno)
- **podpůrná šedá** — CSS proměnné `--ink-soft`, `--line-soft` (sekundární text, vlasové linky)
- **dvě výjimky** v SVG postavě: pleťová `#e6c9a8` (obličej, krk, nohy), kávová `#6b3a1f` (skvrna na taláru) — schválené, viz DO_NOT_CHANGE.

Žádné jiné barvy. Béžová byla výslovně odmítnuta a odstraněna.

### Tón mikrokopií
Všechny UI texty v právní hantýrce:
- „Zahájit řízení", „Stáhnout žalobu", „Nové řízení", „Podat odvolání"
- „Opravné prostředky" (= zbývající pokusy)
- „Předložte důkaz" (= výchozí pokyn)
- „Vyloučené důkazy" (= použitá písmena)
- „Noční služba" / „Denní služba" (= dark/light)
- „NÁMITKA Č. X" (= štítek na kartě maximy)
- Verdikt po výhře: „Rozsudek: vyhráno. Případ uzavřen." + podnadpis „Tribunál uznává vaši erudici v oblasti AI práva."
- Verdikt po prohře: „Rozsudek: propadl(a) jste."

Latinské maximy mají **český překlad** povinně. Maximy jsou pečlivě zvolené a **bez konzultace se nemění** (viz DO_NOT_CHANGE).

### Vizuální požadavky
- Knižní atmosféra (serif pro obsah).
- Doodle / lehký, ale ne dětský.
- Profesionální, elegantní.
- Responzivní mobil + desktop (předpokládá se i konferenční projektor).
- Light + Dark mode přepínatelné, persistence v localStorage.
- Postava advokáta **napravo**, slovo k uhodnutí a klávesnice **uprostřed**. Mobil: postava nahoře, klávesnice dole.
- Klávesy kulaté ve stylu psacího stroje (kovový vnitřní prstenec přes `box-shadow inset`).

### Technické preference
- **Vanilla JS bez build kroku.** Žádné externí knihovny (kromě Google Fonts).
- Žádný backend, stav v localStorage / paměti.
- Soubory komponent oddělené (penalty, keyboard, titleGuess, …).
- Komentáře v češtině.
- Žádné `type: any` nebo cokoli, co by porušovalo globální pravidla uživatele (viz `C:\Users\merit\.claude\CLAUDE.md`).
- **Git author email v tomto projektu: `zlatenkak@gmail.com`** (NE výchozí z global CLAUDE.md).

## Co je zásadní zachovat
- Striktní paletu (5 barev + šedá + 2 schválené pleťové výjimky).
- Mikrokopie v právní hantýrce (přesné formulace, bez parafrází).
- Strukturu komponent (jeden soubor = jedna „komponenta").
- Logiku hry (české písmeno = jedno tlačítko, CH digraf, diakritika rozlišena, mezery/interpunkce automaticky).
- Náhodný výběr knihy bez opakování za sebou.
- Push do `main` POUZE na explicitní pokyn uživatelky.
- Hero animaci maxim (4400 ms, 3,5 s velký text, pak zmenšení do karty).

## Co bylo výslovně odmítnuto
- Béžové pozadí.
- Šibenice / morbidní motivy.
- Dětský / kreslený styl postavy.
- Externí knihovny (Tone.js, animační knihovny apod. — nezavádět bez konzultace).
- Automatický commit / push (nikdy bez výslovného pokynu).
- Změna struktury souborů bez konzultace.
- „Vylepšování" textů latinských maxim bez konzultace.

## Limity a rizika
- **Závěrečná kontrola BAD_FLASH**: V `gameScreen.js` existuje pole `GOOD_FLASH` (krátké hlášky po správném písmenu). Pole `BAD_FLASH` bylo zrušeno ve prospěch maxim. Po dokončení projektu chce uživatelka ověřit, jestli GOOD_FLASH zachovat — viz `~/.claude/projects/.../memory/project_todo_endgame.md`.
- **Pool maxim není kompletní** — uživatelka v zadání mluvila o 30 maximách, ale dodala 17 (čísla s mezerami: 1, 2, 9–13, 16, 18, 19, 22–28). Až je doplní, jen je přidá do `js/maxims.js`.
- **6. chyba**: Hra okamžitě přejde na výsledek (status=lost), 6. „pool" maxima se nikdy nezobrazí jako hero. Místo ní hraje statická závěrečná maxima z `FINAL_MAXIMS` na výsledku. Pokud chce uživatelka i 6. pool-maximu jako hero, je to nutné explicitně doplnit.
- **Vercel deploy**: Repo je propojené s GitHubem (`MlsnaMalina/neznalost-dobrych-knih-neomlouva`, public). Vercel deploy probíhal jako auto-deploy z `main` — ověřit, že je projekt v Vercelu skutečně nalinkovaný (uživatelka informaci nepotvrdila explicitně).
- **`.gitattributes` chybí**: Git během commitů hlásí `LF will be replaced by CRLF` (Windows). Není to kritické, ale `.gitattributes` s `* text=auto eol=lf` by warning odstranil.

# PROMPT_FOR_NEXT_MODEL.md

## Použití
Zkopíruj obsah níže do nové AI konverzace (Claude Code, nebo jakýkoli jiný model s file system přístupem k projektu). Funguje jako self-contained handoff.

---

## PROMPT (kopíruj od sem)

Přebíráš rozpracovaný projekt **Neznalost dobrých knih neomlouvá** — webovou mikrohru pro konferenci právníků o AI, varianta hangmanu bez šibenice. Uživatelka hru testuje, postupně mi zadávala iterace, a chce v práci pokračovat. Hra existuje a běží.

**Před jakoukoli změnou udělej toto:**

1. Přečti si v adresáři `docs/` všech sedm dokumentů v tomto pořadí:
   - `PROJECT_CONTEXT.md` — co je projekt, paleta, tón, cílovka
   - `CURRENT_STATE.md` — co aktuálně funguje, struktura souborů, slabá místa
   - `SESSION_SUMMARY.md` — co se dělo v poslední session
   - `DO_NOT_CHANGE.md` — KRITICKÉ. Co nesměj měnit bez konzultace
   - `NEXT_STEPS.md` — prioritizovaný plán
   - `FILES_AND_MATERIALS.md` — kde co najdeš
   - `PROMPT_FOR_NEXT_MODEL.md` — tento soubor

2. **Po přečtení** mi krátce shrň (max 8 odrážek):
   - co je projekt zač
   - jaká je paleta a tón
   - co je hotové
   - co stojí v cestě dalším krokům
   - jaké jsou top 3 priority z `NEXT_STEPS.md`

3. **Po mém potvrzení**, že shrnutí sedí, mi navrhni:
   - na čem chceš začít pracovat (jeden konkrétní krok z `NEXT_STEPS.md` nebo nový pokyn ode mě)
   - jak ten krok rozdělíš na dílčí úkoly
   - kde přesně budeš zasahovat (které soubory)

4. **Teprve potom začni kódovat.**

## Pravidla práce v tomto projektu

- **Paleta je striktní.** Bílá, černá, `#b11e54`, `#4072ad`, `#98c451` + podpůrná šedá (proměnné `--ink-soft`, `--line-soft`) + 2 schválené výjimky v SVG postavě (`#e6c9a8` pleť, `#6b3a1f` káva). Žádné jiné barvy.
- **Mikrokopie v právní hantýrce.** Nepřepisovat formulace v `DO_NOT_CHANGE.md`.
- **Latinské maximy nepřepisovat.** Lze pouze přidávat (po mém schválení).
- **Vanilla JS, žádný build krok, žádné externí knihovny** (jen Google Fonts).
- **Komentáře v češtině.**
- **Git author email v tomto projektu: `zlatenkak@gmail.com`** (NE výchozí z global CLAUDE.md).
- **Nikdy push do `main` bez mého výslovného pokynu** („pushni" / „nahraj"). Commit OK, push až s povolením.
- **Po každé větší změně se zastav a ukaž mi výsledek**, ať to můžu zkontrolovat v náhledu.
- **Pokud si nejsi jistý nějakým detailem, zeptej se** — nehádej.

## Co teď chci

Začni tím, že si přečteš dokumenty a vrátíš se s krátkým shrnutím + návrhem dalšího kroku. Až potvrdím, půjdeš pracovat.

(Konec promptu — odsud začni reagovat.)

---

## NEJRYCHLEJŠÍ MOŽNÝ START PRO DALŠÍ SESSION

Pro nový model — minimální checklist, co udělat hned na začátku:

1. **Otevři `docs/PROJECT_CONTEXT.md`** — 2 minuty čtení. Pochopíš, o co jde, paletu a tón.
2. **Otevři `docs/DO_NOT_CHANGE.md`** — 2 minuty. Zapamatuj si, co nesahej.
3. **Skenuj `docs/CURRENT_STATE.md`** — strukturu souborů a co funguje.
4. **Skenuj `docs/NEXT_STEPS.md`** — co dělat. Top 3 priority jsou: (1) ověřit Vercel deploy, (2) end-to-end test na cílovém zařízení, (3) test čitelnosti z dálky.
5. **Zkontroluj `git log -10 --oneline`** v adresáři projektu — pochopíš poslední iterace.
6. **Otevři `index.html`** v prohlížeči nebo v Launch preview — vizuálně si potvrď, co aktuální stav vypadá.
7. **Otevři `js/game.js`** — porozumíš stavovému stroji za 1 minutu.
8. **Otevři `js/gameScreen.js`** — chápeš render herní obrazovky a hero animaci maxim.
9. **Než cokoli změníš**, ukaž uživatelce krátké shrnutí toho, co jsi pochopil, a počkej na potvrzení.
10. **Při první commit zprávě** zkontroluj, že běží jako `MlsnaMalina <zlatenkak@gmail.com>` (`git log -1 --format='%an <%ae>'`).

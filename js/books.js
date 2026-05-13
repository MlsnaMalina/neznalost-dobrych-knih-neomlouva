/* Datová sada knih pro konferenci o AI právu.
   Každá kniha: { id, title, author, year?, note?, difficulty: "easy" | "hard" }
   Tokenizer (alphabet.js) zobrazí automaticky: mezery, čárky, dvojtečky,
   pomlčky, závorky, znaky & a — i číslice. Hráč hádá jen písmena. */
window.booksData = [
  // -------- LEHČÍ TITULY (kratší / jednodušší) --------
  {
    id: "book-01",
    title: "Programování pro právníky",
    author: "Lukáš Michna",
    difficulty: "easy"
  },
  {
    id: "book-02",
    title: "Umělá inteligence & právo",
    author: "Linda Kolaříková, Filip Horák",
    difficulty: "easy"
  },
  {
    id: "book-03",
    title: "Komentář zákona o bankovní identitě",
    author: "Markéta Perháčová, Štěpán Veselský",
    difficulty: "easy"
  },
  {
    id: "book-04",
    title: "Komentář nařízení eIDAS",
    author: "Tomáš Lechner",
    difficulty: "easy"
  },
  {
    id: "book-05",
    title: "Právo ICT, 2. vydání",
    author: "Radim Polčák a kol.",
    difficulty: "easy"
  },
  {
    id: "book-06",
    title: "Trestní odpovědnost umělé inteligence",
    author: "Jakub Charvát",
    difficulty: "easy"
  },
  {
    id: "book-07",
    title: "Komentář k nařízení o kryptoaktivech (MiCA)",
    author: "Marek Bočánek",
    difficulty: "easy"
  },
  {
    id: "book-08",
    title: "Blockchain a dematerializace cenných papírů",
    author: "Bohdan Zubač",
    difficulty: "easy"
  },
  {
    id: "book-09",
    title: "Komentář zákona o elektronických komunikacích",
    author: "Zuzana Chudomelová, Marek Beran, Vratislav Jadrný, Šárka Němečková, Jaromír Novák",
    difficulty: "easy"
  },

  // -------- KOMPLIKOVANĚJŠÍ TITULY (delší / složitější) --------
  {
    id: "book-10",
    title: "Umělá inteligence z pohledu antidiskriminačního práva a GDPR",
    author: "Andrej Lobotka",
    difficulty: "hard"
  },
  {
    id: "book-11",
    title: "Vymahatelnost práva pomocí online řešení sporů",
    author: "Pavel Loutocký",
    difficulty: "hard"
  },
  {
    id: "book-12",
    title: "Výjimky a omezení autorského práva v prostředí digitálních sítí",
    author: "Matěj Myška",
    difficulty: "hard"
  },
  {
    id: "book-13",
    title: "Umělá inteligence jako technologická výzva autorskému právu",
    author: "Jan Zibner",
    difficulty: "hard"
  },
  {
    id: "book-14",
    title: "Kybernetický bezpečnostní incident 3D: IT, právo a compliance",
    author: "František Nonnemann, Vlastimil Červený, Dominik Vítek",
    difficulty: "hard"
  },
  {
    id: "book-15",
    title: "Postavení spotřebitele v oblasti distribuce pojištění v digitální době",
    author: "Tomáš Ryza",
    difficulty: "hard"
  },
  {
    id: "book-16",
    title: "Právní aspekty umělé inteligence — výzvy a příležitosti",
    author: "Jan Hořeňovský, Klára Zikmundová, Štěpán Knetl, Viktor Gazda",
    difficulty: "hard"
  },
  {
    id: "book-17",
    title: "Pojištění odpovědnosti z provozu autonomních vozidel",
    author: "Maria Hořavová",
    difficulty: "hard"
  },
  {
    id: "book-18",
    title: "Právo na informační sebeurčení a nositelná elektronika",
    author: "Jakub Klodwig",
    difficulty: "hard"
  }
];

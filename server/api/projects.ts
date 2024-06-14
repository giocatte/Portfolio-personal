export default defineEventHandler((event) => {
  return {
    projects: [
      {
        id: 1,
        Title: "Ethos Web Studio",
        Description: {
          en: "A simple Web Agency created in May 2023 by me and a friend of mine.\nIts services mainly include the creation or modernization of Websites for small local companies, taking care of Brand Identity, SEO, Web Marketing and content management.",
          it: "Una semplice Web Agency creata nel Maggio 2023 da me ed un mio amico.\nEssa offre principalmente nei suoi servizi la creazione o modernizzazione di Siti Web per piccole aziende locali, curando Brand Identity, SEO, Web Marketing e gestione contenuti.",
        },
        lang: "Vue 3",
        year: 2023,
        imgUrl: "Ethos.png",
        WebUrl: "https://ethoswebstudio.it",
      },
      {
        id: 2,
        Title: "La Bottega Del Cicchetto",
        Description: {
          en: "A showcase site for a local bar, as well as the first project commissioned by a client.\nProject created first with Figma (like everyone else) and then patiently coded with appropriate changes requested by the customer.",
          it: "Un Sito Vetrina per un bar locale, nonchè primo progetto commissionato da un cliente.\nProgetto creato prima con Figma (come tutti) e in seguito codificato pazientemente con opportune modifiche richieste dal cliente.",
        },
        lang: "Vue 3",
        year: 2023,
        imgUrl: "BDC.png",
        WebUrl: "https://labottegadelcicchetto-demo.web.app/",
      },
      {
        id: 3,
        Title: "Portfolio",
        Description: {
          en: "English Description and Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          it: "Descrizione Italiana e Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        lang: "Nuxt 3",
        year: 2024,
        imgUrl: "Portfolio.png",
        WebUrl: "",
      },
      {
        id: 4,
        Title: "Blog",
        Description: {
          en: "English Description and Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          it: "Descrizione Italiana e Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        lang: "React 4",
        year: 2024,
        imgUrl: "",
        WebUrl: "",
      },
      {
        id: 5,
        Title: "HomeLab",
        Description: {
          en: "English Description and Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          it: "Descrizione Italiana e Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        lang: "Docker",
        year: 2024,
        imgUrl: "",
        WebUrl: "",
      },
    ],
  };
});

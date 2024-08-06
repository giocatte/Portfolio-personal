export default defineEventHandler((event) => {
  return {
    projects: [
      {
        id: 1,
        Title: "Ethos Web Studio",
        Description: {
          en: "A Web Agency created in May 2023 by me and a friend of mine.\nIts services mainly include the creation or modernization of Websites for small local companies, taking care of Brand Identity, SEO, Web Marketing and content management.",
          it: "Una Web Agency creata nel Maggio 2023 da me ed un mio amico.\nEssa offre principalmente nei suoi servizi la creazione o modernizzazione di Siti Web per piccole aziende locali, curando Brand Identity, SEO, Web Marketing e gestione contenuti.",
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
          en: "A Portfolio Website created via Nuxtjs that you are visiting right now, you can find the project's code on my <a href='https://github.com/giocatte/Portfolio-personal' target='_blank' style='text-decoration: underline'>Github page</a>!",
          it: "Un Sito Web Portfolio creato tramite Nuxtjs che stai visitando in questo momento, puoi trovare il codice del progetto nella mia <a href='https://github.com/giocatte/Portfolio-personal' target='_blank' style='text-decoration: underline'>pagina Github</a>!",
        },
        lang: "Nuxt 3",
        year: 2024,
        imgUrl: "Portfolio.png",
        WebUrl: "",
      },
      {
        id: 4,
        Title: "HomeLab",
        Description: {
          en: "A self-hosted HomeLab created with the help of CasaOS, a Docker-based OS on my Linux server.\nIt offers various useful services such as: Media Server, VPN Server, TorrentClient, Private Cloud etc...",
          it: "Un HomeLab self-hosted creato con l'ausilio di CasaOS, un SO basato su Docker sul mio server Linux.\nOffre svariati servizi utili come: Media Server, VPN Server, TorrentClient, Cloud Privato ecc...",
        },
        lang: "Docker",
        year: 2024,
        imgUrl: "HomeLab.png",
        WebUrl: "https://i.ibb.co/4TJnPHd/192-168-0-245-90-1.png",
      },
      {
        id: 5,
        Title: "Blog",
        Description: {
          en: "A Blog created with Nextjs/React, currently under construction.",
          it: "Un Blog creato con Nextjs/React, attualmente in costruzione.",
        },
        lang: "Nextjs",
        year: 2024,
        imgUrl: "",
        WebUrl: "",
      },
    ],
  };
});

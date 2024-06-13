export default defineEventHandler((event) => {
  return {
    projects: [
      {
        id: 1,
        Title: "Ethos Web Studio",
        Description: {
          en: "English Description and Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          it: "Descrizione Italiana e Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        lang: "Vue 3",
        imgUrl: "Ethos.png",
        WebUrl: "https://ethoswebstudio.it",
      },
      {
        id: 2,
        Title: "La Bottega Del Cicchetto",
        Description: {
          en: "English Description and Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          it: "Descrizione Italiana e Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        lang: "Vue 3",
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
        imgUrl: "",
        WebUrl: "",
      },
      {
        id: 6,
        Title: "Project N.6",
        Description: {
          en: "English Description and Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          it: "Descrizione Italiana e Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        imgUrl: "",
        WebUrl: "",
      },
    ],
  };
});

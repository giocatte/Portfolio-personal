export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  escapeHtml: false,
  warnHtmlMessage: false,
  messages: {
    en: {
      welcome: "Welcome",
      HiIam: "Hi, I am",
      MeShortDesc: `<span class="text-palette-accent_1">Full Stack</span> Developer, passionate about <span class="text-palette-accent_1">Front End</span> coding.`,
      About: "About",
      CodeIP: "Coding in progress..",
      Projects: "Projects"
    },
    it: {
      welcome: "Benvenuto",
      HiIam: "Ciao, sono",
      MeShortDesc: `<span class="text-palette-accent_1">Full Stack</span> Developer, appassionato in <span class="text-palette-accent_1">Front End</span> coding.`,
      About: "Su di",
      CodeIP: "Scrivendo codice..",
      Projects: "Progetti"
    },
  },
}));

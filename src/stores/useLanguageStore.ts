import { defineStore } from "pinia";
import es from "../assets/languages/es.json";
import en from "../assets/languages/en.json";

export const useLanguageStore = defineStore("language", {
  state: () => ({
    language: es, // Estado inicial en español
    btnLang: "es", // Estado inicial del botón en español
  }),
  actions: {
    handleLanguage(lang: string) {
      switch (lang) {
        case "es":
          this.language = es;
          this.btnLang = "es";
          break;
        case "en":
          this.language = en;
          this.btnLang = "en";
          break;
      }
    },
  },
});

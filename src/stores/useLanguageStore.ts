import { defineStore } from "pinia";
import { languages } from "../assets/languages/data.json";

export const useLanguageStore = defineStore("language", {
  state: () => ({
    language: languages.spanish,
    btnLang: languages.spanish.code, // Estado inicial en español
  }),

  actions: {
    handleLanguage(lang: string) {
      switch (lang) {
        case "es":
          this.language = languages.spanish;
          this.btnLang = languages.spanish.code;
          break;
        case "en":
          this.language = languages.english;
          this.btnLang = languages.english.code;
          break;
      }
    },
  },
});

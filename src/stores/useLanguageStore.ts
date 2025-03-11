import { defineStore } from "pinia";
import { languages } from "../assets/languages/data.json";

export const useLanguageStore = defineStore("language", {
  state: () => ({
    language: languages.spanish,
    btnLang: languages.spanish.code, // Estado inicial en español
  }),

  actions: {
    handleLanguage(lang: string) {
      lang === "es" ? this.setLanguage(languages.spanish) : this.setLanguage(languages.english);
    },
    setLanguage(language: typeof languages.spanish | typeof languages.english) {
      this.language = language;
      this.btnLang = language.code;
    },
  },
});

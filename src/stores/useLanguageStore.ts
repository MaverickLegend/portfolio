import { defineStore } from "pinia";
import en from "../assets/data/english.json";
import es from "../assets/data/spanish.json";
import type { Language } from "../assets/data/data.interfaces";

export const useLanguageStore = defineStore("language", {
  state: () => ({
    languages: {
      en: en as Language,
      es: es as Language,
    },
    current: es as Language,
  }),
  getters: {
    content: (state) => state.current.content,
    presentation: (state) => state.current.content.presentation,
    sections: (state) => state.current.content.sections,
    projects: (state) => state.current.content.projects.items,
    certificates: (state) => state.current.content.certificates,
    skills: (state) => state.current.content.skills,
    about: (state) => state.current.content.about,
    contact: (state) => state.current.content.contact,
    cv: (state) => state.current.cv,
  },
  actions: {
    setLanguage(code: "en" | "es") {
      this.current = this.languages[code];
    },
  },
});

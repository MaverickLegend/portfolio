import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: localStorage.getItem("theme") || "light",
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      setTimeout(() => {
        document.documentElement.setAttribute("data-theme", this.theme);
      }, 500);
      localStorage.setItem("theme", this.theme);
    },
  },
});

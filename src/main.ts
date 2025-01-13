import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "./assets/styles/main.scss";

const app = createApp(App);

app.use(router);
app.use(createPinia());

const theme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", theme);

app.mount("#app");

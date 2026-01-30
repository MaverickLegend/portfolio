import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "./assets/styles/main.scss";

import observeDirective from "./directives/intersectionObserver";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.directive('observe', observeDirective);

app.mount("#app");

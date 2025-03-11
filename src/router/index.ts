import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AboutComponent from "../components/AboutComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: AboutComponent,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/AboutComponent.vue"),
  },
  {
    path: "/certificates",
    name: "Certificates",
    component: () => import("../components/CertificatesComponent.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../components/ContactComponent.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

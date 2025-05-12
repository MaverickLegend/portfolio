import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/about",
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
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../components/ProjectsComponent.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return {
      el: ".content",
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;

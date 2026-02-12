import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue";
import WarmUp from "@/pages/WarmUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/WarmUp", component: WarmUp },
  ],
})

export default router

import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashbaord.vue";
import Tabs from "../components/Tabs.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tabs",
    name: "tabs",
    component: Tabs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

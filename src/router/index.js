import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import UserList from "../pages/UserList.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/users", component: UserList } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

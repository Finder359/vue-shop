import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import UserList from "../pages/UserList.vue";
import InfoHtml from "../pages/InfoHtml.vue";
import { ElMessage } from 'element-plus'
import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import AddUser from "../pages/AddUser.vue";
import EditUser from "../pages/EditUser.vue";


const routes = [
  { path: "/",
    component: Home,
    children: [
        { path: "", redirect: "info" },//右侧默认显示info.html
        { path: "info", component: InfoHtml }, 
      { path: "users", component: UserList },
      { path: "add-user",component:AddUser }, 
      { path: "edit-user/:id",component:()=>import("../pages/EditUser.vue")} ,
      { path: "edit-user",component:EditUser}
    ] 
},
  { path: "/login", component: Login },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ----------------------------
// 全局前置守卫：拦截未登录访问
// ----------------------------
router.beforeEach((to, from, next) => {

  if (to.path === "/login") {
    return next();   // 登录页面无需 token
  }

  const token = localStorage.getItem("token");

  if (!token) {
    ElMessage.error("未登录，请先登录！");
    return next("/login");  // 无 token → 跳到登录
  }

  next();   // 有 token → 放行
});

export default router;

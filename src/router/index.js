import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/admin/Home.vue";
import Login from "../pages/admin/Login.vue";
import UserList from "../pages/admin/UserList.vue";
import InfoHtml from "../pages/admin/InfoHtml.vue";
import { ElMessage } from 'element-plus'
import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import AddUser from "../pages/admin/AddUser.vue";
import EditUser from "../pages/admin/EditUser.vue";


const routes = [
   // ---------------------
  // 后台路由（需要登录）
  // ---------------------
  { 
    path: "/admin",
    component: Home,
    children: [
        { path: "", component: InfoHtml },//右侧默认显示info.html
      { path: "users", component: UserList },
      { path: "add-user",component:AddUser }, 
      { path: "edit-user/:id",component:()=>import("../pages/admin/EditUser.vue")} ,
      { path: "edit-user",component:EditUser}
    ] 
},
//登录
  { path: "/login", component: Login },
  //其他页面
  { path: "/tilt", component:()=> import("../pages/MDemo.vue") },
  //前台页面
  {
  path: '/',
  component: () => import('../pages/front/Tesla.vue')
  },
  {
  path: "/about",
  component: () => import("../pages/misc/About.vue")
},
{
  path: "/:pathMatch(.*)*",
  component: () => import("../pages/misc/NotFound.vue")
}

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ----------------------------
// 全局前置守卫
// ----------------------------
router.beforeEach((to, from, next) => {
  // 获取 token（兼容自动登录 + 临时登录）
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  // 1️⃣ 登录页逻辑：已登录 → 禁止再去 /login
  if (to.path === "/login") {
    if (token) {
      ElMessage.success("您已登录，已自动跳转后台");
      return next("/admin");
    }
    return next(); // 未登录的话进入登录页
  }

  // 2️⃣ 后台路径判断：所有 /admin 开头的页面都需要登录
  const isAdmin = to.path.startsWith("/admin");

  if (isAdmin) {
    if (!token) {
      ElMessage.error("未登录，请先登录！");
      return next("/login");
    }
    return next(); // 已登录正常进入后台
  }

  // 3️⃣ 其他前台路径放行
  next();
});




export default router;

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
// 全局前置守卫：拦截未登录访问
// ----------------------------

const adminPaths = ['/admin/', '/admin/users', '/admin/add-user', '/admin/edit-user'];

// 全局守卫
router.beforeEach((to, from, next) => {
  // 登录页面不需要 token
  if (to.path === "/login") {
    return next();
  }

  // 判断是否后台路径
  const needLogin = adminPaths.some((p) => to.path.startsWith(p));

  if (!needLogin) {
    return next();  // 前台页面放行
  }

  // 后台路径 → 检查 token
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (!token) {
    ElMessage.error("未登录，请先登录！");
    return next("/login");
  }

  next();
});



export default router;

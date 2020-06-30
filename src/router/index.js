import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Home,
    children: [
      {
        path: "/user",
        name: "User",
        component: () => import("../views/user/index")
      },
      // 安全设置
      {
        path: "/safe",
        name: "Safe",
        component: () => import("../views/safe/index")
      },
      {
        path: "/password",
        name: "Password",
        component: () => import("../views/safe/password")
      },
      {
        path: "/capitalpas",
        name: "Capitalpas",
        component: () => import("../views/safe/capitalpas")
      },
      {
        path: "/bindphone",
        name: "Bindphone",
        component: () => import("../views/safe/bindphone")
      },
      {
        path: "/bindbank",
        name: "Bindbank",
        component: () => import("../views/safe/bindbank")
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
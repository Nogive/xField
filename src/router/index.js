import Router from "vue-router";
Vue.use(Router);
const routes = [
  {
    path: "/",
    component: () => import("@/pages/home/home.vue"),
    children: [
      {
        path: "/",
        name: "workbench",
        component: () => import("@/pages/home/workbench.vue"),
        meta: {
          title: "工作台"
        }
      },
      {
        path: "message",
        name: "message",
        component: () => import("@/pages/home/message.vue"),
        meta: {
          title: "消息"
        }
      },
      {
        path: "aboutme",
        name: "aboutme",
        component: () => import("@/pages/home/aboutme.vue"),
        meta: {
          title: "我的"
        }
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/pages/login/login.vue"),
    meta: {
      title: "登录"
    }
  },
  {
    path: "/register",
    component: () => import("@/pages/login/register.vue"),
    meta: {
      title: "注册"
    }
  },
  {
    path: "/kaoqin",
    component: () => import("@/pages/kaoqin/kaoqin.vue"),
    children: [
      {
        path: "/",
        name: "daka",
        component: () => import("@/pages/kaoqin/daka/daka.vue"),
        meta: {
          title: "打卡"
        }
      },
      {
        path: "tongji",
        name: "tongji",
        component: () => import("@/pages/kaoqin/tongji/tongji.vue"),
        meta: {
          title: "考勤统计"
        }
      },
      {
        path: "rule",
        name: "rule",
        component: () => import("@/pages/kaoqin/rule/rule.vue"),
        meta: {
          title: "考勤规则"
        }
      }
    ]
  },
  {
    path: "/daka_detail",
    component: () => import("@/pages/kaoqin/daka/daka_detail.vue"),
    meta: {
      title: "打卡详情"
    }
  },
  {
    path: "/test",
    component: () => import("@/components/test.vue"),
    meta: {
      title: "测试"
    }
  }
];
const router = new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes
});
router.beforeEach((to, from, next) => {
  if (to.path == "/comingSoon") {
    Toast("敬请期待！");
  } else {
    next();
  }
});
export default router;

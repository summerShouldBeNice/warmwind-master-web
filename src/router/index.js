/**
 * 路由配置
 */
import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from "@/stores/userStore.js";
import config from "@/config/config.js"


// 静态路由
const routes = [
    {
      path: '/',
      redirect: '/index',
    },
    {
        path: '/login',
        component: () => import('@/views/login/UserLogin.vue'),
        meta: { title: '登录' }
    },
    {
        path: '/index',
        component: () => import('@/layout/LayoutIndex.vue'),
        meta: { title: '主页' }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    console.log("111")
    console.log(userStore.user)
    userStore.setUser(333)

    console.log("22")
    console.log(userStore.user)

    const isWhitelist = config.routeWhitelist?.includes(to.path)

    if (!isWhitelist) {
        next({ path: '/login' })
    }

    next()
})

export default router;

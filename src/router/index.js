/**
 * 路由配置
 */
import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';

// 静态路由
const routes = [
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

export default router;
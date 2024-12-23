import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home.vue';
import Tables from '@/pages/tables.vue';

// 创建路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/survey/:title',
    name: 'Survey',
    component: ()=> import('../pages/survey.vue')
  },
  {
    path: '/tables',
    name: 'Tables',
    component: ()=> import('../pages/tables.vue')
  }
];

// 创建路由器实例
const router = createRouter({
    history: createWebHistory(),
    routes, // 路由规则
});
  
// 每次路由切换时滚动到顶部
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
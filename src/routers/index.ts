import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/index.vue';
// import Survey from '@/pages/survey.vue';

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
  }
];

// 创建路由器实例
const router = createRouter({
    history: createWebHistory(),
    routes // 路由规则
});
  
export default router;
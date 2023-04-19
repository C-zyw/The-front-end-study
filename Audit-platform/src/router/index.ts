import { createRouter,createWebHistory } from 'vue-router';

// 默认展示页面可以不用懒加载
const List = import('../components/List.vue');

const routes = [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/list',
    name: 'list',
    // 动态加载路由(懒加载)
    component: () => List
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('../components/Review.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
// 默认抛出ES Moduel 规范
export default router;
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/css/index.vue'),
  },
  {
    path: '/test',
    component: () => import('../views/css/test.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
});

export default router;

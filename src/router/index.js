import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/css/demo.vue'),
  },
  {
    path: '/test',
    component: () => import('../views/css/sass.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
});

export default router;

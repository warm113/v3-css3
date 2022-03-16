import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/css/demo.vue'),
  },
  {
    path: '/drag',
    component: () => import('../views/dragTable/index.vue'),
  },
  {
    path: '/test',
    component: () => import('../views/css/test.vue'),
  },
  {
    path: '/sass',
    component: () => import('../views/css/sass.vue'),
  },
  {
    path: '/1',
    component: () => import('../views/css/1/demo.vue'),
  },
  {
    path: '/sass1',
    component: () => import('../views/css/1/sass.vue'),
  },
  {
    path: '/2',
    component: () => import('../views/css/2/demo.vue'),
  },
  {
    path: '/sass2',
    component: () => import('../views/css/2/sass.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
});

export default router;

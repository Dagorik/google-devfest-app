
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Index.vue') },
      { path: '/auth', component: () => import('pages/Login.vue') },
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/speakers', component: () => import('pages/Speakers.vue') },
      { path: '/events', component: () => import('pages/Events.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;


import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Auth from './views/Auth.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

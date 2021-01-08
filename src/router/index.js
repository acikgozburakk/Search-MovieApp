import { createRouter,createWebHashHistory, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Favourite from '../views/Favourite';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component: Favourite
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

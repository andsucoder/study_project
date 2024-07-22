import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    component: () => import(/* webpackChunkName: "about" */ '../views/PokedexView.vue')
  },
  {
    path: '/pokedexdisplay/:slug',
    name: 'pokedexdisplay',
    component: () => import(/* webpackChunkName: "about" */ '../views/PokedexView.vue')
  },
  {
    path: '/money',
    name: 'money',
    component: () => import(/* webpackChunkName: "about" */ '../views/MoneyView.vue')
  },
  {
    path: '/parimpares',
    name: 'parimpares',
    component: () => import(/* webpackChunkName: "about" */ '../views/ParImparesView.vue')
  },
  {
    path: '/navalbattle',
    name: 'navalbattle',
    component: () => import(/* webpackChunkName: "about" */ '../views/NavalBattleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastroView from '../views/CadastroView.vue'
import CadastradosView from '../views/CadastradosView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () =>
      import(/* webpackChunkName: "sobre" */ '../views/SobreView.vue'),
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroView,
  },
  {
    path: '/cadastrados',
    name: 'cadastrados',
    component: CadastradosView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

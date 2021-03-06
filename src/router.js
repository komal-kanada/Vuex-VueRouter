import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cat from './views/Cat.vue'
import Dog from './views/Dog.vue'
import Pets from './views/Pets'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cat',
      name: 'cat',
      component: Cat
    },
    {
      path: '/dog',
      name: 'dog',
      component: Dog
    },
    {
      path: '/pets/:species/:id',
      name: 'pets',
      component: Pets
    }
  ]
})

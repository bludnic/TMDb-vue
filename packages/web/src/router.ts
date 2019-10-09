import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Genre from './views/Genre.vue'
import Movie from './views/Movie.vue'

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
      path: '/genre/:id',
      name: 'genre',
      props: true,
      component: Genre
    },
    {
      path: '/movie/:id',
      name: 'movie',
      props: true,
      component: Movie
    }
  ]
})

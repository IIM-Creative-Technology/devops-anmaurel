import Vue from 'vue'
import VueRouter from 'vue-router'

import Movies from '@/components/Movies.vue'
import Movie from '@/components/movie/Movie.vue'
import CreateMovie from '@/components/movie/Create.vue'
import UpdateMovie from '@/components/movie/Update.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movies',
    component: Movies,
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: Movie,
  },
  {
    path: '/createMovie',
    name: 'createMovie',
    component: CreateMovie,
  },
  {
    path: '/movie/:id/edit',
    name: 'updateMovie',
    component: UpdateMovie,
  },
]

const router = new VueRouter({
  routes,
})

export default router

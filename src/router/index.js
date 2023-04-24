import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HeroView from '@/views/HeroView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import heroesData from '@/data/heroes.json'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/hero/:id',
      name: 'hero',
      props: true,
      component: HeroView,
      beforeEnter: (to, from, next) => {
        const { heroes } = heroesData
        const isValidHeroId = heroes.find(
          (hero) => hero.id === parseInt(to.params.id)
        )
        if (isValidHeroId) {
          next()
        } else {
          next({ name: 'NotFound' })
        }
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})

export default router

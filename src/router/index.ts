import { createRouter, createWebHistory } from 'vue-router';
import { usePokemonStore } from '@/stores/pokemon';
import BrowserPokemonView from '@/views/BrowserPokemonView.vue';
import WelcomeView from '@/views/WelcomeView.vue';
import FavoritesView from '@/views/FavoritesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/browser',
      name: 'browser',
      component: BrowserPokemonView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const pokemonStore = usePokemonStore();
  if (to.path !== '/' && pokemonStore.pokemons.length === 0) {
    next('/');
  } else {
    next();
  }
});

export default router

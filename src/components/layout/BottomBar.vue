<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import { ListBulletIcon, StarIcon } from "@heroicons/vue/24/solid";  // Importa el icono de estrella

const { favoritesPokemons } = usePokemonStore();

const router = useRouter();

const isFavoritesEmpty = computed(() => favoritesPokemons.length === 0);

const goFavorites = () => {
  router.push({ name: "favorites" });
};

const goAllPokemons = () => {
  router.push({ name: "browser" });
};
</script>

<template>
  <div class="pt-28 flex flex-col">
    <div
      class="fixed bottom-0 inset-x-0 bg-white shadow-lg flex gap-5 justify-center p-4 border-t"
    >
      <button
        class="w-1/2 md:w-64 px-8 py-1 my-2 bg-red-600 hover:bg-red-700 rounded-2xl text-white font-extralight flex items-center justify-center gap-2"
        @click="goAllPokemons()"
      >
        <ListBulletIcon class="w-6" />
        All
      </button>

      <button
        class="w-1/2 md:w-64 px-8 py-1 my-2 bg-red-600 hover:bg-red-700 rounded-2xl text-white font-extralight flex items-center justify-center gap-2"
        :class="{ 'opacity-50 cursor-not-allowed bg-slate-500': isFavoritesEmpty }"
        :disabled="isFavoritesEmpty"
        @click="goFavorites()"
      >
        <StarIcon class="w-6" />
        Favorites
      </button>
    </div>
  </div>
</template>

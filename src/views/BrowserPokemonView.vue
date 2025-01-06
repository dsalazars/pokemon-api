<script setup lang="ts">
import { ref } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import { handleAddFavorite, handleFilteredPokemons } from "@/utils/index";
import Modal from "@/components/layout/Modal.vue";
import BottomBar from "@/components/layout/BottomBar.vue";
import { StarIcon } from "@heroicons/vue/24/solid";

const {
  pokemons,
  getPokemon,
  isModalActive,
  toggleFavoritePokemon,
  isPokemonFavorited,
} = usePokemonStore();
const pokemonsSearched = ref("");

const filteredPokemon = handleFilteredPokemons(pokemons, pokemonsSearched)

const getBack = () => {
  pokemonsSearched.value = "";
};
</script>

<template>
  <div class="max-w-5xl w-full mx-auto pt-16 flex justify-center items-center">
    <input
      v-model="pokemonsSearched"
      type="text"
      class="w-full bg-slate-100 h-10 px-5 py-7 pr-16 rounded-sm text-lg focus:outline-none mx-4"
      placeholder="Search Pokemon"
    />
  </div>
  <div>
    <div
      v-if="filteredPokemon.length"
      class="grid grid-cols-1 gap-4 max-w-5xl mx-auto pt-16"
    >
      <div
        v-for="pokemon in filteredPokemon"
        :key="pokemon.name"
        class="bg-slate-100 rounded-none shadow-sm py-2 hover:shadow-md cursor-pointer mx-4"
      >
        <div
          class="p-4 flex justify-between mr-2 w-full"
          @click="getPokemon(pokemon.name)"
        >
          <p class="font-extraligh text-2xl w-full m-none">
            {{ pokemon.name }}
          </p>
          <button
            class="px-1 py-1 my-1 rounded-2xl font-extralight"
            :class="
              isPokemonFavorited(pokemon.name)
                ? 'bg-yellow-300 text-slate-900'
                : 'bg-red-600 hover:bg-red-700'
            "
            @click="
              handleAddFavorite($event, pokemon.name, toggleFavoritePokemon)
            "
          >
            <StarIcon class="w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
    <div v-else class="justify-items-center">
      <p class="font-semibold text-5xl text-center pt-10">Oh, no!</p>
      <p class="font-thin text-2xl text-center pt-10 mx-4">
        You look lost on your journey
      </p>
      <button
        class="px-8 py-1 my-10 bg-red-600 rounded-2xl text-white font-extralight"
        @click="getBack"
      >
        Get Back
      </button>
    </div>
    <BottomBar />
    <Modal v-if="isModalActive" />
    
  </div>
</template>

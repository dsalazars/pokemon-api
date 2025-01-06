<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon";
import { handleFilteredFavoritesPokemon } from "@/utils";
import BottomBar from "@/components/layout/BottomBar.vue";
import Modal from "@/components/layout/Modal.vue";
import { ref } from "vue";


const pokemonsSearched = ref("");
const { favoritesPokemons, getPokemon, isModalActive } = usePokemonStore();
const filteredPokemon = handleFilteredFavoritesPokemon(favoritesPokemons, pokemonsSearched)


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
  <div class="max-w-5xl mx-auto pt-10">
    
    
    <div
      v-if="filteredPokemon.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 pt-10 mx-8"
    >
      <div
        v-for="pokemon in filteredPokemon"
        :key="pokemon.name"
        class="bg-white shadow-md rounded-lg  transition-transform transform hover:scale-105 hover:cursor-pointer border border-slate-200"
        @click="getPokemon(pokemon.name)"
      >
        <img
          :src="pokemon.image"
          :alt="`img de ${pokemon.name}`"
          class="w-full h-50 object-cover"
        />
        
        <div class="p-4">
          <h3 class="text-xl font-light text-black text-center">
            {{ pokemon.name }}
          </h3>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-10">
      <p class="text-2xl font-light text-gray-600"> {{ favoritesPokemons.length ? 'No Results!' : 'No favorite Pokémon added yet!'}} </p>
    </div>

  </div>
  <BottomBar/>
  <Modal v-if="isModalActive"/>
  
</template>


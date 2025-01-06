<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon";
import Background from "@/assets/images/background.png";
import { StarIcon } from "@heroicons/vue/24/solid";

const {
  pokemon,
  isModalActive,
  toggleFavoritePokemon,
  isPokemonFavorited,
  copyPokemonDetails,
} = usePokemonStore();
const { name, weight, height, image, types } = pokemon;
</script>

<template>
  <div v-if="isModalActive">
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div
        class="bg-white shadow-lg rounded-md w-full max-w-2xl max-h-full mx-5 relative"
      >
        <button
          class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 rounded-full bg-white"
          @click="isModalActive = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
          class="justify-items-center bg-cover bg-center w-full rounded-t-md"
          :style="{ backgroundImage: `url(${Background})` }"
        >
          <div>
            <img
              class="inset-0 w-56 h-56"
              :src="image"
              :alt="`img de ${name}`"
            />
          </div>
        </div>

        <div class="grid gap-y-3 divide-y divide-solid m-7">
          <p class="text-gray-600 text-xl">
            <span class="font-semibold text-xl">Name: </span>{{ name }}
          </p>
          <p class="text-gray-600 text-xl pt-3">
            <span class="font-semibold text-xl">Weight: </span>{{ weight }}
          </p>
          <p class="text-gray-600 text-xl pt-3">
            <span class="font-semibold text-xl">Height: </span>{{ height }}
          </p>
          <p class="text-gray-600 text-xl pt-3">
            <span class="font-semibold text-xl">Types: </span>{{ types }}
          </p>
        </div>

        <div class="my-6 mx-7 flex gap-3">
          <button
            class="px-8 py-1 my-2 bg-red-600 hover:bg-red-700 rounded-2xl text-white font-extralight"
            @click="copyPokemonDetails(pokemon)"
          >
            Share to my friends
          </button>
          <button
            class="px-1 py-1 my-2 rounded-full font-extralight"
            :class="
              isPokemonFavorited(name)
                ? 'bg-yellow-300  text-slate-900'
                : 'bg-red-600 hover:bg-red-700'
            "
            @click="toggleFavoritePokemon(name)"
          >
            <StarIcon class="w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

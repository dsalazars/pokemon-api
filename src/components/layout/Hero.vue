<script setup lang="ts">
import PikachuImage from "@/assets/images/pikachu.webp";
import Loader from "../layout/Loader.vue";
import { ref } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import { useRouter } from "vue-router";
import { withMinimumDelay } from "@/utils/index";

const router = useRouter();
const isLoading = ref(false);
const { getPokemonList } = usePokemonStore();

const searchPokemon = async () => {
  isLoading.value = true;
  try {
    await withMinimumDelay(getPokemonList(), 3000);
    router.push({ name: "browser" });
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

</script>

<template>
  <Loader v-if="isLoading"/>
  <div v-else class="max-w-7xl md:mx-auto justify-items-center pt-48">
      <img :src="PikachuImage" alt="img de pikachu" class="w-80 h-80"/>
    <div class="justify-items-center">
      <h1 class="justify-items-center text-6xl text-center pt-12 font-extralight">Welcome to Pokedéx</h1>
      <p class="justify-items-center italic pt-10 mx-12">The digital encyclopedia created by professor oak is an invaluable tool to trainers in the pokemon world.</p>
      <button class="px-8 py-1 my-10 bg-red-600 hover:bg-red-700 rounded-2xl text-white font-extralight" @click="searchPokemon">
        Get Stared
      </button>
    </div>
  </div>
</template>



<script setup lang="ts">
import { RouterView } from "vue-router";
import BottomBar from "./components/layout/BottomBar.vue";
import { usePokemonStore } from "@/stores/pokemon";

const { pokemons } = usePokemonStore();

</script>

<template>
  <RouterView/>
  <BottomBar v-if="pokemons.length < 0"/>
</template>



<script setup lang="ts">
import Loader from "../../assets/images/pokeball.png";

</script>

<template>
    <div class="flex flex-col justify-center items-center h-screen">
        <img :src="Loader" alt="loader" class="w-30 h-20 animate-spin"/>
        <p class="font-medium text-2xl pt-4">Loading Pokemons...</p>
    </div>
</template>

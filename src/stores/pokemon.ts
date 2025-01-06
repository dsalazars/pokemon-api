import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";
import type { Pokemons, Pokemon } from "@/interfaces/Pokemon";
import { capitalize, capitalizeArray, copyToClipboard } from "@/utils/index";

const apiPokemon = import.meta.env.VITE_API_BASE_URL;


export const usePokemonStore = defineStore("pokemon", () => {
    const pokemons = ref<Pokemons[]>([]);
    const openModal = ref(false);
    const pokemon = ref<Pokemon>({} as Pokemon);
    const favoritesPokemons = ref<Pokemon[]>([]);



    const getPokemonList = async () => {
        
        try {
            const response = await axios.get(apiPokemon);
            const pokemonsCapitalized = response.data.results.map((pokemon: Pokemons) => ({...pokemon, name: capitalize(pokemon.name)}));
            pokemons.value = pokemonsCapitalized;
        } catch (error) {
            console.error("Error fetching List Pokémon:", error);
            throw new Error("Error fetchingPokemon list");
        }
    };
    
    const getPokemon = async (name: string): Promise<Pokemon> => {
      
        try {
          const response = await axios.get(`${apiPokemon}${name.toLowerCase()}`);
          const data = response.data;
          const pokemonData: Pokemon = {
            name: capitalize(data.name),
            weight: data.weight,
            height: data.height,
            types: capitalizeArray(data.types).join(','),
            image: data.sprites.front_default
          }; 
          pokemon.value = pokemonData;
          openModal.value = true;
          return pokemonData;
        } catch (error) {
          console.error("Error fetching Pokémon data:", error);
          throw new Error("Error fetchingPokemon data");
        }
      };

      const toggleFavoritePokemon = async (pokemonName: string) => {
        const existingIndex = favoritesPokemons.value.findIndex(
          (pokemon) => pokemon.name.toLowerCase() === pokemonName.toLowerCase()
        );
      
        if (existingIndex !== -1) {
          favoritesPokemons.value.splice(existingIndex, 1);
         openModal.value = false;
        } else {
          const newPokemon = await getPokemon(pokemonName);
          favoritesPokemons.value.push(newPokemon);
         openModal.value = false;
        }
      };
      
      const copyPokemonDetails = (pokemon: Pokemon) => {
        const details = `name: ${pokemon.name}, weight: ${pokemon.weight}, height: ${pokemon.height}, types: ${pokemon.types}`;
        copyToClipboard(details);
      };

      const isModalActive = computed(() => openModal);
      const isPokemonFavorited = (name: string) => {
        return favoritesPokemons.value.some(
          (favorite) => favorite.name.toLowerCase() === name.toLowerCase()
        );
      };

    return {
        pokemons,
        getPokemonList,
        getPokemon,
        pokemon,
        openModal,
        isModalActive,
        favoritesPokemons,
        toggleFavoritePokemon,
        isPokemonFavorited,
        copyPokemonDetails
    }
})
import type { Pokemon, Pokemons } from "@/interfaces/Pokemon";
import { computed, type Ref } from "vue";

export const capitalize = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

export const capitalizeArray = (types: Array<{ type: { name: string } }>) => {
  return types.map(type => capitalize(type.type.name));
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Texto copiado al portapapeles');
  }).catch(error => {
    console.error('Error al copiar el texto al portapapeles: ', error);
  });
};


export const withMinimumDelay = async <T>(
  promise: Promise<T>,
  delay: number
): Promise<T> => {
  const timerPromise = new Promise((resolve) => setTimeout(resolve, delay));
  const [result] = await Promise.all([promise, timerPromise]);
  return result;
};

export const handleAddFavorite = (
  event: Event,
  name: string,
  callFunction: (name: string) => void
) => {
  event.stopPropagation();
  callFunction(name);
};

export const handleFilteredFavoritesPokemon = (pokemons: Pokemon[], model: Ref<string>) => {
  let filteredPokemon = computed(() =>
    pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(model.value.toLowerCase())
    )
  );
  return filteredPokemon;
}

export const handleFilteredPokemons = (pokemons: Pokemons[], model: Ref<string>) => {
  let filteredPokemon = computed(() =>
    pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(model.value.toLowerCase())
    )
  );
  return filteredPokemon;
}
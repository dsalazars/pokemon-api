import { describe, it, expect, beforeEach } from "vitest";
import { nextTick } from 'vue';
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { createRouter, createWebHistory, type Router } from "vue-router";
import { usePokemonStore } from "@/stores/pokemon";
import BottomBar from "@/components/layout/BottomBar.vue";
import FavoritesView from "@/views/FavoritesView.vue"
import BrowserPokemonView from "@/views/BrowserPokemonView.vue"

describe("BottomBar.vue", () => {
  let router: Router;

  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);

    router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: "/favorites", name: "favorites", component: FavoritesView },
        { path: "/browser", name: "browser", component: BrowserPokemonView },
      ],
    });
  });

  it("renders the buttons correctly", async () => {
    const wrapper = mount(BottomBar, {
      global: {
        plugins: [router, createPinia()],
      },
    });

    const store = usePokemonStore();
    store.favoritesPokemons = [];

    await wrapper.vm.$nextTick();

    const buttons = wrapper.findAll("button");

    expect(buttons[0].text()).toContain("All");
    expect(buttons[1].text()).toContain("Favorites");
    expect(buttons[1].attributes("disabled")).toBeDefined();
  });

  it("enables the 'Favorites' button when there are favorites", async () => {
    const wrapper = mount(BottomBar, {
      global: {
        plugins: [router, createPinia()],
      },
    });

    const store = usePokemonStore();
    store.favoritesPokemons = [{ name: "Pikachu", weight: 4, height: 7, types: "electric", image: "image.jpg" }]; // Añade un favorito

    await wrapper.vm.$nextTick();

    expect(wrapper.find("button:disabled").exists()).toBe(true); // Verifica que el botón "Favorites" esté habilitado
  });
});
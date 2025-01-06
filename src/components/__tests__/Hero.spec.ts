import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { usePokemonStore } from "@/stores/pokemon";
import { createRouter, createWebHistory, type Router } from "vue-router";
import Hero from "@/components/layout/Hero.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import BrowserPokemonView from "@/views/BrowserPokemonView.vue";

describe("Hero.vue", () => {
  let router: Router;

  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);

    router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: "/", name: "welcome", component: WelcomeView },
        { path: "/browser", name: "browser", component: BrowserPokemonView },
      ],
    });
  });

  it("should render correctly", () => {
    const wrapper = mount(Hero, {
      global: {
        plugins: [router, createPinia()],
      },
    });

    expect(wrapper.find("h1").text()).toBe("Welcome to Pokedéx");
    expect(wrapper.find("img").attributes("alt")).toBe("img de pikachu");
  });

});

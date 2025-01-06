import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Loader from '@/components/layout/Loader.vue';

describe('LoaderComponent', () => {
  it('should render correctly', () => {
    const wrapper = mount(Loader);

    // Verifica que la imagen se renderiza correctamente
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('alt')).toBe('loader');
    expect(img.classes()).toContain('animate-spin');

    // Verifica que el texto se renderiza correctamente
    const text = wrapper.find('p');
    expect(text.exists()).toBe(true);
    expect(text.text()).toBe('Loading Pokemons...');
  });
});
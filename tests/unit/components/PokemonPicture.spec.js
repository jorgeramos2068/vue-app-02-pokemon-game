import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture';

describe('PokemonPicture component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: 1, showPokemon: false },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should show the hidden image', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: 100, showPokemon: false },
    });
    const [img1, img2] = wrapper.findAll('img');
    expect(img1.exists()).toBeTruthy();
    expect(img1.classes('hidden-pokemon')).toBeTruthy();
    expect(img1.attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'
    );
    expect(img2).toBe(undefined);
  });

  it('should show the pokemon if showPokemon is true', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: 100, showPokemon: true },
    });
    const img1 = wrapper.find('img');
    expect(img1.exists()).toBeTruthy();
    expect(img1.classes('hidden-pokemon')).toBeFalsy();
    expect(img1.classes('fade-in')).toBeTruthy();
  });
});

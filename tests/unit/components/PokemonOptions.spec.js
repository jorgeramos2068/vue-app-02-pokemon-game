import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';
import { mockPokemons } from '../__mocks__/mockPokemons';

describe('PokemonOptions component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: { pokemonOptions: mockPokemons },
    });
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should show the four options correctly', () => {
    const listItems = wrapper.findAll('li');
    expect(listItems.length).toBe(4);
    expect(listItems[0].text()).toBe(mockPokemons[0].name);
    expect(listItems[1].text()).toBe(mockPokemons[1].name);
    expect(listItems[2].text()).toBe(mockPokemons[2].name);
    expect(listItems[3].text()).toBe(mockPokemons[3].name);
  });

  it('should emit the event with its parameters when doing a click', () => {
    const listItems = wrapper.findAll('li');
    listItems[0].trigger('click');
    // Expect it was emitted once
    expect(wrapper.emitted('selection').length).toBe(1);
    // Expect it was emitted with the parameters
    expect(wrapper.emitted('selection')[0]).toEqual([mockPokemons[0].id]);
  });

  it('should emit the event with its parameters when doing several clicks', () => {
    const listItems = wrapper.findAll('li');
    listItems[0].trigger('click');
    listItems[1].trigger('click');
    listItems[2].trigger('click');
    listItems[3].trigger('click');
    expect(wrapper.emitted('selection').length).toBe(4);
    // Expect it was emitted with the parameters
    expect(wrapper.emitted('selection')[0]).toEqual([mockPokemons[0].id]);
    expect(wrapper.emitted('selection')[1]).toEqual([mockPokemons[1].id]);
    expect(wrapper.emitted('selection')[2]).toEqual([mockPokemons[2].id]);
    expect(wrapper.emitted('selection')[3]).toEqual([mockPokemons[3].id]);
  });
});

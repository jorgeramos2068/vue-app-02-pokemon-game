import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';
import { mockPokemons } from '../__mocks__/mockPokemons';

describe('PokemonPage component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  afterAll(done => {
    done();
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match the snapshot when the data is loaded', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonOptions: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showMessage: false,
          message: '',
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should call getPokemons method on mounting', () => {
    const getPokemonsSpy = jest.spyOn(PokemonPage.methods, 'getPokemons');
    shallowMount(PokemonPage);
    expect(getPokemonsSpy).toHaveBeenCalled();
  });

  it('should show PokemonPicture and PokemonOptions components', async () => {
    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonOptions: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showMessage: false,
          message: '',
        };
      },
    });
    const pokemonPicture = wrapper.findComponent(PokemonPicture);
    expect(pokemonPicture.exists()).toBe(true);
    const pokemonOptions = wrapper.findComponent(PokemonOptions);
    expect(pokemonOptions.exists()).toBe(true);
    expect(pokemonPicture.vm.pokemonId).toBe(mockPokemons[0].id);
    expect(pokemonOptions.vm.pokemonOptions).toEqual(mockPokemons);
  });

  it('should check the checkAnswer method', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonOptions: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showMessage: false,
          message: '',
        };
      },
    });
    await wrapper.vm.checkAnswer(mockPokemons[0].id);
    expect(wrapper.find('h2').exists()).toBeTruthy();
    expect(wrapper.find('h2').text()).toBe(`Correct, ${mockPokemons[0].name}`);
    expect(wrapper.vm.showPokemon).toBeTruthy();
    await wrapper.vm.checkAnswer(mockPokemons[1].id);
    expect(wrapper.vm.message).toBe(
      `Oops, the correct answer is ${mockPokemons[0].name}`
    );
  });
});

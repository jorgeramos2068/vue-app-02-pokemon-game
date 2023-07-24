import getPokemonOptions, {
  getPokemons,
  getPokemonNames,
} from '@/helpers/getPokemonOptions';
import { mockPokemons } from '../__mocks__/mockPokemons';

jest.mock('axios', () => ({
  create: () => ({
    get: localPath => {
      if (localPath === '/1') {
        return Promise.resolve({ data: mockPokemons[0] });
      } else if (localPath === '/2') {
        return Promise.resolve({ data: mockPokemons[1] });
      } else if (localPath === '/3') {
        return Promise.resolve({ data: mockPokemons[2] });
      } else {
        return Promise.resolve({ data: mockPokemons[3] });
      }
    },
  }),
}));

describe('getPokemonOptions helpers', () => {
  it('should cal the getPokemons helper and return an array of numbers', () => {
    const pokemonsArr = getPokemons();
    expect(pokemonsArr.length).toBe(650);
    expect(pokemonsArr[0]).toBe(1);
    expect(pokemonsArr[499]).toBe(500);
  });

  it('should call the getPokemonNames helper and return and array of 4 elements', async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemons[0].name).toBe(mockPokemons[0].name);
    expect(pokemons[1].name).toBe(mockPokemons[1].name);
    expect(pokemons[2].name).toBe(mockPokemons[2].name);
    expect(pokemons[3].name).toBe(mockPokemons[3].name);
  });

  it('should call the getPokemonOptions helper and return a random array', async () => {
    const pokemons = await getPokemonOptions();
    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      {
        id: expect.any(Number),
        name: expect.any(String),
      },
      {
        id: expect.any(Number),
        name: expect.any(String),
      },
      {
        id: expect.any(Number),
        name: expect.any(String),
      },
      {
        id: expect.any(Number),
        name: expect.any(String),
      },
    ]);
  });
});

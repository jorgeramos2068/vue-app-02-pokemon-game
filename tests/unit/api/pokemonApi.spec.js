import pokemonApi from '@/api/pokemonApi';

describe('pokemonApi', () => {
  it('should be configured with the base url of the poke api', () => {
    const localBaseUrl = 'https://pokeapi.co/api/v2/pokemon';
    expect(pokemonApi.defaults.baseURL).toBe(localBaseUrl);
  });
});

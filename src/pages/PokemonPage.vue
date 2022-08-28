<template>
  <div>
    <h1>Who is this Pokemon?</h1>
    <PokemonPicture :pokemonId="4" :showPokemon="true" />
    <PokemonOptions :pokemonOptions="pokemonOptions" />
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonOptions: [],
    };
  },
  methods: {
    async getPokemons() {
      this.pokemonOptions = await getPokemonOptions();
    },
  },
  mounted() {
    this.getPokemons();
  },
};
</script>

<template>
  <div>
    <div v-if="!pokemon">
      <h1>Loading...</h1>
    </div>
    <div v-else>
      <h1>Who is this Pokemon?</h1>
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <PokemonOptions
        :pokemonOptions="pokemonOptions"
        @selection="checkAnswer"
      />
      <template v-if="showMessage">
        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newGame()">New game</button>
      </template>
    </div>
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
      pokemon: null,
      showPokemon: false,
      showMessage: false,
      message: '',
    };
  },
  methods: {
    async getPokemons() {
      this.pokemonOptions = await getPokemonOptions();
      const randomInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonOptions[randomInt];
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showMessage = true;
      if (selectedId === this.pokemon.id) {
        this.message = `Correct, ${this.pokemon.name}`;
      } else {
        this.message = `Oops, the correct answer is ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.pokemonOptions = [];
      this.pokemon = null;
      this.showPokemon = false;
      this.showMessage = false;
      this.message = '';
      this.getPokemons();
    },
  },
  mounted() {
    this.getPokemons();
  },
};
</script>

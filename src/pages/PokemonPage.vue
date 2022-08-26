<template>
  <div>
    <h1>Who is this Pokemon?</h1>
    <PokemonPicture />
    <PokemonOptions />
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>

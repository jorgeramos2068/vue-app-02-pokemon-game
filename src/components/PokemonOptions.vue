<template>
  <div class="options-container">
    <ul>
      <li>Opt1</li>
      <li>Opt2</li>
      <li>Opt3</li>
      <li>Opt4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PokemonOptions',
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin-top: 50px;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 20px;
  padding: 5px 0;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>

<template>
  <div v-for="(pokemon, idx) in pokemons" :key="idx" class="card c-pointer font-bold">
    <div class="id text-small">{{ `#${pokemon.id}` }}</div>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
      alt="Pokemon Image"
      width="96"
      height="96"
    />
    <div class="name text-base">{{ pokemon.name }}</div>
    <vButton type="primary" size="medium" class="font-bold">Catch</vButton>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    pokemons: Array
  }
}
</script>

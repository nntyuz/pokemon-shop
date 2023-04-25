<template>
  <div v-for="(pokemon, idx) in pokemons" :key="idx" class="card c-pointer font-bold">
    <div class="id text-small">{{ `#${pokemon.id}` }}</div>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
      alt="Pokemon Image"
      width="96"
      height="96"
      @error="errorSrc"
    />
    <div class="name text-base">{{ pokemon.name }}</div>
    <vButton
      v-if="$route.href !== '/cart'"
      type="primary"
      size="medium"
      class="font-bold"
      @click="$emit('add', pokemon)"
      >Catch</vButton
    >
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    pokemons: {
      type: [Array, Object]
    }
  },
  emits: ['add'],
  methods: {
    errorSrc(e) {
      e.target.src = '/img/no-image.png'
    }
  }
}
</script>

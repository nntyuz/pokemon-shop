<template>
  <section class="w-container flex a-center j-between wrap gap-20 pt-100">
    <h1 v-if="favorites.length === 0" class="text-large font-bold w-100 text-a-center">
      Not a single favorite pokemon
    </h1>
    <card :pokemons="favorites" />
  </section>
</template>

<script>
import { useMainStore } from '../stores/store.js'
import { mapState } from 'pinia'
import Card from '../components/card.vue'
export default {
  name: 'Favorites',
  components: {
    Card
  },
  computed: {
    ...mapState(useMainStore, {
      favorites: (store) => store.favorites
    })
  }
}
</script>

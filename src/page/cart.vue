<template>
  <section class="w-container flex a-center j-between wrap gap-20 pt-100">
    <h1 v-if="cart.length === 0" class="text-large font-bold w-100 text-a-center">
      Not a single pokemon caught
    </h1>
    <card :pokemons="cart" />
  </section>
</template>

<script>
import { useMainStore } from '../stores/store.js'
import { mapState } from 'pinia'
import Card from '../components/card.vue'
export default {
  name: 'CartPage',
  components: {
    Card
  },
  computed: {
    ...mapState(useMainStore, {
      cart: (store) => store.cart
    })
  }
}
</script>

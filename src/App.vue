<template>
  <global-header-component />
  <section class="w-container flex a-center j-between wrap gap-20 pt-100">
    <pokemon-card />
  </section>
  <global-footer-component />
</template>

<script>
import GlobalHeaderComponent from './components/global/header.vue'
import PokemonCard from './components/card.vue'
import GlobalFooterComponent from './components/global/footer.vue'
export default {
  components: {
    GlobalHeaderComponent,
    PokemonCard,
    GlobalFooterComponent
  }
}
</script>

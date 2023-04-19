<template>
  <section class="w-container flex a-center j-between wrap gap-20 pt-100">
    <card :pokemons="pokemons" />
    <pagination
      :pages="Math.ceil(count / pokemonsPerPage)"
      :page="page"
      @next-page="next"
      @prev-page="prev"
    />
  </section>
</template>

<script>
import { useMainStore } from '../stores/store.js'
import { mapState } from 'pinia'
import Card from './card.vue'
import Pagination from './pagination.vue'
export default {
  name: 'ContentComponent',
  components: {
    Card,
    Pagination
  },
  data() {
    return {
      page: 1,
      pokemonsPerPage: 20,
      offset: 0
    }
  },
  computed: {
    ...mapState(useMainStore, {
      pokemons: (store) => store.pokemons,
      count: (store) => store.count
    })
  },
  created() {
    this.getAllPokemons()
  },
  methods: {
    getAllPokemons() {
      const store = useMainStore()
      store.getAllPokemons(this.offset)
    },
    next() {
      this.offset = this.offset + this.pokemonsPerPage
      this.page++
      this.getAllPokemons()
    },
    prev() {
      this.offset = this.offset - this.pokemonsPerPage
      this.page--
      this.getAllPokemons()
    }
  }
}
</script>

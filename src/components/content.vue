<template>
  <section class="w-container flex a-center j-between wrap gap-20 pt-100">
    <card :pokemons="pokemons" />
    <pagination :pages="Math.ceil(count / pokemonsPerPage)" :page="page" @pagination="pagination" />
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
      pokemonsPerPage: 20
    }
  },
  computed: {
    ...mapState(useMainStore, {
      pokemons: (store) => store.pokemons,
      count: (store) => store.count
    })
  },
  created() {
    this.page = Number(this.$route.query.page) || 1
    this.getAllPokemons((this.page - 1) * this.pokemonsPerPage)
  },
  methods: {
    getAllPokemons(offset) {
      const store = useMainStore()
      store.getAllPokemons(offset)
    },
    pagination(page) {
      this.page = page
      this.getAllPokemons((page - 1) * this.pokemonsPerPage)
      this.$router.replace({ path: '/', query: { page } })
    }
  }
}
</script>

<template>
  <section class="w-container flex a-center j-between wrap gap-20 pt-100">
    <card :pokemons="pokemons" @add="addToCart" />
    <pagination :pages="Math.ceil(count / pokemonsPerPage)" :page="page" @pagination="pagination" />
  </section>
</template>

<script>
import { useMainStore } from '../stores/store.js'
import { mapState } from 'pinia'
import Card from '../components/card.vue'
import Pagination from '../components/pagination.vue'
export default {
  name: 'HomePage',
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
    addToCart(pokemon) {
      const store = useMainStore()
      store.addToCart(pokemon)
    },
    pagination(page) {
      this.page = page
      this.getAllPokemons((page - 1) * this.pokemonsPerPage)
      this.$router.replace({ path: '/', query: { page } })
    }
  }
}
</script>

import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => ({
    pokemons: [],
    count: null
  }),
  actions: {
    getAllPokemons(offset) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
        .then((res) => {
          this.pokemons = res.data.results.map((pokemon) => {
            let name = pokemon.name
            name = name[0].toUpperCase() + name.slice(1)
            let id = pokemon.url
            id = id
              .split('/')
              .filter((a) => a)
              .pop()
            return { name, id }
          })
          this.count = res.data.count
        })
        .catch((error) => {
          console.log('error', error)
        })
    }
  }
})

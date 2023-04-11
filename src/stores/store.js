import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => ({
    pokemons: []
  }),
  actions: {
    getAllPokemons() {
      axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=500&offset=0')
        .then((res) => {
          this.pokemons = res.data.results.map((pokemon) => {
            let name = pokemon.name
            name = name[0].toUpperCase() + name.slice(1)
            const url = pokemon.url
            const id = url
              .split('/')
              .filter((a) => a)
              .pop()
            return { name, id }
          })
        })
        .catch((error) => {
          console.log('error', error)
        })
    }
  }
})

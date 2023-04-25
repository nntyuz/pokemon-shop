import { defineStore } from 'pinia'
import axios from 'axios'
export const useMainStore = defineStore('main', {
  state: () => ({
    count: null,
    pokemons: [],
    cart: []
  }),
  actions: {
    getAllPokemons(offset = 0) {
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
    },
    addToCart(pokemon) {
      pokemon = this.pokemons.find((a) => a.id === pokemon.id)
      // проверка на одинаковый id у pokemon
      const index = this.cart.findIndex((a) => a.id === pokemon.id)
      if (index !== -1) {
        // в случае одинакового id, мы не добавляем этот элемент в массив cart
        return
      } else {
        // если id разный, мы добавляем
        this.cart.push(pokemon)
      }
    }
  }
})

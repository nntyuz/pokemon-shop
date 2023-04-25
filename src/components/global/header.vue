<template>
  <header class="global-header-component w-100 h-auto fixed">
    <div class="w-container flex a-center j-between">
      <router-link to="/" class="logo text-large font-bold c-default">
        vue-<span class="text-gradient">pokemon</span>-shop
      </router-link>
      <router-link to="/cart">
        <vButton type="text" size="medium" icon="pokeball" class="font-bold">Your pokemons</vButton>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeaderComponents'
}
</script>

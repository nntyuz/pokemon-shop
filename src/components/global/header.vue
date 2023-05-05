<template>
  <header class="global-header-component w-100 h-auto fixed">
    <div class="w-container flex a-center j-between">
      <router-link to="/" class="logo text-large font-bold c-default">
        vue-<span class="text-gradient">pokemon</span>-shop
      </router-link>
      <div class="flex a-center gap-20">
        <router-link to="/cart">
          <vButton type="outline" size="medium" icon="pokeball" class="font-bold">Cart</vButton>
        </router-link>
        <router-link to="/favorites">
          <vButton type="outline" size="medium" icon="star" class="font-bold">Favorites</vButton>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeaderComponents'
}
</script>

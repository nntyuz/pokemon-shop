<template>
  <global-header-component />
  <router-view />
  <global-footer-component />
</template>

<script>
import GlobalHeaderComponent from './components/global/header.vue'
import GlobalFooterComponent from './components/global/footer.vue'
export default {
  components: {
    GlobalHeaderComponent,
    GlobalFooterComponent
  }
}
</script>

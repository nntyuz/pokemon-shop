<template>
  <global-header-component />
  <content-component />
  <global-footer-component />
</template>

<script>
import GlobalHeaderComponent from './components/global/header.vue'
import ContentComponent from './components/content.vue'
import GlobalFooterComponent from './components/global/footer.vue'
export default {
  components: {
    GlobalHeaderComponent,
    ContentComponent,
    GlobalFooterComponent
  }
}
</script>

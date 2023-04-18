<template>
  <section class="pagination-component w-100 flex a-center j-center gap-20">
    <vButton
      :disabled="page < 2"
      type="outline"
      size="medium"
      icon="arrowLeft"
      @click="$emit('prevPage')"
    />
    <div class="page">{{ `${page}/${pages}` }}</div>
    <vButton type="outline" size="medium" icon="arrowRight" @click="$emit('nextPage')" />
  </section>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    page: {
      type: Number,
      default: 1
    },
    pages: Number
  },
  emits: ['prevPage', 'nextPage']
}
</script>

<template>
  <section class="pagination-component w-100 flex a-center j-center gap-20">
    <vButton
      :disabled="page === 1"
      type="outline"
      size="medium"
      icon="arrowLeft"
      @click="$emit('pagination', page - 1)"
    />
    <div class="page">{{ `${page}/${pages}` }}</div>
    <vButton
      :disabled="page === pages"
      type="outline"
      size="medium"
      icon="arrowRight"
      @click="$emit('pagination', page + 1)"
    />
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
  emits: ['pagination']
}
</script>

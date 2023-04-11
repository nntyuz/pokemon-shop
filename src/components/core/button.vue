<template>
  <button :class="classes" @click="$emit('click')">
    <vIcon v-if="icon" :name="icon" />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'vButton',
  props: {
    type: {
      type: String,
      default: 'main'
    },
    icon: String,
    iconPosition: {
      type: String,
      default: 'right'
    },
    size: {
      type: String,
      default: 'large'
    },
    disabled: Boolean
  },
  emits: ['click'],
  computed: {
    classes() {
      const { type, icon, iconPosition, size, disabled } = this
      let result = `button-component flex a-center j-center type-${type} size-${size}`
      if (disabled) result += ' disabled'
      if (icon) result += ` icon-position-${iconPosition} gap-8`
      return result
    }
  }
}
</script>

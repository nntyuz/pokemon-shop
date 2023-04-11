<template>
  <div @click="$emit('click')">
    <component :is="name" class="icon-component"></component>
  </div>
</template>

<script>
import github from '../icons/github.vue'
import telegram from '../icons/telegram.vue'
import mail from '../icons/mail.vue'

export default {
  name: 'vIcon',
  components: {
    github,
    telegram,
    mail
  },
  props: {
    name: String
  },
  emits: ['click']
}
</script>

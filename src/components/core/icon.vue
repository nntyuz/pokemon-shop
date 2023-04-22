<template>
  <div @click="$emit('click')">
    <component :is="name" class="icon-component"></component>
  </div>
</template>

<script>
import github from '../icons/github.vue'
import telegram from '../icons/telegram.vue'
import mail from '../icons/mail.vue'
import arrowLeft from '../icons/arrow-left.vue'
import arrowRight from '../icons/arrow-right.vue'
import pokeball from '../icons/pokeball.vue'
export default {
  name: 'vIcon',
  components: {
    github,
    telegram,
    mail,
    arrowLeft,
    arrowRight,
    pokeball
  },
  props: {
    name: String
  },
  emits: ['click']
}
</script>

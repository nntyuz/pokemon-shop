<template>
  <footer class="global-footer-component mt-40">
    <div class="w-container flex a-center j-center gap-20">
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.href"
        target="_blank"
        class="links flex a-center gap-8 text-base font-bold text-dark"
      >
        <vIcon :name="link.icon" />
        {{ link.name }}
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'GlobalFooterComponent',
  data() {
    return {
      links: [
        {
          href: 'https://github.com/nnuyz',
          icon: 'github',
          name: 'GitHub'
        },
        {
          href: 'https://t.me/nntyuz',
          icon: 'telegram',
          name: 'Telegram'
        },
        {
          href: 'mailto:hellonedesign@gmail.com',
          icon: 'mail',
          name: 'Mail'
        }
      ]
    }
  }
}
</script>

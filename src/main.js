import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/router'
import App from './App.vue'

import vIcon from './components/core/icon.vue'
import vButton from './components/core/button.vue'

import './assets/styles/main.scss'
import './assets/styles/reset.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('vIcon', vIcon).component('vButton', vButton)

app.mount('#app')

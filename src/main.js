import { createApp } from 'vue'
import App from './App'

// createApp creates the Vue object, no need to construct it
const app = createApp(App)

app.config.unwrapInjectedRef = true

app.mount('#app')

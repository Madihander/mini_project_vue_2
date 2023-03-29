import { createApp } from 'vue'
import App from './App.vue'
import dirictives from '@/dirictives'

const app = createApp(App)
dirictives.forEach(dirictive => {
    app.directive(dirictive.name,dirictive )
})
app.mount('#app')
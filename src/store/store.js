import { useUserStore } from '@/stores/user'
import { createApp } from 'vue'
import App from '../main'


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

// ✅ works because the pinia instance is now active
const userStore = useUserStore()
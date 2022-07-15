import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'

import 'aos/dist/aos.css'
import './assets/css/font-awesome/css/all.min.css'
import './assets/css/bootstrap-icons/bootstrap-icons.css'
import './assets/css/bootstrap.min.css'
import './assets/css/main.css'

export const app = createApp(App)
app.AOS = new AOS.init({ disable: "phone" });

app.use(AOS).mount('#app')
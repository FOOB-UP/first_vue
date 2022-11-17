import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from 'axios'
import router from "./router/index"


axios.defaults.baseURL="http://localhost:8081"


const app = createApp(App).use(router)
app.config.globalProperties.$axios = axios
app.use(ElementPlus)

app.mount('#app')
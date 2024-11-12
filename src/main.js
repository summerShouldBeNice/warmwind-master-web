import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import '@/styles/global.scss'

const pinia = createPinia()
const app = createApp(App);

app.config.productionTip = false;

app.use(Antd)
app.use(pinia)
app.use(router);

app.mount('#app');

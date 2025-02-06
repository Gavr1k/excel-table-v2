import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { i18n } from './locales';
import './assets/styles/main.css';

createApp(App).use(i18n).mount('#app');

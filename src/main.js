import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import LazyLoad from './directives/LazyLoad'

const app = createApp(App);
app.use(LazyLoad);
app.mount('#app');

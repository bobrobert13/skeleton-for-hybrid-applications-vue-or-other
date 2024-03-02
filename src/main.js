import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import routerIndex from './router/router-index';
import './style.css'
import App from './App.vue'


const app = createApp(App);
const router = createRouter({
   history: createWebHistory(),
   routes: routerIndex()
});
app.use(router);
app.mount('#app');
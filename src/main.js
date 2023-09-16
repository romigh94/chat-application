import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import LoginVue from './components/LoginVue.vue'
import RegisterVue from './components/RegisterVue.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Register', component: RegisterVue},
        {path: '/login', name: 'Login', component: LoginVue},
    ]
})

createApp(App).use(router).mount('#app')

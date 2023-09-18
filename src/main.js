import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import LoginVue from './components/LoginVue.vue'
import RegisterVue from './components/RegisterVue.vue'
import ChatVue from './components/ChatVue.vue'
import SetAvatar from './components/SetAvatar.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Register', component: RegisterVue},
        {path: '/login', name: 'Login', component: LoginVue},
        {path: '/setavatar', name: 'SetAvatar', component: SetAvatar},
        {path: '/chat', name: 'Chat', component: ChatVue}
    ]
})

createApp(App).use(router).mount('#app')

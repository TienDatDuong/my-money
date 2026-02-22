import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'

const routes = [
    { path: '/', component: HomeView, name: 'home'},
    { path: '/about', component: AboutView, name: 'about', meta: { layout: 'auth' } },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
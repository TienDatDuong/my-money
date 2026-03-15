import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', name: 'home', component: () => import('./components/index.vue') },
    { path: '/register', name: 'register', meta: { layout: 'auth' }, component: () => import('./components/register.vue') },
    { path: '/login', name: 'login', meta: { layout: 'auth' }, component: () => import('./components/login.vue') },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
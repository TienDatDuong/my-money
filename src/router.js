import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', name: 'login', meta: { layout: 'auth' }, component: () => import('./components/login.vue') },
    { path: '/register', name: 'register', meta: { layout: 'auth' }, component: () => import('./components/register.vue') },
    { path: '/login', name: 'login', meta: { layout: 'auth' }, component: () => import('./components/login.vue') },
    { path: '/profile', name: 'profile', component: () => import('./views/profile.vue') },
    { path: '/wallet', name: 'wallet', component: () => import('./views/myWallet.vue') },
    { path: '/tools', name: 'tools', component: () => import('./views/tools.vue') },
    { path: '/privacy', name: 'privacy', component: () => import('./views/privacy.vue') },
    { path: '/about', name: 'about', component: () => import('./views/about.vue') }

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
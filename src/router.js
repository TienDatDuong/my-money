import { createWebHistory, createRouter } from 'vue-router'
import { useUser } from "./composables/useUser";

const beforeRouteEnter = (to, from, next) => {
    const { user } = useUser();
    if (user.value) {
        next();
    } else {
        next('/login');
    }
}

const routes = [
    { path: '/', name: 'login', meta: { layout: 'auth' }, component: () => import('./components/login.vue') },
    { path: '/register', name: 'register', meta: { layout: 'auth' }, component: () => import('./components/register.vue') },
    { path: '/login', name: 'login', meta: { layout: 'auth' }, component: () => import('./components/login.vue') },
    { path: '/profile', name: 'profile', component: () => import('./views/profile.vue'), beforeEnter: beforeRouteEnter },
    { path: '/wallet', name: 'wallet', component: () => import('./views/myWallet.vue') },
    { path: '/tools', name: 'tools', component: () => import('./views/tools.vue') },
    { path: '/privacy', name: 'privacy', component: () => import('./views/privacy.vue') },
    { path: '/about', name: 'about', component: () => import('./views/about.vue') },
    {path: '/logout', name: 'logout', component: () => import('./views/logout.vue') }

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
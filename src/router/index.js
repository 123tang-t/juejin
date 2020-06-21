import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
            path: '/welcome',
            name: 'Welcome',
            component: () => import(/* webpackChunkName: "about" */ '../views/Welcome.vue')
        }, {
            path: '/pins',
            name: 'Pins',
            component: () => import(/* webpackChunkName: "about" */ '../views/Pins.vue')
        }, {
            path: '/books',
            name: 'Books',
            component: () => import(/* webpackChunkName: "about" */ '../views/Books.vue')
        }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

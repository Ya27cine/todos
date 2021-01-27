import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../components/Todos'
import HelloWorld from '../components/HelloWorld'

import About from '../views/About'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Todos',
        component: Todos
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/hello',
        name: 'Hello',
        component: HelloWorld
    }
]

const router = new VueRouter({
    routes
})

export default router
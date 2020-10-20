import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Bilibili from '../views/Bilibili'
const routes = [{
        name:'home',
        path: '/home',
        component: Home
    }, {
        name:'bilibili',
        path: '/bilibili',
        component: Bilibili
    },
    {
        name:'about',
        path: '/about',
        component: About
    }, {
        path: '*',
        redirect: 'home'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
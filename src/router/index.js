import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import bilibili from '../views/bilibili'
const routes = [{
        name:'home',
        path: '/home',
        component: Home
    }, {
        name:'bilibili',
        path: '/bilibili',
        component: bilibili
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
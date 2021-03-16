import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Dynamic from '../views/Dynamic'
import Timeline from '../views/Timeline'
const routes = [{
        name: 'home',
        path: '/home',
        component: Home
    }, {
        name: 'dynamic',
        path: '/dynamic',
        component: Dynamic
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name:'timeline',
        path:'/timeline',
        component: Timeline
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
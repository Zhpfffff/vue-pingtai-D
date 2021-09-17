import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DataView from '../views/DataView.vue'
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },

    {
        path: '/home',
        component: Home
    },
    {
        path: '/dataview',
        component: DataView
    },

]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
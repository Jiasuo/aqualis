import {createRouter, createWebHashHistory} from "vue-router"

// Components
import Home from "../pages/Home"

const routes = [
    {
        path: '/',
        component: Home,
        name: "Home"
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})
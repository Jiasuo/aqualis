import {createRouter, createWebHashHistory} from "vue-router"

// Components
import Home from "../pages/Home"
import AttractionList from "../pages/AttractionList"
import AttractionDetail from "../pages/AttractionDetail"

const routes = [
    {
        path: '/',
        component: Home,
        name: "Home"
    },
    {
        path: "/attractions",
        name: "AttractionList",
        component: AttractionList
    },
    {
        path: "/detail",
        name: "Detail",
        component: AttractionDetail
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
      },
})
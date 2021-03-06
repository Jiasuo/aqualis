import {createRouter, createWebHistory} from "vue-router"

// Components
import Home from "../pages/Home"
import AttractionList from "../pages/AttractionList"
import AttractionDetail from "../pages/AttractionDetail"
import Infos from "../pages/Infos"
import Plan from "../pages/Plan"
import Tickets from "../pages/Tickets"

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
    },
    {
        path: "/infos",
        name:"Infos",
        component: Infos
    },
    {
        path: "/plan",
        name:"Plan",
        component: Plan
    },
    {
        path: "/billetterie",
        name: "Tickets",
        component: Tickets
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
      },
})
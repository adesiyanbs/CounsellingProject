import Vue from "vue"
import VueRouter from "vue-router"
import StudentLogin from "../components/authentication/studentLogin"
import CounsellorLogin from "../components/authentication/counsellorLogin"
import AdminLogin from "../components/authentication/adminLogin"
import Home from "../components/dashboard/home"
import Dashboard from "../components/dashboard/dashboard"
import CounsellorDash from "../components/counsellor dash/counsellorDash"
import StudentTable from "../components/counsellor dash/studentTable"
import CounsellorHome from "../components/counsellor dash/counsellorHome"
import AdminHome from "../components/admindash/adminHome"
import AdminDash from "../components/admindash/adminDash"
Vue.use(VueRouter)
const routes=[
    {
        path: "/",
        name: "StudentLogin",
        component: StudentLogin
    },
    {
        path: "/counsellorlogin",
        name: "CounsellorLogin",
        component: CounsellorLogin
    },
    {
        path: "/adminlogin",
        name: "AdminLogin",
        component: AdminLogin
    },
    {
        path: "/dashboard",
        name: "Home",
        component: Home,
        children:[
            {
                path:"/",
                name:"dashboard",
                component: Dashboard
            }
        ]
    },
    {
        path: "/counsellordashboard",
        name: "CounsellorHome",
        component: CounsellorHome,
        children:[
            {
                path:"/",
                name:"CounsellorDash",
                component: CounsellorDash
            },
            {
                path:"/studentlist",
                name: "StudentTable",
                component: StudentTable
            }
        ]
    },
    {
        path: "/admindash",
        name: "AdminHome",
        component: AdminHome,
        children:[
            {
                path:"/",
                name:"AdminDash",
                component: AdminDash
            }
        ]
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  
  export default router;
  
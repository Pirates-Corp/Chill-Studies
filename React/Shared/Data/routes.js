import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Home from '../Components/Course/Home'
import Page from '../Components/Course/Page'
import LS from '../Components/Course/LS/LS'


const routes = [
    {
      path: "/",
      component: Login,
      exact : true
    },
    {
        path: "/signup",
        component: Signup,
        exact : true
    },
    {
        path: "/course/:course/ls:ls_type",
        component : LS,
        exact : true
    },
    {
        path: "/course/:course/home",
        component : Home,
        exact : true
    },
    {
        path: "/course/:course/ls/:ls_type",
        component : Home,
        exact : true
    },
    {
        path: "/course/:course/ls/:ls_type/:category",
        component : Page,
        exact : true
    },
    {
        path: "/dashboard",
        component: Home,
        exact : true
    },
    {
        path: "/course/:course",
        component: Home,
        exact : true
    },
    {
        path: "/course/:course/:category",
        component: Page,
        exact : true
    }
]

export default routes
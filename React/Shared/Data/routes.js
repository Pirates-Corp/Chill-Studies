import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Home from '../Components/Course/Home'
import Course from '../Components/Course/Course'
import LS from '../Components/Course/LS/LS'
import LearningStyle from '../Components/Course/LS/LearningStyle'


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
        path: "/dashboard",
        component: Home,
        exact : true
    },
    {
        path: "/ls:ls_type",
        component : LS,
        exact : true
    },
    {
        path: "/ls/:ls_type",
        component : LearningStyle,
        exact : true
    },
    {
        path: "/course/:course",
        component: Home,
        exact : true
    },
    {
        path: "/course/:course/:category",
        component: Course,
        exact : true
    }
]

export default routes
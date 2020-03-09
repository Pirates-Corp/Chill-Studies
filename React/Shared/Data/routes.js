import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Dashboard from '../Components/Dashboard'
import CourseHome from '../Components/Course/CourseHome'
import Category from '../Components/Course/Category'



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
        component: Dashboard,
        exact : true
    },
    {
        path: "/:course",
        component: CourseHome,
        exact : true
    },
    {
        path: "/:course/:category",
        component: Category,
        exact : true
    },
    // {
    //     path: "/:course/activity",
    //     component: Activity,
    //     exact : true
    // },
    // {
    //     path: "/:course/content",
    //     component: Content,
    //     exact : true
    // },
    // {
    //     path: "/:course/definitions",
    //     component: Definitions,
    //     exact : true
    // },
    // {
    //     path: "/:course/summary",
    //     component: Summary,
    //     exact : true
    // },
    // {
    //     path: "/:course/visual",
    //     component: Visual,
    //     exact : true
    // }
]

export default routes
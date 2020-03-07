import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Course from './Course'
import CourseHome from './CourseHome'

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
        path: "/:course/:course_no",
        component: Course,
        exact : true
    },
]

export default routes
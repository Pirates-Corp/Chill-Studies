import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Dashboard from '../Components/Dashboard'
import Course from '../Components/Courses/Course'
import CourseHome from '../Components/Courses/CourseHome'

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
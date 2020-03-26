import routes from "./routes"
import learningStyles from "./learningStyles"
import courses from './courses'
import categories from './categories'

const initState = {
  routes,
  learningStyles,
  courses,
  categories
};

const reducer = (state = initState, action) => { 
  if (action.type == "App") {
    console.log("reducer Called")
    action.do()
  }
    return state;
}

export default reducer
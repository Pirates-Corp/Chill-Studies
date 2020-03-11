import Activity from '../Components/Course/GeneralMaterials/Activity'
import Content from '../Components/Course/GeneralMaterials/Content'
import Definitions from '../Components/Course/GeneralMaterials/Definitions'
import Summary from '../Components/Course/GeneralMaterials/Summary'
import Visual from '../Components/Course/GeneralMaterials/Visual'
import Overview from '../Components/Course/GeneralMaterials/Overview'

const categories = [
    {
      name: 'activity',
      component : Activity
    },
    {
        name: 'content',
        component : Content
    },
    {
        name: 'definitons',
        component : Definitions
    },
    {
        name: 'summary',
        component : Summary
    },
    {
        name: 'visual',
        component : Visual
    },
    {
        name: 'overview',
        component : Overview
    },
    {
        name: 'summary',
        component : Summary
    }
]

export default categories
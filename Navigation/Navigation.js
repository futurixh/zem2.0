import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../components/Home'

const CourseStackNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home'
      }
    }
  })

  export default createAppContainer(CourseStackNavigator)
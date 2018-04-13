import { StackNavigator } from 'react-navigation';
import Home from './container/home.js';

export const RootStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
});
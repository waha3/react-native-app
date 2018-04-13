import { StackNavigator } from 'react-navigation';
import Home from './container/home.js';

const RootStack = StackNavigator({
  Home: {
    screen: Home
  }
});

export default RootStack;

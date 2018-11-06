import {
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  // Profile: { screen: ProfileScreen },
});

export default App;
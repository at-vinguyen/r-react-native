import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    navigationOptions: {
      headerMode: 'none',
      headerStyle: {
        backgroundColor: '#8aba56',
        borderBottom: 0
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#f4511e',
      borderBottom: 0
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return <RootStack />; 
  }
}
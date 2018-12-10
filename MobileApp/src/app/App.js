import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import StatisticsScreen from './screens/StatisticsScreen';

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeScreen
    },
    Report: {
      screen: StatisticsScreen
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
    initialRouteName: 'Login'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
    // return (
    //   <View>
    //     <RootStack />
    //     <Text>Bottom Navigator</Text>
    //   </View>
    // );
  }
}
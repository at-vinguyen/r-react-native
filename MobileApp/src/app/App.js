/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bg}>
          <Image source={require('../assets/image/bg.jpg')} style={styles.backgroundImage} />
        </View>
        <View style={styles.main}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>      
      </View>
    );
  }
}
const bg = '../assets/image/bg.jpg';
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  bg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  container: {
    height: '100%',
    backgroundColor: '#F5FCFF'
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

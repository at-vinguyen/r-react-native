/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, StatusBar} from 'react-native';

import sass from '../../stylesheet/screen/home.scss';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={sass.container}>
        <StatusBar barStyle="light-content" />
        {/* <View style={styles.bg}>
          <Image source={require('../assets/image/bg.jpg')} style={styles.backgroundImage} />
        </View> */}
        <View style={styles.topBar}>
          <Text style={styles.appTitle}>Home</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.welcome}>Hi Guest!</Text>
          <Text style={styles.description}>Don't loss your money!</Text>
        </View>
        <View style={styles.devMode}>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>      
      </View>
    );
  }
}
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
  topBar: {
    position: 'relative',
    height: 50,
    width: '100%',
    backgroundColor: '#8aba56',
    justifyContent: 'flex-end',
    paddingBottom: 4
  },
  appTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  container: {
    height: '100%',
    backgroundColor: '#ffffff'
  },
  main: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 32,
    margin: 10
  },
  description: {
    color: '#333333'
  },
  devMode: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    paddingTop: 10,
    paddingBottom: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  }
});

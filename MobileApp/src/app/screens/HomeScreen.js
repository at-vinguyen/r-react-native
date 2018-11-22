/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
// import { Button } from 'react-native-elements';
import homeStyles from '../../stylesheet/screen/home.scss';
import btnStyles from '../../stylesheet/element/button.scss';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={homeStyles.container}>
        <Text style={[internalStyles.flex, internalStyles.center]}>Text</Text>
        <View style={internalStyles.flex}>
          <TextInput/>
        </View>
        <View style={internalStyles.flex}>
          <Button
            title="Next"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </View>
    );
  }
}
const internalStyles = StyleSheet.create({
  flex: {
    flexDirection: 'column'
  },
  center: {
    textAlign: 'center'
  }
});

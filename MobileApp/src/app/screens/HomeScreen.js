/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, Dimensions } from 'react-native';
import { Button, FormLabel, FormInput, Avatar } from 'react-native-elements';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import styleHome from 'moneysaving/src/stylesheet/screen/home';
import styleLogin from 'moneysaving/src/stylesheet/screen/login';
import styleButton from 'moneysaving/src/stylesheet/element/button';
import layout from 'moneysaving/src/stylesheet/base/layout';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeScreen extends React.Component {

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Number' },
      { key: 'second', title: 'Category' },
    ],
  };
  routes;
  metadata;
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    // this.state = { text: 'Useless Placeholder' };
    this.metadata = {
      categories: [
        { label: 'Cafe', value: 0 },
        { label: 'Beer', value: 1 }
      ]
    };
    this.routes = {
      first: () => (
        <View style={[layout.center, layout.container]}>
          <FormInput style={styleLogin.input} placeholder="Enter your money"/>
          <View>
            <Button
              buttonStyle={styleButton.btn}
              title="Next"
              onPress={() => this.tabChanging(1)}
            />
          </View>
        </View>
      ),
      second: () => (
        <View style={[layout.center, layout.container]}>
          <RadioForm
            style={styleHome.radioWrapper}
            radio_props={this.metadata.categories}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
          />
          <View>
            <Button
              buttonStyle={styleButton.btn}
              title="Submit"
              onPress={() => this.onSubmit()}
            />
          </View>
        </View>
      )
    };
  }

  tabChanging(index) {
    this.setState({ index });
  }

  render() {
    return (
      <View style={[layout.center, layout.container]}>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: this.routes.first,
            second: this.routes.second,
          })}
          onIndexChange={ (index) => this.tabChanging(index) }
        />
      </View>
    );
  }

  onSubmit() {
    this.props.navigation.navigate('Report')
  }
}

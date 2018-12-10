import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleLogin from '../../stylesheet/screen/login';
import styleButton from '../../stylesheet/element/button';
import layout from '../../stylesheet/base/layout';
import styleBase from '../../stylesheet/base/base';

export default class StatisticsScreen extends React.Component {

  static navigationOptions = {
    title: 'Statistic',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[layout.center, layout.container]}>
        <Text style={[styleBase.textCenter, styleBase.h1]}>Successfully!</Text>
      </View>
    );
  }
  
}

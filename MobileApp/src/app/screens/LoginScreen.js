import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from '../../stylesheet/screen/home.scss';
import styleElements from '../../stylesheet/element/button.scss';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Login screen</Text>
        <View style={styleElements.btn}>
          <Button
            title="Go to Home screen"
            color="#ffffff"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}
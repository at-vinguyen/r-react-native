import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleLogin from 'moneysaving/src/stylesheet/screen/login';
import styleButton from 'moneysaving/src/stylesheet/element/button';
import layout from 'moneysaving/src/stylesheet/base/layout';


export default class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Sign in',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[layout.center, layout.container]}>
        {/* <View style={layout.textCenter}>
          <Avatar
            size="xlarge"
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View> */}
        <FormLabel>Email</FormLabel>
        <FormInput style={styleLogin.input} placeholder="Give an email to sync your data"/>
        <FormLabel>Password</FormLabel>
        <FormInput style={styleLogin.input} placeholder="Please enter password to access your data"/>
        <View>
          <Button
            buttonStyle={styleButton.btn}
            title="Signin"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
  
}

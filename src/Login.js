/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';

const LoginButton = MKButton.coloredButton()
  .withText('LOGIN')
  .build();

const myStyle = StyleSheet.create({
  form: {
    paddingBottom: 10,
    width: 200
  },
  fieldStyles: {
    height: 40,
    width: 180,
    color: MKColor.Orange
  },
  loginButtonArea: {
    marginTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  };

onButtonPress() {
  console.log("Clicked button!");
}

  render() {
    const {form, fieldStyles, loginButtonArea, errorMessage, welcome, container} = myStyle;
    return (
      <View style={container}>
        <Text style={welcome}>
          The Login Page
        </Text>
        <MKTextField
          text={this.state.email}
          onTextChange = {email => this.setState({email})}
          textInputStyle = {fieldStyles}
          placeholder = {'Email...'}
          tintColor = {MKColor.Brown}
        />
        <MKTextField
          text={this.state.password}
          onTextChange = {password => this.setState({password})}
          textInputStyle = {fieldStyles}
          placeholder = {'Password...'}
          tintColor = {MKColor.Brown}
          password = {true}
        />
        <Text style = {errorMessage}>
          {this.state.error}
        </Text>
        <View style = {loginButtonArea}>
          <LoginButton onPress = {this.onButtonPress.bind(this)}/>
        </View>
      </View>
    );
  }
}
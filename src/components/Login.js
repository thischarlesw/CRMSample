import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import firebase from 'firebase';
import Loader from './Loader.js';

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //vertical
    alignItems: 'center', //horizontal
    backgroundColor: '#F5FCFF'
  },
  pageInfo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  fieldInputText: {
    height: 40,
    width: 180,
    color: MKColor.Orange
  },
  loginButtonArea: {
    marginTop: 20,
  },
  errorMessage: {
    marginTop: 15,
    fontSize: 15,
    color: 'red',
    alignSelf: 'center'
  },
});

const LoginButton = MKButton.coloredButton()
  .withText('LOGIN')
  .build();

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({error: '', loading: true});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onAuthSuccess.bind(this))
          .catch(this.onAuthFailed.bind(this));
      });
  }

  onAuthSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    })
  }

  onAuthFailed() {
    this.setState({
      error:'Authentication Failed!',
      loading: false,
    })
  }

  renderLoader() {
    if (this.state.loading === true) {
      return <Loader size = "large"/>;
    } else {
      return <LoginButton onPress = {this.onButtonPress.bind(this)}/>
    }
  }

  render() {
    const {container, pageInfo, fieldInputText, loginButtonArea, errorMessage} = myStyle;
    return (
      <View style = {container}>
        <Text style = {pageInfo}>
          Login or create an account.
        </Text>
        <MKTextField
          text = {this.state.email}
          onTextChange = {email => this.setState({email})}
          textInputStyle = {fieldInputText}
          placeholder = {'Email'}
          tintColor = {MKColor.Green}
        />
        <MKTextField
          text = {this.state.password}
          onTextChange = {password => this.setState({password})}
          textInputStyle = {fieldInputText}
          placeholder = {'Password'}
          tintColor = {MKColor.Green}
          password = {true}
        />
        <Text style = {errorMessage}>
          {this.state.error}
        </Text>
        <View style = {loginButtonArea}>
          {this.renderLoader()}
        </View>
      </View>
    );
  }
}
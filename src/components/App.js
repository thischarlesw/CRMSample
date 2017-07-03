/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Login from './Login.js';
import Loader from './Loader.js';
import TabBar from './Navigation.js';
import PeopleList from './PeopleList.js';
import CompanyList from './CompanyList.js';
import AddPerson from './AddPerson.js';
import reducers from '../reducers/PeopleReducer.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {
  state = {loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCw0xC5OF2mB1Bqs5lAhiBjMecEX0CKRK4",
      authDomain: "crmsample-bdb09.firebaseapp.com",
      databaseURL: "https://crmsample-bdb09.firebaseio.com",
      projectId: "crmsample-bdb09",
      storageBucket: "",
      messagingSenderId: "496269226630"
    });

    firebase.auth().onAuthStateChanged((user) =>
    {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderInitialView() {
    switch(this.state.loggedIn) {
      case true:
        return <TabBar/>;
        // return <PeopleList/>;
        // return <CompanyList/>;
      case false:
        return <Login/>;
      default:
        return <Loader size='large'/>;
    }
  }

  render() {
    return (
      <Provider store = {store}>
        {/*<View style={styles.container}>*/}
          {this.renderInitialView()}
        {/*</View>*/}
      </Provider>
    );
  }
};
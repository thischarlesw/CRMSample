import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import Login from './Login.js';

export default class PeopleList extends Component {

  render() {
    return (
      <View>
        <Text>People List Loaded!!!</Text>
      </View>
    );
  }
};
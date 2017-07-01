import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const theStyle = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Loader = ({size}) => {
  return (
    <View style = {theStyle.Loader}>
      <ActivityIndicator size = {size || 'small'}/>
    </View>
  );
};

export default Loader;
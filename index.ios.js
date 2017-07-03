/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import App from './src/components/App.js';

AppRegistry.registerComponent('CRMSample', () => App);

// import React from 'react';
// import { TabNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/EvilIcons';
// // import PeopleList from './src/components/PeopleList.js';
// import CompanyList from './src/components/CompanyList.js';
// import AddPerson from './src/components/AddPerson.js';

// const TabBar = TabNavigator({
//   // People: { screen: PeopleList },
//   AddPerson: { 
//     screen: AddPerson,
//     navigationOptions: {
//       tabBarLabel: 'Add Person',
//       tabBarIcon: ({tintColor}) => (
//         <Icon
//           name = {'plus'}
//           size = {70}
//           color = {tintColor}
//         />
//       )
//     }  
//   },
//   Companies: { screen: CompanyList }
// }, {
//   tabBarOptions: {
//     activeTintColor: '#e91e63',
//     inactiveTintColor: 'white',
//     showLabel: true,
//     style: {
//       backgroundColor: '#26a69a',
//     }
//    }
// });

// AppRegistry.registerComponent('CRMSample', () => TabBar);
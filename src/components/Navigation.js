import { StackNavigator, TabNavigator } from 'react-navigation';
import PeopleList from './PeopleList.js';
import CompanyList from './CompanyList.js';
import AddPerson from './AddPerson.js';

const TabBar = TabNavigator({
  People: { screen: PeopleList },
  AddPerson: { screen: AddPerson },
  Companies: { screen: CompanyList }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    inactiveTintColor: 'white',
    tabBarVisible: 'true',
    showLabel: false,
    // swipeEnabled: true, //allows swiping between screens
    style: {
      backgroundColor: '#26a69a',
    }
   }
});

export default TabBar;
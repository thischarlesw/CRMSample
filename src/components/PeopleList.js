import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem.js';
import PeopleDetail from './PeopleDetail.js'
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20
  },
});

class PeopleList extends Component {
  static navigationOptions = {
      tabBarLabel: 'People',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name = {'people'}
          size = {40}
          style = {{color: tintColor}}
        />
      ),
  };

  renderInitialView() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.people);

    if (this.props.detailView === true) {
      return <PeopleDetail/>;
    } else {
      return (
        <ListView
          enableEmptySections = {true}
          dataSource = {this.dataSource}
          renderRow = {(rowData) =>
            <PeopleItem 
              people = {rowData}
              test= {['test', 'testing']}
            />
          }
        />
      )
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        {this.renderInitialView()}
      </View>
    );
  }
};

const mapStateToProps = state => {
  return {
    people: state.people,
    detailView: state.detailView
  };
};

export default connect(mapStateToProps)(PeopleList);
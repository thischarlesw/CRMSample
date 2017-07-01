import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20
  },
});

const mapStateToProps = state => {
  return {people: state.people};
};

class PeopleList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.people);
  }
  render() {
    return (
      <View style = {styles.container}>
        <ListView
          enableEmptySections = {true}
          dataSource = {this.dataSource}
          renderRow = {(rowData) =>
            <PeopleItem 
              people = {rowData}
              test= {['hello', 'goodbye']}
            />
          }
        />
      </View>
    );
  }
};

export default connect(mapStateToProps)(PeopleList);
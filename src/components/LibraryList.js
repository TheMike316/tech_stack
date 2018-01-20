import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderRow(library) {
    return <ListItem library={library.item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        keyExtractor={(item) => item.id}
        renderItem={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => ({ libraries: state.libraries() });

export default connect(mapStateToProps)(LibraryList);

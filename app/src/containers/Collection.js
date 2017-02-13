import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Tiles from '../components/collection/Tiles';

import { findBooksByCollection } from '../actions/books';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    padding: '5px',
    overflowY: 'auto',
  },
};

class Collection extends Component {

  componentWillMount() {
    console.log('init id: ' + this.props.params.id);
    this.props.findBooksByCollection(parseInt(this.props.params.id, 10));
  }

  componentDidUpdate (prevProps, prevState) {
      if(prevProps.params.id !== this.props.params.id)
        this.props.findBooksByCollection(parseInt(this.props.params.id, 10));
  }

  render() {
    return (
      <Tiles
        style={style}
        tiles={this.props.books} />
    );
  }
}

Collection.propTypes = {
  books: T.array.isRequired,
  findBooksByCollection: T.func.isRequired,
};

// Collection.defaultProps = {
//   books: []
// };


function mapStateToProps(appState) {
  return {
    books: appState.books,
    ...appState
  };
}

export default connect(mapStateToProps, {findBooksByCollection})(Collection);

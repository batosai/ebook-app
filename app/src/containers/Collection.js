import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Tiles from '../components/collection/Tiles';

import { getBooks } from '../actions/books';

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
    this.props.getBooks(parseInt(this.props.params.id));
  }

  componentDidUpdate (nextProps, nextState) {
    if(nextProps.params.id !== this.props.params.id) {
      this.props.getBooks(parseInt(this.props.params.id));
    }
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
  books: T.array,
  getBooks: T.func.isRequired,
};

Collection.defaultProps = {
  books: []
};

function mapStateToProps(appState) {
  return {
    books: appState.books,
    ...appState
  };
}

export default connect(mapStateToProps, {getBooks})(Collection);

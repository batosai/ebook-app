import React, { Component, PropTypes as T } from 'react';
import Tiles from './Tiles';

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
    this.props.findBooksByCollectionId(parseInt(this.props.params.id, 10));
  }

  componentDidUpdate (prevProps, prevState) {
      if(prevProps.params.id !== this.props.params.id)
        this.props.findBooksByCollectionId(parseInt(this.props.params.id, 10));
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
  findBooksByCollectionId: T.func.isRequired,
};

export default Collection;

import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Tiles from '../components/collection/Tiles';

import { getBooks, updateBooks } from '../actions/books';

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
    this.props.getBooks(parseInt(this.props.params.id));
  }

  componentDidUpdate (prevProps, prevState) {
  // componentWillUpdate (nextProps, nextState) {
    // if(!this.props.books.load){
    // console.log('id: ' + this.props.params.id);
// console.log(JSON.stringify(prevProps.books.items), JSON.stringify(this.props.books.items));
// console.log(prevProps);
      if(prevProps.params.id !== this.props.params.id)
        this.props.getBooks(parseInt(this.props.params.id));
      else
        this.props.updateBooks(); // TODO MACHE PAS SOCKET DANS UN SEUL SENS AUCUN INTERET...
      // alert('');
    // }

  }

  shouldComponentUpdate(nextProps, nextState) {
    // if(this.props.books.load) return false;
    // return false;
return true;
    // return !(nextProps.books.items === this.props.books.items);

    if(nextProps.params.id !== this.props.params.id) return true;
    // // else if(_.difference(nextProps.books.items, this.props.books.items).length)return true;
    // else if(JSON.stringify(nextProps.books.items) !== JSON.stringify(this.props.books.items) && this.props.books.load === false)return true;
    return false;

    return !(nextProps.params.id === this.props.params.id && JSON.stringify(nextProps.books.items) === JSON.stringify(this.props.books.items));

    // return !(nextProps.books.items.length === this.props.books.items.length);
    //  && nextProps.books.load !== this.props.books.load
  }

  render() {
    return (
      <Tiles
        style={style}
        tiles={this.props.books.items} />
    );
  }
}

Collection.propTypes = {
  books: T.object.isRequired,
  getBooks: T.func.isRequired,
};

// Collection.defaultProps = {
//   books: []
// };


function mapStateToProps(appState) {
  // console.log(appState.books.items);
  return {
    books: appState.books,
    ...appState
  };
}

export default connect(mapStateToProps, {getBooks, updateBooks})(Collection);

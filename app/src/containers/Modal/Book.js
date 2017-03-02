import { connect } from 'react-redux';
import Book from '../../components/Modal/Book';

import { findBookById, editBook } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    collections: appState.collections.items,
    book: appState.book,
  };
};

const mapDispatchToProps = {
  findBookById,
  editBook
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);

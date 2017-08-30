import { connect } from 'react-redux';
import Book from '../../components/Modal/Book';

import { book } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    collections: appState.collections.items,
    book: appState.book,
  };
};

const mapDispatchToProps = {
  findBookById: id => book.fetch.dispatch({ id }),
  editBook: book.update.dispatch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);

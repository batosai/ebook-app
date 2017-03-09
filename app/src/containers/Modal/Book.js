import { connect } from 'react-redux';
import Book from '../../components/Modal/Book';

import { bookRequestAction, bookEditRequestAction } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    collections: appState.collections.items,
    book: appState.book,
  };
};

const mapDispatchToProps = dispatch => ({
  findBookById: id => dispatch(bookRequestAction(id)),
  editBook: book => dispatch(bookEditRequestAction(book)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);

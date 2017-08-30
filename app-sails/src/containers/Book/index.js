import { connect } from 'react-redux';
import Book from '../../components/Book';

import { book } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    book: appState.book,
    ...appState
  };
};

const mapDispatchToProps = {
  findBookById: id => book.fetch.dispatch({ id }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);

import { connect } from 'react-redux';
import Book from '../../components/Book';

import { findBookById } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    book: appState.book,
    ...appState
  };
};

const mapDispatchToProps = {
  findBookById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);

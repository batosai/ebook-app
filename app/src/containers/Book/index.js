import { connect } from 'react-redux';
import Book from '../../components/Book';

import { bookRequestAction } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    book: appState.book,
    ...appState
  };
};

const mapDispatchToProps = dispatch => ({
  findBookById: id => dispatch(bookRequestAction(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);

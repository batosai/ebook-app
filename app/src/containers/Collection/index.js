import { connect } from 'react-redux';
import Collection from '../../components/Collection';

import { findBooksByCollectionId } from '../../actions/books';

const mapStateToProps = (appState) => {
  return {
    books: appState.books,
    ...appState
  };
};

const mapDispatchToProps = {
  findBooksByCollectionId,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);

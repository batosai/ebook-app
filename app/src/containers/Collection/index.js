import { connect } from 'react-redux';
import Collection from '../../components/Collection';

import { booksRequestAction } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    books: appState.books,
    ...appState
  };
};

const mapDispatchToProps = dispatch => ({
  findBooksByCollectionId: collection_id => dispatch(booksRequestAction(collection_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);

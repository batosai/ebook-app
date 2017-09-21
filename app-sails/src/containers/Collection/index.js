import { connect } from 'react-redux';
import Collection from '../../components/Collection';

import { book } from '../../actions';

const mapStateToProps = appState => {
  return {
    books: appState.books,
    ...appState,
  };
};

const mapDispatchToProps = {
  findBooksByCollectionId: collectionId =>
    book.fetch.dispatch({ collection: collectionId }),
  bookUpload: book.upload.dispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);

import { connect } from 'react-redux';
import Book from '../../components/Modal/Book';

import { book } from '../../actions';

const mapStateToProps = appState => {
  return {
    collections: appState.collections.items,
    findBook: obj => {
      const books = appState.books.filter(b => b.id === obj.id );
      return books ? books[0] : {};
    },
  };
};

const mapDispatchToProps = {
  editBook: book.update.dispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);

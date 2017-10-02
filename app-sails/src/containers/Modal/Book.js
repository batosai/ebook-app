import { connect } from 'react-redux';
import Book from '../../components/Modal/Book';

import { book } from '../../actions';

const mapStateToProps = appState => {
  return {
    collections: appState.collections,
    findBook: obj => {
      const book = appState.books.find(b => b.id === obj.id);
      return book ? book : {};
    },
  };
};

const mapDispatchToProps = {
  bookUpdate: book.update.dispatch,
  bookUpdateIllustration: book.illustration.dispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);

import { connect } from 'react-redux';
import Book from '../../components/Book';

const mapStateToProps = appState => {
  return {
    books: appState.books,
    ...appState,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);

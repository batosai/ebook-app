import { connect } from 'react-redux';
import Tools from '../../components/Collection/Tools';

import { book } from '../../actions';

const mapStateToProps = appState => {
  return {
    modals: appState.modals,
  };
};

const mapDispatchToProps = {
  deleteBook: id => book.remove.dispatch({ id }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Tools);

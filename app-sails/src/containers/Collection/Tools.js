import { connect } from 'react-redux';
import Tools from '../../components/Collection/Tools';

import { book } from '../../actions';

const mapStateToProps = appState => {
  return {
    modals: appState.modals,
  };
};

const mapDispatchToProps = {
  findBooksByCollectionId: id => book.delete.dispatch({ id }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Tools);

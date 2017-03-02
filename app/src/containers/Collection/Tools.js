import { connect } from 'react-redux';
import Tools from '../../components/Collection/Tools';

import { deleteBook } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    modals: appState.modals,
  };
};

const mapDispatchToProps = {
  deleteBook,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tools);

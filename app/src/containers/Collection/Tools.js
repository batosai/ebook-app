import { connect } from 'react-redux';
import Tools from '../../components/Collection/Tools';

import { bookDeleteRequestAction } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    modals: appState.modals,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteBook: id => dispatch(bookDeleteRequestAction(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tools);

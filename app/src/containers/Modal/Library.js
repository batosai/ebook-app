import { connect } from 'react-redux';
import Library from '../../components/Modal/Library';

import { libraryAddRequestAction, libraryEditRequestAction } from '../../actions';

const mapDispatchToProps = dispatch => ({
  createLibrary: library => dispatch(libraryAddRequestAction(library)),
  editLibrary: library => dispatch(libraryEditRequestAction(library)),
});

export default connect(
  null,
  mapDispatchToProps
)(Library);

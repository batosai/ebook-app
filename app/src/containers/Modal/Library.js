import { connect } from 'react-redux';
import Library from '../../components/Modal/Library';

import { createLibrary, editLibrary } from '../../actions';

const mapDispatchToProps = {
  createLibrary,
  editLibrary
};

export default connect(
  null,
  mapDispatchToProps
)(Library);

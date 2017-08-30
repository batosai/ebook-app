import { connect } from 'react-redux';
import Library from '../../components/Modal/Library';

import { library } from '../../actions';

const mapDispatchToProps = {
  createLibrary: library.create.dispatch,
  editLibrary: library.update.dispatch,
};

export default connect(
  null,
  mapDispatchToProps
)(Library);

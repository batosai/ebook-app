import { connect } from 'react-redux';
import Tools from '../../components/Aside/Tools';

import { aside } from '../../actions';

const mapStateToProps = appState => {
  return {
    libraries: appState.libraries,
  };
};

const mapDispatchToProps = {
  selectLibrary: libraryId => aside.library.dispatch(libraryId),
};

export default connect(mapStateToProps, mapDispatchToProps)(Tools);

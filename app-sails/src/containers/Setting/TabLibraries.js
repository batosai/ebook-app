import { connect } from 'react-redux';
import TabLibraries from '../../components/Setting/TabLibraries';

import { library } from '../../actions';

const mapStateToProps = appState => {
  return {
    libraries: appState.libraries,
  };
};

const mapDispatchToProps = {
  deleteLibrary: library.remove.dispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabLibraries);

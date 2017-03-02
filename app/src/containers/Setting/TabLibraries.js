import { connect } from 'react-redux';
import TabLibraries from '../../components/Setting/TabLibraries';

import { deleteLibrary } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    libraries: appState.libraries,
  };
};

const mapDispatchToProps = {
  deleteLibrary
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabLibraries);

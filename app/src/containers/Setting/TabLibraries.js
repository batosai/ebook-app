import { connect } from 'react-redux';
import TabLibraries from '../../components/Setting/TabLibraries';

import { libraryDeleteRequestAction } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    libraries: appState.libraries,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteLibrary: library => dispatch(libraryDeleteRequestAction(library))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabLibraries);

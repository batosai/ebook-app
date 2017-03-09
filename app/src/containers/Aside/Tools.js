import { connect } from 'react-redux';
import Tools from '../../components/Aside/Tools';

import { collectionByLibraryAction } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    libraries: appState.libraries,
  };
};

const mapDispatchToProps = dispatch => ({
  findCollectionByLibrary: library_id => dispatch(collectionByLibraryAction(library_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tools);

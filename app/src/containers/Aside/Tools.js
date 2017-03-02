import { connect } from 'react-redux';
import Tools from '../../components/Aside/Tools';

import { findCollectionByLibrary } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    libraries: appState.libraries,
  };
};

const mapDispatchToProps = {
  findCollectionByLibrary
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tools);

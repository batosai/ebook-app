import { connect } from 'react-redux';
import Tools from '../../components/Aside/Tools';

import { collection } from '../../actions';

const mapStateToProps = appState => {
  return {
    libraries: appState.libraries,
  };
};

const mapDispatchToProps = {
  findCollectionByLibrary: libraryId =>
    collection.fetchAll.dispatch({ library: libraryId }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Tools);

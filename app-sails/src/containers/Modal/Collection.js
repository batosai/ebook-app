import { connect } from 'react-redux';
import Collection from '../../components/Modal/Collection';

import { collection } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    libraries: appState.libraries
  };
};

const mapDispatchToProps = {
  createCollection: collection.create.dispatch,
  editCollection: collection.update.dispatch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);

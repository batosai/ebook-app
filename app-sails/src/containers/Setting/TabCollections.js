import { connect } from 'react-redux';
import TabCollections from '../../components/Setting/TabCollections';

import { collection } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    collections: appState.collections.all
  };
};

const mapDispatchToProps = {
  deleteCollection: collection.remove.dispatch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabCollections);

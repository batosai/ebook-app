import { connect } from 'react-redux';
import TabCollections from '../../components/Setting/TabCollections';

import { deleteCollection } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    collections: appState.collections.all
  };
};

const mapDispatchToProps = {
  deleteCollection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabCollections);

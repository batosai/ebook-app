import { connect } from 'react-redux';
import TabCollections from '../../components/Setting/TabCollections';

import { collectionDeleteRequestAction } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    collections: appState.collections.all
  };
};

const mapDispatchToProps = dispatch => ({
  deleteCollection: collection => dispatch(collectionDeleteRequestAction(collection))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabCollections);

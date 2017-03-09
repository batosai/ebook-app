import { connect } from 'react-redux';
import Collection from '../../components/Modal/Collection';

import {collectionAddRequestAction, collectionEditRequestAction } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    libraries: appState.libraries
  };
};

const mapDispatchToProps = dispatch => ({
  createCollection: collection => dispatch(collectionAddRequestAction(collection)),
  editCollection: collection => dispatch(collectionEditRequestAction(collection)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);

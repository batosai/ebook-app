import { connect } from 'react-redux';
import Collection from '../../components/Modal/Collection';

import {createCollection, editCollection } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    libraries: appState.libraries
  };
};

const mapDispatchToProps = {
  createCollection,
  editCollection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);

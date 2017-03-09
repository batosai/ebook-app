import { connect } from 'react-redux';
import Aside from '../../components/Aside';

import { toggleAsideAction, librariesRequestAction, collectionsRequestAction } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    open: appState.aside.open,
    collections: appState.collections.items,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleAside: () => dispatch(toggleAsideAction()),
  findLibraries: () => dispatch(librariesRequestAction()),
  findCollections: () => dispatch(collectionsRequestAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aside);

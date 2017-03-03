import { connect } from 'react-redux';
import Aside from '../../components/Aside';

import { toggleAside, findLibraries, findCollections } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    open: appState.aside.open,
    collections: appState.collections.items,
  };
};

const mapDispatchToProps = {
  toggleAside,
  findLibraries,
  findCollections
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aside);

import { connect } from 'react-redux';
import Aside from '../../components/Aside';

import { asideToggle, findLibraries, findCollections } from '../../actions';

const mapStateToProps = (appState) => {
  return {
    open: appState.aside.open,
    collections: appState.collections.items,
  };
};

const mapDispatchToProps = {
  asideToggle,
  findLibraries,
  findCollections
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aside);

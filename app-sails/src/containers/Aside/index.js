import { connect } from 'react-redux';
import Aside from '../../components/Aside';

import { aside, library, collection } from '../../actions';

const mapStateToProps = appState => {
  return {
    open: appState.aside.open,
    collections: appState.collections.items,
  };
};

const mapDispatchToProps = {
  toggleAside: aside.dispatch,
  findLibraries: library.fetchAll.dispatch,
  findCollections: collection.fetchAll.dispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Aside);

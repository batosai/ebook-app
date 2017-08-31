import { connect } from 'react-redux';
import Splash from '../components/Splash';

// import { getLibraries, getCollections } from '../actions';

const mapStateToProps = appState => {
  return {
    collections: appState.collections.items,
  };
};

// const mapDispatchToProps = {
//   getLibraries,
//   getCollections
// };

export default connect(mapStateToProps, null)(Splash);

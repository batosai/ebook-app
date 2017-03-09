import { connect } from 'react-redux';
import Bar from '../../components/TopBar/Bar';

import { toggleAsideAction } from '../../actions';

const mapDispatchToProps = dispatch => ({
  toggleAside: () => dispatch(toggleAsideAction())
});

export default connect(
  null,
  mapDispatchToProps
)(Bar);

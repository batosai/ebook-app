import { connect } from 'react-redux';
import Bar from '../../components/TopBar/Bar';

import { aside } from '../../actions';

const mapDispatchToProps = {
  toggleAside: aside.dispatch,
};

export default connect(
  null,
  mapDispatchToProps
)(Bar);

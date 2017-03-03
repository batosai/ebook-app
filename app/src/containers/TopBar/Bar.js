import { connect } from 'react-redux';
import Bar from '../../components/TopBar/Bar';

import { toggleAside } from '../../action';

const mapDispatchToProps = {
  toggleAside
};

export default connect(
  null,
  mapDispatchToProps
)(Bar);

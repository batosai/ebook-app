import { connect } from 'react-redux';
import Bar from '../../components/TopBar/Bar';

import { asideToggle } from '../../action';

const mapDispatchToProps = {
  asideToggle
};

export default connect(
  null,
  mapDispatchToProps
)(Bar);

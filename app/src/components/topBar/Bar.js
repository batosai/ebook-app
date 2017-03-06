import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AppsIcon from 'material-ui/svg-icons/navigation/apps';

import Tools from './Tools';

import { toggleAside } from '../../actions/aside';

const styles = {
  position: 'fixed'
};

class Bar extends Component {
  handleToggle = () => this.props.toggleAside();

  render() {
    return (
      <AppBar
        onLeftIconButtonTouchTap={this.handleToggle}
        iconElementLeft={<IconButton><AppsIcon /></IconButton>}
        iconElementRight={<Tools />}
        style={styles}
      />
    );
  }
}

Bar.propTypes = {
  toggleAside: T.func.isRequired,
};

export default connect(null, {toggleAside})(Bar);

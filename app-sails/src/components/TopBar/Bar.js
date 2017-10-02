import React, { Component } from 'react';
import { default as T } from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AppsIcon from 'material-ui/svg-icons/navigation/apps';

import Tools from './Tools';

const styles = {
  position: 'fixed',
};

class Bar extends Component {
  handleToggle = () => this.props.toggleAside();

  render = () => {
    return (
      <AppBar
        onLeftIconButtonTouchTap={this.handleToggle}
        iconElementLeft={
          <IconButton>
            <AppsIcon />
          </IconButton>
        }
        iconElementRight={<Tools />}
        style={styles}
      />
    );
  };
}

Bar.propTypes = {
  toggleAside: T.func.isRequired,
};

export default Bar;

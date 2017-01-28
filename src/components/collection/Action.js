import React, { Component, PropTypes as T } from 'react';

import IconButton from 'material-ui/IconButton';
import CloudDownloadIcon from 'material-ui/svg-icons/file/cloud-download';
import CloudQueueIcon from 'material-ui/svg-icons/file/cloud-queue';
import { fullWhite } from 'material-ui/styles/colors';

import Tools from './Tools';

class Action extends Component {

  state = {
    download: false,
  };

  handleToggle = () => {
    this.setState({download: !this.state.download});
  };

  render() {
    return (
      <div>
        {this.props.tile.local ?
          <Tools tile={this.props.tile} /> :
            this.state.download ?
              <IconButton disableTouchRipple={true}><CloudQueueIcon color={fullWhite} /></ IconButton>:
              <IconButton><CloudDownloadIcon color={fullWhite} onTouchTap={this.handleToggle} /></IconButton> }
      </div>
    );
  }
}

Action.propTypes = {
  tile: T.object.isRequired,
};

export default Action;

import React, { Component, PropTypes as T } from 'react';
import { browserHistory } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import VisibilityIcon from 'material-ui/svg-icons/action/visibility';
import { fullWhite } from 'material-ui/styles/colors';

class Tools extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Ok"
          primary={true}
          onTouchTap={this.handleClose}
        />,
      ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Delete book?
        </Dialog>
        <IconMenu
          iconButtonElement={<IconButton><MoreHorizIcon color={fullWhite} /></IconButton>} >
          <MenuItem value="View" primaryText="View" onTouchTap={()=>{browserHistory.push(`/book/${this.props.tile.id}`);}} leftIcon={<VisibilityIcon />} />

          <MenuItem
            primaryText="Convert"
            rightIcon={<ArrowDropRight />}
            menuItems={[
              <MenuItem primaryText="PDF" />,
              <MenuItem primaryText="EPUB" />,
              <MenuItem primaryText="CBR" />,
              <MenuItem primaryText="CBZ" />,
            ]}
          />
          <Divider />
          <MenuItem primaryText="Download" leftIcon={<DownloadIcon />} />
          <Divider />
          <MenuItem value="Del" primaryText="Delete" leftIcon={<DeleteIcon />} onTouchTap={this.handleOpen} />
        </IconMenu>
      </div>
    );
  }
}

Tools.propTypes = {
  tile: T.object.isRequired
};

export default Tools;

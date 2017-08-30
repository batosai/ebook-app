import React, { Component } from 'react';
import { Link } from 'react-router';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import FileDownloadIcon from 'material-ui/svg-icons/file/file-download';
import CloudOffIcon from 'material-ui/svg-icons/file/cloud-off';
import Badge from 'material-ui/Badge';
import { fullWhite } from 'material-ui/styles/colors';

import Menu from './Menu';

const styles = {
  toolbar: {backgroundColor: 'transparent', marginTop: '-4px', padding: 0},
  containerBadge: {marginTop: -10},
  badge: {top: 24, right: 20},
  separator: {margin: 0}
};

class Tools extends Component {
  render = () => {
    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup>
          <Link to={'/setting'}><IconButton><CloudOffIcon color={fullWhite} /></IconButton></Link>
          <Link to={'/task'}>
            <Badge
            badgeContent={4}
            secondary={true}
            style={styles.containerBadge}
            badgeStyle={styles.badge}
            >
              <IconButton>
                <FileDownloadIcon color={fullWhite} />
              </IconButton>
            </Badge>
          </Link>
          <ToolbarSeparator style={styles.separator} />
          <Menu />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

// Tools.propTypes = {
//   asideToggle: T.func.isRequired,
// };

export default Tools;

import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import HelpIcon from 'material-ui/svg-icons/action/help';
import { fullWhite } from 'material-ui/styles/colors';


// const MenuRight = (props) => (
//   <IconMenu
//     {...props}
//     iconButtonElement={<IconButton><MoreHorizIcon color={fullWhite} /></IconButton>}
//     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//     targetOrigin={{horizontal: 'right', vertical: 'top'}}
//   >
//     <Link to={'setting'}><MenuItem primaryText="Settings" leftIcon={<SettingsIcon />} /></Link>
//     <MenuItem primaryText="Help" leftIcon={<HelpIcon />} />
//   </IconMenu>
// );
// MenuRight.muiName = 'IconMenu';

class Menu extends Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={<IconButton><MoreHorizIcon color={fullWhite} /></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <Link to={'/setting'}><MenuItem primaryText="Settings" leftIcon={<SettingsIcon />} /></Link>
        <MenuItem primaryText="Help" leftIcon={<HelpIcon />} />
      </IconMenu>
    );
  }
}

export default Menu;

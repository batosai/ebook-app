import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400} from 'material-ui/styles/colors';

const style = {
  padding:0,
  width:'auto',
  height:'auto'
};

const iconButtonElement = (
  <IconButton style={style}>
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const toolsActions = (onEdit, onDelete) => (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem leftIcon={<EditIcon />} onTouchTap={onEdit}>Edit</MenuItem>
    <MenuItem leftIcon={<DeleteIcon />} onTouchTap={onDelete}>Delete</MenuItem>
  </IconMenu>
);

export default toolsActions;

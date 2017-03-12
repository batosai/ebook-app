import React, { Component, PropTypes as T } from 'react';
import { browserHistory } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import VisibilityIcon from 'material-ui/svg-icons/action/visibility';
import { fullWhite } from 'material-ui/styles/colors';

import * as Modal from '../Modal';

class Tools extends Component {

  state = {
    modal: {
      delete: { open:false },
      book: { open:false }
    }
  };

  modalToggle = (type) => {
    let modal = this.state.modal;
    modal[type].open = !modal[type].open;
    this.setState({
      modal
    });
  };

  handleEdit = () => {
    this.modalToggle('book');
  };

  handleDelete = () => {
    this.props.deleteBook(this.props.tile.id);
    this.modalToggle('delete');
  };

  confirmDelete = () => {
    this.setState({modal: !this.state.modal});
    this.modalToggle('delete');
  };

  renderModalBook = () => (
    <Modal.Book
      open={this.state.modal.book.open}
      onRequestClose={()=>this.modalToggle('book')}
      id={this.props.tile.id} />
  );

  renderModalDelete = () => (
    <Modal.Delete
      open={this.state.modal.delete.open}
      onRequestClose={()=>this.modalToggle('delete')}
      onRequestDelete={this.handleDelete}>
      Delete book?
    </Modal.Delete>
  );

  render = () => {
    return (
      <div>
        {this.state.modal.book.open ? this.renderModalBook() : ''}
        {this.state.modal.delete.open ? this.renderModalDelete() : ''}

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
          <MenuItem value="Edit" primaryText="Edit" leftIcon={<EditIcon />} onTouchTap={this.handleEdit} />
          <MenuItem value="Del" primaryText="Delete" leftIcon={<DeleteIcon />} onTouchTap={this.confirmDelete} />
        </IconMenu>
      </div>
    );
  }
}

Tools.propTypes = {
  tile: T.object.isRequired,
  deleteBook: T.func.isRequired,
};

export default Tools;

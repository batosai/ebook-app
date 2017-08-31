import React, { Component, PropTypes as T } from 'react';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import * as Modal from '../Modal';

import toolsActions from './toolsActions';

class TabLibraries extends Component {
  state = {
    id: 0,
    library: {},
    modal: {
      delete: { open: false },
      library: { open: false },
    },
  };

  modalToggle = type => {
    let modal = this.state.modal;
    modal[type].open = !modal[type].open;
    this.setState({
      modal,
    });
  };

  handleCreate = () => {
    this.modalToggle('library');
  };

  handleEdit = library => {
    this.setState({
      library,
    });
    this.modalToggle('library');
  };

  handleDelete = () => {
    this.props.deleteLibrary({ id: this.state.id });
    this.modalToggle('delete');
  };

  confirmDelete = id => {
    this.setState({ id });
    this.modalToggle('delete');
  };

  renderModalDelete = () => (
    <Modal.Delete
      title="Library"
      open={this.state.modal.delete.open}
      onRequestClose={() => this.modalToggle('delete')}
      onRequestDelete={this.handleDelete}
    >
      Delete library?
    </Modal.Delete>
  );

  renderModalLibrary = () => (
    <Modal.Library
      open={this.state.modal.library.open}
      onRequestClose={() => this.modalToggle('library')}
      library={this.state.library}
    />
  );

  render = () => {
    return (
      <div>
        <List>
          {this.props.libraries ? (
            this.props.libraries.map(library => (
              <ListItem
                key={library.id}
                primaryText={library.name}
                rightIcon={toolsActions(
                  () => this.handleEdit(library),
                  () => this.confirmDelete(library.id),
                )}
              />
            ))
          ) : null}
        </List>
        <RaisedButton
          secondary={true}
          onTouchTap={this.handleCreate}
          label="Add"
          fullWidth={true}
        />

        {this.renderModalDelete()}
        {this.renderModalLibrary()}
      </div>
    );
  };
}

TabLibraries.propTypes = {
  libraries: T.array,
  deleteLibrary: T.func.isRequired,
};

export default TabLibraries;

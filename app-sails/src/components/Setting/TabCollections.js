import React, { Component } from 'react';
import { default as T } from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import * as Modal from '../Modal';

import toolsActions from './toolsActions';

class TabCollections extends Component {
  state = {
    id: 0,
    collection: {},
    modal: {
      delete: { open: false },
      collection: { open: false },
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
    this.modalToggle('collection');
  };

  handleEdit = collection => {
    this.setState({
      collection,
    });
    this.modalToggle('collection');
  };

  handleDelete = () => {
    this.props.deleteCollection({ id: this.state.id });
    this.modalToggle('delete');
  };

  confirmDelete = id => {
    this.setState({ id });
    this.modalToggle('delete');
  };

  renderModalDelete = () => (
    <Modal.Delete
      title="Collection"
      open={this.state.modal.delete.open}
      onRequestClose={() => this.modalToggle('delete')}
      onRequestDelete={this.handleDelete}
    >
      Delete collection?
    </Modal.Delete>
  );

  renderModalCollection = () => (
    <Modal.Collection
      open={this.state.modal.collection.open}
      onRequestClose={() => this.modalToggle('collection')}
      collection={this.state.collection}
    />
  );

  render = () => {
    return (
      <div>
        <List>
          {this.props.collections ? (
            this.props.collections.map(collection => (
              <ListItem
                key={collection.id}
                primaryText={collection.title}
                rightIcon={toolsActions(
                  () => this.handleEdit(collection),
                  () => this.confirmDelete(collection.id),
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
        {this.renderModalCollection()}
      </div>
    );
  };
}

TabCollections.propTypes = {
  collections: T.array,
  deleteCollection: T.func.isRequired,
};

export default TabCollections;

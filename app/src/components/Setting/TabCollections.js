import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import { deleteCollection } from '../../actions/collections';

import ModalCollection from '../Modal/Collection';
import ModalDelete from '../Modal/Delete';

import toolsActions from './toolsActions';

class TabCollections extends Component {
  state = {
    id: 0,
    collection:{},
    modal: {
      delete: { open:false },
      collection: { open:false }
    }
  };

  modalToggle = (type) => {
    let modal = this.state.modal;
    modal[type].open = !modal[type].open;
    this.setState({
      modal
    });
  };

  handleCreate = () => {
    this.modalToggle('collection');
  };

  handleEdit = (collection) => {
    this.setState({
      collection
    });
    this.modalToggle('collection');
  };

  handleDelete = () => {
    this.props.deleteCollection(this.state.id);
    this.modalToggle('delete');
  };

  confirmDelete = (id) => {
    this.setState({id});
    this.modalToggle('delete');
  };

  renderModalDelete = () => (
    <ModalDelete
      title="Collection"
      open={this.state.modal.delete.open}
      onRequestClose={()=>this.modalToggle('delete')}
      onRequestDelete={this.handleDelete}>
      Delete collection?
    </ModalDelete>
  );

  renderModalCollection = () => (
    <ModalCollection
      open={this.state.modal.collection.open}
      onRequestClose={()=>this.modalToggle('collection')}
      collection={this.state.collection} />
  );

  render() {
    return (
      <div>
        <List>
          {this.props.collections.map(collection => (
              <ListItem
                key={collection.id}
                primaryText={collection.title}
                rightIcon={toolsActions(
                  () => this.handleEdit(collection),
                  () => this.confirmDelete(collection.id)
                )} />
          ))}
        </List>
        <RaisedButton secondary={true} onTouchTap={this.handleCreate} label="Add" fullWidth={true} />

        {this.renderModalDelete()}
        {this.renderModalCollection()}
      </div>
    );
  }
}

TabCollections.propTypes = {
  collections: T.array,
  deleteCollection: T.func.isRequired
};

function mapStateToProps(appState) {
  return {
    collections: appState.collections.all
  };
}

export default connect(mapStateToProps, {deleteCollection})(TabCollections);

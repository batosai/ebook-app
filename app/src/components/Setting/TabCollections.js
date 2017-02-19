import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import { deleteCollection } from '../../actions/collections';
import { modalCollectionToggle, modalDeleteToggle } from '../../actions/modals';

import ModalCollection from './ModalCollection';
import ModalDelete from './ModalDelete';

import toolsActions from './toolsActions';

class TabCollections extends Component {
  state = {
    id: 0,
    collection:{}
  };

  handleCreate = () => {
    this.props.modalCollectionToggle();
  };

  handleEdit = (collection) => {
    this.setState({
      collection
    });
    this.props.modalCollectionToggle();
  };

  handleDelete = () => {
    this.props.deleteCollection(this.state.id);
    this.props.modalDeleteToggle('collection');
  };

  confirmDelete = (id) => {
    this.setState({id});
    this.props.modalDeleteToggle('collection');
  };

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

        <ModalDelete type="collection" title="Collection" onDelete={this.handleDelete}>Delete collection?</ModalDelete>
        <ModalCollection collection={this.state.collection} />
      </div>
    );
  }
}

TabCollections.propTypes = {
  collections: T.array,
  modalCollectionToggle: T.func.isRequired,
  deleteCollection: T.func.isRequired
};

function mapStateToProps(appState) {
  return {
    collections: appState.collections.all
  };
}

export default connect(mapStateToProps, {modalCollectionToggle, modalDeleteToggle, deleteCollection})(TabCollections);

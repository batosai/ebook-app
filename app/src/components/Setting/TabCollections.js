import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

import { deleteCollection } from '../../actions/collections';

import ModalCollection from './ModalCollection';
import modalActions from './modalActions';

class TabCollections extends Component {
  state = {
    open: false,
    edit: false,
    collection:{},
    id: 0
  };

  handleOpen = (id) => {
    this.setState({open: true, id});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleEdit = (collection) => {
    this.setState({
      edit: !this.state.edit,
      collection
    });
  };

  delete = () => {
    this.props.deleteCollection(this.state.id);
    this.setState({open: false});
  };

  render() {
    const actions = modalActions(this.handleClose, this.delete);

    return (
      <div>
        <Dialog
          title="Collection"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Delete collection?
        </Dialog>
        <List>
          {this.props.collections.map(collection => (
              <ListItem
                key={collection.id}
                primaryText={collection.title}
                onTouchTap={e => this.handleEdit(collection)}
                rightIcon={<DeleteIcon onTouchTap={() => this.handleOpen(collection.id)} />} />
          ))}
        </List>
        <ModalCollection edit={this.state.edit} collection={this.state.collection} />
      </div>
    );
  }
}

TabCollections.propTypes = {
  collections: T.array,
  deleteCollection: T.func.isRequired
};

TabCollections.defaultProps = {
  collections: []
};

function mapStateToProps(appState) {
  return {
    collections: appState.collections.all
  };
}
//TODO probleme state.edit no change state... second clic for edit not found
//TODO DELETE launch edit 

export default connect(mapStateToProps, {deleteCollection})(TabCollections);

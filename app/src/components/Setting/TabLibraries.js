import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import { deleteLibrary } from '../../actions/libraries';
import { modalLibraryToggle, modalDeleteToggle } from '../../actions/modals';

import ModalLibrary from './ModalLibrary';
import ModalDelete from './ModalDelete';

import toolsActions from './toolsActions';

class TabLibraries extends Component {
  state = {
    id: 0,
    library: {}
  };

  handleCreate = () => {
    this.props.modalLibraryToggle();
  };

  handleEdit = (library) => {
    this.setState({
      library
    });
    this.props.modalLibraryToggle();
  };

  handleDelete = () => {
    this.props.deleteLibrary(this.state.id);
    this.props.modalDeleteToggle('library');
  };

  confirmDelete = (id) => {
    this.setState({id});
    this.props.modalDeleteToggle('library');
  };

  render() {
    return (
      <div>
        <List>
          {this.props.libraries.map(library => (
              <ListItem
                key={library.id}
                primaryText={library.name}
                rightIcon={toolsActions(
                  () => this.handleEdit(library),
                  () => this.confirmDelete(library.id)
                )} />
          ))}
        </List>
        <RaisedButton secondary={true} onTouchTap={this.handleCreate} label="Add" fullWidth={true} />

        <ModalDelete type="library" title="Library" onDelete={this.handleDelete}>Delete library?</ModalDelete>
        <ModalLibrary library={this.state.library} />
      </div>
    );
  }
}

TabLibraries.propTypes = {
  libraries: T.array,
  deleteLibrary: T.func.isRequired,
  modalLibraryToggle: T.func.isRequired,
};

function mapStateToProps(appState) {
  return {
    libraries: appState.libraries,
  };
}

export default connect(mapStateToProps, {modalLibraryToggle, modalDeleteToggle,  deleteLibrary})(TabLibraries);

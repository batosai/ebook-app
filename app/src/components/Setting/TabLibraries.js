import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

import { deleteLibrary } from '../../actions/libraries';

import ModalLibrary from './ModalLibrary';
import modalActions from './modalActions';

class TabLibraries extends Component {
  state = {
    open: false,
    id: 0
  };

  handleOpen = (id) => {
    this.setState({open: true, id});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleEdit = (library) => {
    this.setState({
      edit: !this.state.edit,
      library
    });
  };

  delete = () => {
    this.props.deleteLibrary(this.state.id);
    this.setState({open: false});
  };

  render() {
    const actions = modalActions(this.handleClose, this.delete);

    return (
      <div>
        <Dialog
          title="Library"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Delete library?
        </Dialog>
        <List>
          {this.props.libraries.map(library => (
              <ListItem
                key={library.id}
                primaryText={library.name}
                onTouchTap={e => this.handleEdit(library)}
                rightIcon={<DeleteIcon onTouchTap={() => this.handleOpen(library.id)} />} />
          ))}
        </List>
        <ModalLibrary edit={this.state.edit} library={this.state.library} />
      </div>
    );
  }
}

TabLibraries.propTypes = {
  libraries: T.array,
  deleteLibrary: T.func.isRequired
};

TabLibraries.defaultProps = {
  libraries: []
};

function mapStateToProps(appState) {
  return {
    libraries: appState.libraries
  };
}

export default connect(mapStateToProps, {deleteLibrary})(TabLibraries);

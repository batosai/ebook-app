import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

import { deleteLibrary } from '../../actions/libraries';

import AddLibrary from './AddLibrary';

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

  delete = () => {
    this.props.deleteLibrary(this.state.id);
    this.setState({open: false});
  };

  render() {
    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Ok"
          primary={true}
          onTouchTap={this.delete}
        />,
      ];

    return (
      <div>
        <Dialog
          title="Add library"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Delete book?
        </Dialog>
        <List>
          {this.props.libraries.map(library => (
              <ListItem key={library.id} primaryText={library.name} rightIcon={<DeleteIcon onTouchTap={() => this.handleOpen(library.id)} />} />
          ))}
        </List>
        <AddLibrary />
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

import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

import modalActions from './modalActions';

import { createLibrary, editLibrary } from '../../actions/libraries';
import { modalLibraryToggle } from '../../actions/modals';

class ModalLibrary extends Component {
  state = {
    id: null,
    name: ''
  };

  componentDidUpdate (prevProps, prevState) {
    if(prevProps.library !== this.props.library) {
      this.setState({
        id:this.props.library.id,
        name: this.props.library.name
      });
    }
  }

  handleClose = () => {
    this.setState({
      id:null,
      name:''
    });
    this.props.modalLibraryToggle();
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  save = () => {
    if(this.state.id) {
      this.props.editLibrary(this.state);
    }
    else {
      this.props.createLibrary(this.state.name);
    }

    this.props.modalLibraryToggle();
    this.setState({
      id:null,
      name:''
    });
  };

  render() {
    const actions = modalActions(this.handleClose, this.save);

    return (
      <Dialog
        title={this.state.id ? "Edit library" : "Add library"}
        actions={actions}
        modal={false}
        open={this.props.modals.library.open}
        onRequestClose={this.handleClose}
      >
        <TextField
          hintText="Name"
          floatingLabelText="Name"
          errorText="This name is required"
          fullWidth={true}
          value={this.state.name}
          onChange={this.handleChange} />
      </Dialog>
    );
  }
}

ModalLibrary.propTypes = {
  modals: T.object.isRequired,
  modalLibraryToggle: T.func.isRequired,
  createLibrary: T.func.isRequired,
  editLibrary: T.func.isRequired,
  library: T.object
};

function mapStateToProps(appState) {
  return {
    modals: appState.modals,
  };
}

export default connect(mapStateToProps, {modalLibraryToggle, createLibrary, editLibrary})(ModalLibrary);

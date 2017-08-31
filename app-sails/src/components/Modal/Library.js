import React, { Component, PropTypes as T } from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

import modalActions from './modalActions';

class ModalLibrary extends Component {
  state = {
    id: null,
    name: '',
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.library !== this.props.library) {
      this.setState({
        id: this.props.library.id,
        name: this.props.library.name,
      });
    }
  };

  handleClose = () => {
    this.setState({
      id: null,
      name: '',
    });
    this.props.onRequestClose();
  };

  handleChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  save = () => {
    if (this.state.id) {
      this.props.editLibrary(this.state);
    } else {
      this.props.createLibrary(this.state);
    }

    this.props.onRequestClose();
    this.setState({
      id: null,
      name: '',
    });
  };

  render = () => {
    const actions = modalActions(this.handleClose, this.save);

    return (
      <Dialog
        title={this.state.id ? 'Edit library' : 'Add library'}
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.handleClose}
      >
        <TextField
          autoFocus
          hintText="Name"
          floatingLabelText="Name"
          errorText="This name is required"
          fullWidth={true}
          value={this.state.name}
          onChange={this.handleChange}
        />
      </Dialog>
    );
  };
}

ModalLibrary.propTypes = {
  open: T.bool.isRequired,
  createLibrary: T.func.isRequired,
  editLibrary: T.func.isRequired,
  library: T.object,
};

export default ModalLibrary;

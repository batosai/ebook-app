import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import modalActions from './modalActions';

import { createLibrary, editLibrary } from '../../actions/libraries';

class ModalLibrary extends Component {
  state = {
    open: false,
    id: null,
    name: ''
  };

  componentDidUpdate (prevProps, prevState) {
    if(prevProps.edit !== this.props.edit) {
      this.setState({
        open: this.props.edit,
        id:this.props.library.id,
        name: this.props.library.name
      });
    }
  }

  handleOpen = () => {
    this.setState({
      open: true,
      id:null,
      name:''
    });
  };

  handleClose = () => {
    this.setState({open: false});
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

    this.setState({
      open:false,
      id:null,
      name:''
    });
  };

  render() {
    const actions = modalActions(this.handleClose, this.save);

    return (
      <div>
        <Dialog
          title={this.state.id ? "Edit library" : "Add library"}
          actions={actions}
          modal={false}
          open={this.state.open}
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
        <RaisedButton secondary={true} onTouchTap={this.handleOpen} label="Add" fullWidth={true} />
      </div>
    );
  }
}

ModalLibrary.propTypes = {
  createLibrary: T.func.isRequired,
  editLibrary: T.func.isRequired,
  edit: T.bool,
  library: T.object
};

export default connect(null, {createLibrary, editLibrary})(ModalLibrary);

import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { createLibrary } from '../../actions/libraries';

class AddLibrary extends Component {
  state = {
    open: false,
    value: ''
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  save = () => {
    this.props.createLibrary(this.state.value);
    this.setState({open: false, value: ''});
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
          onTouchTap={this.save}
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
          <TextField
            hintText="Name"
            errorText="This name is required"
            fullWidth={true}
            value={this.state.value}
            onChange={this.handleChange} />
        </Dialog>
        <RaisedButton secondary={true} onTouchTap={this.handleOpen} label="Add" fullWidth={true} />
      </div>
    );
  }
}

AddLibrary.propTypes = {
  createLibrary: T.func.isRequired
};

export default connect(null, {createLibrary})(AddLibrary);

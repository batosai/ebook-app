import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import modalActions from './modalActions';

import {createCollection, editCollection } from '../../actions/collections';

class ModalCollection extends Component {
  state = {
    open: false,
    id: null,
    title: '',
    library_id: null,
  };

  componentDidUpdate (prevProps, prevState) {
    if(prevProps.edit !== this.props.edit) {
      this.setState({
        open: this.props.edit,
        id:this.props.collection.id,
        title: this.props.collection.title,
        library_id: this.props.collection.library_id,
      });
    }
  }

  handleOpen = () => {
    this.setState({
      open: true,
      id:null,
      title:'',
      library_id:null
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChangeTextField = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSelectField = (event, index, value) => {
    this.setState({
      library_id: parseInt(value, 10),
    });
  };

  save = () => {
    if(this.state.id) {
      this.props.editCollection(this.state);
    }
    else {
      this.props.createCollection({
        title:this.state.title,
        library_id:this.state.library_id
      });
    }

    this.setState({
      open:false,
      id:null,
      title:'',
      library_id:null
    });
  };

  render() {
    const actions = modalActions(this.handleClose, this.save);

    return (
      <div>
        <Dialog
          title={this.state.id ? "Edit collection" : "Add collection"}
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
            value={this.state.title}
            onChange={this.handleChangeTextField} />

          <SelectField
            floatingLabelText="Library"
            fullWidth={true}
            value={this.state.library_id}
            onChange={this.handleChangeSelectField}
          >
            {this.props.libraries.map(library => (
                <MenuItem key={library.id} value={library.id} primaryText={library.name} />
            ))}
          </SelectField>
        </Dialog>
        <RaisedButton secondary={true} onTouchTap={this.handleOpen} label="Add" fullWidth={true} />
      </div>
    );
  }
}

ModalCollection.propTypes = {
  libraries: T.array,
  editCollection: T.func.isRequired,
  createCollection: T.func.isRequired,
  edit: T.bool,
  collection: T.object
};

ModalCollection.defaultProps = {
  libraries: []
};

function mapStateToProps(appState) {
  return {
    libraries: appState.libraries
  };
}

export default connect(mapStateToProps, {createCollection, editCollection})(ModalCollection);

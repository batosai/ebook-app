import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';

import modalActions from './modalActions';

import {createCollection, editCollection } from '../../actions/collections';
import { modalCollectionToggle } from '../../actions/modals';

class ModalCollection extends Component {
  state = {
    id: null,
    title: '',
    library_id: null,
  };

  componentDidUpdate (prevProps, prevState) {
    if(prevProps.collection !== this.props.collection) {
      this.setState({
        id:this.props.collection.id,
        title: this.props.collection.title,
        library_id: this.props.collection.library_id,
      });
    }
  }

  handleClose = () => {
    this.setState({
      id:null,
      title:'',
      library_id:null
    });
    this.props.modalCollectionToggle();
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
      id:null,
      title:'',
      library_id:null
    });
    this.props.modalCollectionToggle();
  };

  render() {
    const actions = modalActions(this.handleClose, this.save);

    return (
      <Dialog
        title={this.state.id ? "Edit collection" : "Add collection"}
        actions={actions}
        modal={false}
        open={this.props.modals.collection.open}
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
    );
  }
}

ModalCollection.propTypes = {
  modals: T.object.isRequired,
  libraries: T.array,
  modalCollectionToggle: T.func.isRequired,
  editCollection: T.func.isRequired,
  createCollection: T.func.isRequired,
  collection: T.object
};

ModalCollection.defaultProps = {
  libraries: []
};

function mapStateToProps(appState) {
  return {
    modals: appState.modals,
    libraries: appState.libraries
  };
}

export default connect(mapStateToProps, {modalCollectionToggle, createCollection, editCollection})(ModalCollection);

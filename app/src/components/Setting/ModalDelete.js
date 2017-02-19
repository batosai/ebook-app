import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';

import { deleteLibrary } from '../../actions/libraries';
import { modalDeleteToggle, modalDeleteType } from '../../actions/modals';

import modalActions from './modalActions';

class ModalDelete extends Component {

  componentDidUpdate (prevProps, prevState) {
    if(prevProps.type !== this.props.type) {
      //TODO PB
      console.log(this.props.type);
      this.props.modalDeleteType(this.props.type);
    }
  }

  handleClose = () => {
    this.props.modalDeleteToggle();
  };

  render() {
    const actions = modalActions(this.handleClose, this.props.onDelete);

    return (
      <Dialog
        title={this.props.title}
        actions={actions}
        modal={false}
        open={(this.props.modals.delete.open && this.props.modals.delete.type===this.props.type)}
        onRequestClose={this.handleClose}
      >
        { this.props.children }
      </Dialog>
    );
  }
}

ModalDelete.propTypes = {
  id: T.number,
  modals: T.object.isRequired,
  title: T.string.isRequired,
  type: T.string.isRequired,
  deleteLibrary: T.func.isRequired,
  modalDeleteToggle: T.func.isRequired,
  modalDeleteType: T.func.isRequired,
};

ModalDelete.defaultProps = {
  id: 0,
  title: '',
};

function mapStateToProps(appState) {
  return {
    modals: appState.modals,
  };
}

export default connect(mapStateToProps, {modalDeleteToggle, modalDeleteType, deleteLibrary})(ModalDelete);

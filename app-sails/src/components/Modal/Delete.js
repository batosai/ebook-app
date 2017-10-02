import React, { Component } from 'react';
import { default as T } from 'prop-types';
import Dialog from 'material-ui/Dialog';

import modalActions from './modalActions';

class ModalDelete extends Component {
  render = () => {
    const actions = modalActions(
      this.props.onRequestClose,
      this.props.onRequestDelete,
    );

    return (
      <Dialog
        title={this.props.title}
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.onRequestClose}
      >
        {this.props.children}
      </Dialog>
    );
  };
}

ModalDelete.propTypes = {
  id: T.number,
  title: T.string.isRequired,
  open: T.bool.isRequired,
  onRequestDelete: T.func.isRequired,
  onRequestClose: T.func.isRequired,
};

ModalDelete.defaultProps = {
  id: 0,
  title: '',
};

export default ModalDelete;

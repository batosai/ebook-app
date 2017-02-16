import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const modalActions = (cancel, ok) => {
  return [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={cancel}
      />,
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={ok}
      />
    ]
}

export default modalActions;

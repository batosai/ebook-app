import React, { Component } from 'react';
import { default as T } from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Progress extends Component {
  renderLinearProgress = () => {
    if (this.props.value) {
      return <LinearProgress mode="determinate" value={this.props.value} />;
    }
    return <LinearProgress mode="indeterminate" />;
  };

  render = () => {
    return (
      <Card style={{ margin: 22 }}>
        <CardHeader
          title={this.props.children}
          subtitle="Téléchargement en cours"
        />
        <CardActions style={{ float: 'right' }}>
          <FlatButton label="Cancel" />
        </CardActions>
        {this.renderLinearProgress()}
      </Card>
    );
  };
}

Progress.propTypes = {
  value: T.number,
};

export default Progress;

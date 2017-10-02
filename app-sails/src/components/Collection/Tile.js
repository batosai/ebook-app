import React, { Component } from 'react';
import { default as T } from 'prop-types';
import { browserHistory } from 'react-router';
import { GridTile } from 'material-ui/GridList';
import { config } from '../../config';

import Action from './Action';

class Tile extends Component {
  render = () => {
    return (
      <GridTile
        title={this.props.tile.title}
        subtitle={
          <span>
            by <b>{this.props.tile.author}</b>
          </span>
        }
        actionIcon={<Action tile={this.props.tile} />}
      >
        <img
          src={`${config.server}/books/${this.props.tile.id}/illustration?cache=${this.props.tile.updatedAt}`}
          onTouchTap={() => {
            browserHistory.push(`/book/${this.props.tile.id}`);
          }}
          style={{ cursor: 'pointer' }}
          alt=""
        />
      </GridTile>
    );
  };
}

Tile.propTypes = {
  tile: T.object.isRequired,
};

export default Tile;

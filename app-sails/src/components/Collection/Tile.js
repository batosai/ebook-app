import React, { Component, PropTypes as T } from 'react';
import { browserHistory } from 'react-router';
import { GridTile } from 'material-ui/GridList';

import Action from './Action';

class Tile extends Component {

  render = () => {
    return (
      <GridTile
        title={this.props.tile.title}
        subtitle={<span>by <b>{this.props.tile.author}</b></span>}
        actionIcon={<Action tile={this.props.tile} />} >
        <img src={this.props.tile.img} onTouchTap={()=>{browserHistory.push(`/book/${this.props.tile.id}`);}} style={{cursor:'pointer'}} alt="" />
      </GridTile>
    );
  }
}

Tile.propTypes = {
  tile: T.object.isRequired,
};

export default Tile;

import React, { Component, PropTypes as T } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Link } from 'react-router';
import { config } from '../../config';

class Library extends Component {
  render = () => {
    return (
      <div style={this.props.style.root}>
        <GridList cellHeight={180} style={this.props.style.gridList}>
          {this.props.tiles.map(tile => (
            <Link key={tile.id} to={`/collection/${tile.id}`}>
              <GridTile
                title={tile.title}
                subtitle={
                  <span>
                    by <b>{tile.author}</b>
                  </span>
                }
              >
                <img src={`${config.server}/collections/${tile.id}/illustration`} alt="" />
              </GridTile>
            </Link>
          ))}
        </GridList>
      </div>
    );
  };
}

Library.propTypes = {
  style: T.object.isRequired,
  tiles: T.arrayOf(T.object).isRequired,
};

export default Library;

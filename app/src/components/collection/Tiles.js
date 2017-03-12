import React, { Component, PropTypes as T } from 'react';
import { GridList } from 'material-ui/GridList';

import Tile from './Tile';

const mq = window.matchMedia( "(max-width: 1024px)" );

if (mq.matches) {
  // window width is at least 500px
} else {
  // window width is less than 500px
}

class Collection extends Component {

  state = {
    download: false,
  };

  handleToggle = () => {
    this.setState({download: !this.state.download});
  };

  render = () => {
    return (
      <div style={this.props.style.root}>
        <GridList
          cellHeight={280}
          cols={mq.matches ? 4 : 6}
          padding={5}
          style={this.props.style.gridList} >
          {this.props.tiles.map((tile) => (
            <Tile
              key={tile.id}
              tile={tile}  />
          ))}
        </GridList>
      </div>
    );
  }
}

Collection.propTypes = {
  style: T.object.isRequired,
  tiles: T.arrayOf(T.object).isRequired,
};

export default Collection;

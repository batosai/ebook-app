import React, { Component } from 'react';
import { default as T } from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Library from '../Library';
import Tools from '../../containers/Aside/Tools';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
};

class Aside extends Component {
  state = {
    collections: [],
  };

  componentWillMount = () => {
    // TODO lancer à l'init, pendant le splashscreen
    this.props.findLibraries();
    this.props.findCollections();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.collections !== this.props.collections) {
      this.setState({
        collections: this.props.collections,
      });
    }

    if (prevProps.libraryId !== this.props.libraryId) {
      this.setState({
        collections: this.props.libraryId
          ? this.props.collections.filter(
              collection => collection.library.id === this.props.libraryId,
            )
          : this.props.collections,
      });
    }
  };

  handleToggle = () => this.props.toggleAside();

  render = () => {
    return (
      <Drawer open={this.props.open}>
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          showMenuIconButton={true}
          iconElementRight={<Tools libraries={this.props.libraries} />}
          iconElementLeft={
            <IconButton>
              <NavigationClose />
            </IconButton>
          }
        />

        <Library style={style} tiles={this.state.collections} />
      </Drawer>
    );
  };
}

Aside.propTypes = {
  open: T.bool,
  toggleAside: T.func.isRequired,
  collections: T.array,
  findLibraries: T.func.isRequired,
  findCollections: T.func.isRequired,
};

Aside.defaultProps = {
  collections: [],
};

export default Aside;

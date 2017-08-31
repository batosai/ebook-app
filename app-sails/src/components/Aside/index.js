import React, { Component, PropTypes as T } from 'react';
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
  handleToggle = () => this.props.toggleAside();

  componentWillMount = () => {
    // TODO lancer à l'init, pendant le splashscreen
    this.props.findLibraries();
    this.props.findCollections();
  };

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

        <Library style={style} tiles={this.props.collections} />
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

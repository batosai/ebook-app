import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Library from '../components/Library';
import Tools from '../components/Aside/Tools';

import { asideToggle, findLibraries, findCollections } from '../actions';

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
  handleToggle = () => this.props.asideToggle();

  componentWillMount() {
    // TODO lancer à l'init, pendant le splashscreen
    this.props.findLibraries();
    this.props.findCollections();
  }

  render() {
    return (
      <Drawer open={this.props.open}>
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          showMenuIconButton={true}
          iconElementRight={<Tools libraries={this.props.libraries} />}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>} />

        <Library
          style={style}
          tiles={this.props.collections} />
      </Drawer>
    );
  }
}

Aside.propTypes = {
  open: T.bool,
  asideToggle: T.func.isRequired,
  collections: T.array,
  findLibraries: T.func.isRequired,
  findCollections: T.func.isRequired,
};

Aside.defaultProps = {
  collections: []
};

function mapStateToProps(appState) {
  return {
    open: appState.aside.open,
    collections: appState.collections.items,
  };
}

export default connect(mapStateToProps, {asideToggle, findLibraries, findCollections})(Aside);

import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Library from '../components/Library';
import Tools from '../components/Aside/Tools';

import { asideToggle } from '../actions/aside';
import { getLibraries } from '../actions/libraries';
import { getCollections } from '../actions/collections';

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
    this.props.getLibraries();
    this.props.getCollections();
  }

  componentDidUpdate (nextProps, nextState) {
    if(nextProps.collections !== this.props.collections) {
      this.props.getCollections();
    }
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
  getLibraries: T.func.isRequired,
  getCollections: T.func.isRequired,
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

export default connect(mapStateToProps, {asideToggle, getLibraries, getCollections})(Aside);

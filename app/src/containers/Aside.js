import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from 'material-ui/Toolbar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import AddIcon from 'material-ui/svg-icons/content/add';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import Library from '../components/Library';
import { fullWhite } from 'material-ui/styles/colors';

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

const Tools= (props) => (
  <Toolbar style={{backgroundColor: 'transparent', marginTop: '-4px', padding: 0}}>
    <ToolbarGroup>
      <ToolbarTitle text="Library" style={{color:fullWhite}} />
      <IconMenu
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
        iconButtonElement={<IconButton><NavigationExpandMoreIcon color={fullWhite} /></IconButton>} >
        {props.libraries.map(library => (
            <MenuItem key={library.id} primaryText={library.name} />
        ))}
      </IconMenu>
      <ToolbarSeparator style={{margin: 0}} />
      <IconButton><AddIcon color={fullWhite} /></IconButton>
    </ToolbarGroup>
  </Toolbar>
);

class Aside extends Component {
  handleToggle = () => this.props.asideToggle();

  componentWillMount() {
    // lancer à l'init, pendant le splashscreen ?
    this.props.getLibraries();
    this.props.getCollections();
  }

  componentDidUpdate (nextProps, nextState) {
    if(nextProps.libraries !== this.props.libraries) {
      this.props.getLibraries();
    }

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
  libraries: T.array,
  collections: T.array,
  getLibraries: T.func.isRequired,
  getCollections: T.func.isRequired,
};

Aside.defaultProps = {
  libraries: [],
  collections: []
};

function mapStateToProps(appState) {
  return {
    open: appState.aside.open,
    libraries: appState.libraries,
    collections: appState.collections,
  };
}

export default connect(mapStateToProps, {asideToggle, getLibraries, getCollections})(Aside);

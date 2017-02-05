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

const tilesData = [
  {
    id: 1,
    img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    id: 2,
    img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    id: 3,
    img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    id: 4,
    img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    id: 5,
    img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    id: 6,
    img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    id: 7,
    img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    id: 8,
    img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

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
    this.props.getLibraries();
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
          tiles={tilesData} />
      </Drawer>
    );
  }
}

Aside.propTypes = {
  open: T.bool,
  asideToggle: T.func.isRequired,
  libraries: T.array,
  getLibraries: T.func.isRequired,
};

Aside.defaultProps = {
  libraries: []
};

function mapStateToProps(appState) {
  return {
    open: appState.aside.open,
    libraries: appState.libraries,
  };
}

export default connect(mapStateToProps, {asideToggle, getLibraries})(Aside);

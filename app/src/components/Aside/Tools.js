import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from 'material-ui/Toolbar';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import AddIcon from 'material-ui/svg-icons/content/add';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import { fullWhite } from 'material-ui/styles/colors';

import { getLibraries } from '../../actions/libraries';
import { getCollectionByLibrary } from '../../actions/collections';

class Tools extends Component {
  state = {
    title: "Library",
  };

  collectionToggle(id){
    this.props.getCollectionByLibrary(id);
  }

  touchTap(library) {
    if(library !== undefined) {
      this.setState({
        title: library.name
      });
      this.collectionToggle(library.id);
    }
    else {
      this.setState({
        title: "Library"
      });
      this.collectionToggle();
    }
  }

  componentDidUpdate (nextProps, nextState) {
    if(nextProps.libraries !== this.props.libraries) {
      this.props.getLibraries();
    }
  }

  render() {
    return (
      <Toolbar style={{backgroundColor: 'transparent', marginTop: '-4px', padding: 0}}>
        <ToolbarGroup>
          <ToolbarTitle text={this.state.title} style={{color:fullWhite}} />
          <IconMenu
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
            iconButtonElement={<IconButton><NavigationExpandMoreIcon color={fullWhite} /></IconButton>} >
            <MenuItem primaryText="Library" onTouchTap={() => this.touchTap()} />
            {this.props.libraries.map(library => (
                <MenuItem key={library.id} primaryText={library.name} onTouchTap={() => this.touchTap(library)} />
            ))}
          </IconMenu>
          <ToolbarSeparator style={{margin: 0}} />
          <IconButton><AddIcon color={fullWhite} /></IconButton>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

Tools.propTypes = {
  libraries: T.array,
  getLibraries: T.func.isRequired,
  getCollectionByLibrary: T.func.isRequired,
};

Tools.defaultProps = {
  libraries: [],
};

function mapStateToProps(appState) {
  return {
    libraries: appState.libraries,
  };
}

export default connect(mapStateToProps, {getLibraries, getCollectionByLibrary})(Tools);

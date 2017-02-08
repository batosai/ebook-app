import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { getLibraries } from '../actions/libraries';
import { getCollections } from '../actions/collections';

class Splash extends Component {

  componentWillMount() {
    this.props.getLibraries();
    this.props.getCollections();
  }

  componentDidUpdate (nextProps, nextState) {
    if(this.props.collections.length) {
      browserHistory.push(`/collection/${this.props.collections[0].id}/`);
    }
  }

  render() {
    return (
      <div>
        Splash / Le chargement getLibraries/getCollections ne doivent pas être ici mais en amont de toutes les routes. / Une fois fit retirer les appel du aside
      </div>
    );
  }
}

Splash.propTypes = {
  collections: T.array,
  getLibraries: T.func.isRequired,
  getCollections: T.func.isRequired,
};

Splash.defaultProps = {
  collections: []
};

function mapStateToProps(appState) {
  return {
    collections: appState.collections.items,
  };
}

export default connect(mapStateToProps, {getLibraries, getCollections})(Splash);

import React, { Component } from 'react';
import { default as T } from 'prop-types';
import { browserHistory } from 'react-router';

class Splash extends Component {
  componentWillMount = () => {
    // this.props.getLibraries();
    // this.props.getCollections();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.collections.length) {
      browserHistory.push(`/collection`);
    }
  };

  render = () => {
    return (
      <div>
        Splash / Le chargement getLibraries/getCollections ne doivent pas être
        ici mais en amont de toutes les routes. / Une fois fit retirer les appel
        du aside
      </div>
    );
  };
}

Splash.propTypes = {
  collections: T.array,
  // getLibraries: T.func.isRequired,
  // getCollections: T.func.isRequired,
};

Splash.defaultProps = {
  collections: [],
};

export default Splash;

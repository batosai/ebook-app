import React, { Component } from 'react';

import TopBar from './components/topBar/Bar';
import Aside from './containers/Aside';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />

        <div style={{paddingTop: 64}}>
          { this.props.children }
        </div>

        <Aside />
      </div>
    );
  }
}

export default App;
